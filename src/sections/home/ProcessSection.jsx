import React, { useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

const processSteps = [
  {
    num: '01',
    title: 'Initial Assessment',
    description: 'We evaluate your unique situation and provide tailored advice on the best programs suitable for you and your family.'
  },
  {
    num: '02',
    title: 'Pre-Approval & Due Diligence',
    description: 'Our team conducts initial background checks to ensure a smooth application process before any investment is made.'
  },
  {
    num: '03',
    title: 'Application Preparation',
    description: 'Our dedicated processing team assists you in gathering the required documents and prepares the full application package. All paperwork is carefully reviewed and submitted to the relevant government authorities.'
  },
  {
    num: '04',
    title: 'Government Processing',
    description: 'The respective government unit processes the application. We handle all communications and provide regular updates on your status.'
  },
  {
    num: '05',
    title: 'Approval & Handover',
    description: 'Once approved, we coordinate the final investment step and facilitate the handover of your new citizenship or residency documents.'
  },
  {
    num: '06',
    title: 'Ongoing Support & Renewals',
    description: 'Our relationship does not end at approval. We provide continuous support for passport renewals, adding dependents, and other post-program services.'
  }
];

// Radius of the visual circle — tuned so the full arc fits screen height at 6 steps
const CIRCLE_RADIUS = 480;
// Total steps
const TOTAL = processSteps.length;
/**
 * Returns arc x, y offset and the angle in degrees at each position.
 * Numbers are spread from startAngle to endAngle along the RIGHT side of the circle.
 */
function getArcPosition(index, total, radius) {
  // Keep between -90 and 90 so x is never negative, meaning it will never chop off the left side
  const startAngle = -35;
  const endAngle = 35;
  const angle = startAngle + (index / (total - 1)) * (endAngle - startAngle);
  const rad = (angle * Math.PI) / 180;
  return {
    x: radius * Math.cos(rad),  // rightward from center
    y: radius * Math.sin(rad),  // up/down from center
    angle                        // degrees — used for tangential rotation
  };
}

const ProcessSection = () => {
  const containerRef = useRef(null);
  const lastStepRef = useRef(-1);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const rawActiveIndex = useTransform(scrollYProgress, [0, 1], [0, processSteps.length - 1]);
  const activeIndex = useSpring(rawActiveIndex, { stiffness: 260, damping: 60, mass: 0.8 });

  const [currentStep, setCurrentStep] = useState(0);

  useMotionValueEvent(activeIndex, 'change', (latest) => {
    const next = Math.max(0, Math.min(processSteps.length - 1, Math.round(latest)));
    if (next !== lastStepRef.current) {
      lastStepRef.current = next;
      setCurrentStep(next);
    }
  });

  // Use a dynamic CSS variable for the circle radius so it fits all screens
  // 45vh ensures the diameter (90vh) almost fills the screen height, spreading numbers wide
  const circleRadiusCSS = 'clamp(320px, 38vw, 520px)';

  const scrollToStep = (index) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const maxScrollable = Math.max(0, el.offsetHeight - window.innerHeight);
    const t = processSteps.length === 1 ? 0 : index / (processSteps.length - 1);
    const target = sectionTop + maxScrollable * t;

    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const desktopCardVariants = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        active: { opacity: 1, scale: 1, y: 0 },
        inactive: { opacity: 0.6, scale: 0.98, y: 0 },
      };
    }
    return {
      active: (dir) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        x: dir >= 0 ? 10 : -10,
        rotateY: dir >= 0 ? -6 : 6,
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      }),
      inactive: (dir) => ({
        opacity: 0.55,
        scale: 0.985,
        y: 0,
        x: 0,
        rotateY: 0,
        transition: { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] },
      }),
    };
  }, [prefersReducedMotion]);

  const TiltCard = ({ children, enabled = true, className = '' }) => {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const springX = useSpring(rotateX, { stiffness: 220, damping: 22, mass: 0.6 });
    const springY = useSpring(rotateY, { stiffness: 220, damping: 22, mass: 0.6 });
    const springMX = useSpring(mx, { stiffness: 220, damping: 22, mass: 0.6 });
    const springMY = useSpring(my, { stiffness: 220, damping: 22, mass: 0.6 });

    const handleMove = (e) => {
      if (!enabled) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      const rx = (0.5 - py) * 7; // tilt up/down
      const ry = (px - 0.5) * 10; // tilt left/right
      rotateX.set(rx);
      rotateY.set(ry);
      mx.set((px - 0.5) * 8);
      my.set((py - 0.5) * 8);
    };

    const handleLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
      mx.set(0);
      my.set(0);
    };

    return (
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transformStyle: 'preserve-3d',
          rotateX: springX,
          rotateY: springY,
          x: springMX,
          y: springMY,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section
      ref={containerRef}
      data-section="process"
      className="relative bg-white w-full"
      // Keep the panel sticky until the final step is reached.
      // Give each step ~1 viewport height of scroll.
      style={{ height: `${Math.max(1, processSteps.length) * 100}vh` }}
    >
      {/* Sticky full-screen panel */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex">

        {/* LEFT COLUMN — full height, half width */}
        <div className="relative hidden lg:flex w-1/2 h-full items-center overflow-hidden">

          {/* Circle: center at left edge, dynamic responsive sizing */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `calc(2 * ${circleRadiusCSS})`,
              height: `calc(2 * ${circleRadiusCSS})`,
              border: '2px solid #cbd5e1',
              left: '0px',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />

          {/* Numbers — fixed on arc, rotated tangentially along the arc */}
          <div className="relative">
            {processSteps.map((step, idx) => {
              // We pass 1 as radius because we'll multiply by our CSS variable
              const pos = getArcPosition(idx, TOTAL, 1);
              const isActive = currentStep === idx;

              return (
                <div
                  key={idx}
                  className="absolute select-none font-sans"
                  style={{
                    // Position along the dynamic radius
                    left: `calc(${pos.x} * ${circleRadiusCSS})`,
                    top: '50%',
                    // 1. Shift vertically to the exact y position
                    // 2. Rotate by the calculated tangent angle
                    // 3. Offset to vertically center the text on the line
                    transform: `translateY(calc(-50% + ${pos.y} * ${circleRadiusCSS})) rotate(${pos.angle}deg)`,
                    transformOrigin: 'left center',
                    color: isActive ? '#0a2540' : '#c0c8d4',
                    fontSize: isActive ? '4.5rem' : '3.2rem',
                    fontWeight: isActive ? '900' : '700',
                    lineHeight: 1,
                    opacity: isActive ? 1 : 0.75,
                    zIndex: isActive ? 10 : 1,
                    transition: 'color 0.4s ease, font-size 0.4s ease, opacity 0.4s ease',
                    paddingLeft: '32px'
                  }}
                >
                  {step.num}
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE VIEW — visible only on mobile */}
        <div className="flex lg:hidden flex-col w-full h-full relative overflow-hidden pt-[10dvh] items-center">
          {/* Mobile Headers */}
          <div className="z-10 text-center px-6 max-w-[350px] md:max-w-[560px]">
            <h2 className="text-3xl font-extrabold text-[#0a2540] mb-4 uppercase tracking-wider">Our Process</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We simplify the journey to residency and citizenship by investment through a clear, structured process supported by our experienced advisors at every step.
            </p>
          </div>

          {/* Mobile Arc & Numbers */}
          <motion.div
            className="absolute rounded-full border border-gray-400 pointer-events-none"
            style={{
              width: 'min(760px, 130vw)',
              height: 'min(760px, 130vw)',
              top: 'clamp(-470px, -40vw, -280px)',
              left: '50%',
              x: '-50%',
              rotate: useTransform(activeIndex, (val) => val * 33)
            }}
          >
            {processSteps.map((step, idx) => {
              const isActive = currentStep === idx;
              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-[50%]"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${-idx * 33}deg) translateY(calc(min(760px, 130vw) * 0.5))`,
                    transformOrigin: 'center center'
                  }}
                >
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#0a2540] w-3 h-3' : 'bg-[#cbd5e1] w-2 h-2'}`} />
                  <div className="absolute top-[8px] left-1/2 -translate-x-1/2 flex justify-center">
                    <div
                      className={`font-sans font-black transition-all duration-300 ${isActive ? 'text-[#0a2540] text-7xl mt-4 tracking-tighter' : 'text-[#c0c8d4] text-5xl mt-3 tracking-tight opacity-60'}`}
                    >
                      {step.num}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Mobile Content Card */}
          <div className="mt-[250px] md:mt-[280px] w-full px-5 pb-10 z-20 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-7 w-full max-w-sm md:max-w-[620px] border border-gray-100 min-h-[190px] md:min-h-[220px] flex flex-col justify-center"
              >
                <h3 className="text-[#0a2540] text-xl md:text-2xl font-bold tracking-tight mb-3">{processSteps[currentStep].title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {processSteps[currentStep].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="flex gap-2 mt-8 justify-center">
              {processSteps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-10 bg-[#cfb53b]' : 'w-4 bg-[#e5dfc5]'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — flex on desktop only */}
        <div
          className="hidden lg:flex w-1/2 flex-col justify-center h-full px-8 lg:px-16 xl:px-20 z-10"
          style={{ perspective: '1200px' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a2540] mb-4 uppercase tracking-tight">
            Our Process
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md">
            We simplify the journey to residency and citizenship by investment through a clear, structured process supported by our experienced advisors at every step.
          </p>

          <div className="flex flex-col gap-3 w-full max-w-lg">
            {processSteps.map((step, idx) => {
              const isActive = currentStep === idx;
              const dir = idx % 2 === 0 ? 1 : -1;

              return (
                <motion.button
                  key={idx}
                  type="button"
                  onClick={() => scrollToStep(idx)}
                  className={`text-left rounded-2xl border overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a2540]/30 focus-visible:ring-offset-2 transition-colors ${
                    isActive
                    ? 'bg-white shadow-xl shadow-gray-200/50 border-white'
                    : 'bg-gray-50/50 border-gray-100'
                  }`}
                  custom={dir}
                  variants={desktopCardVariants}
                  animate={isActive ? 'active' : 'inactive'}
                  initial={false}
                >
                  <TiltCard
                    enabled={isActive && !prefersReducedMotion}
                    className="px-6 py-5"
                  >
                    <div style={{ transform: 'translateZ(1px)' }}>
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`text-xl font-bold transition-colors duration-300 ${
                            isActive ? 'text-[#092244]' : 'text-gray-600'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <span
                          className={`font-sans text-sm font-extrabold tracking-widest ${
                            isActive ? 'text-[#0a2540]' : 'text-gray-400'
                          }`}
                        >
                          {step.num}
                        </span>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? 'auto' : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 12 : 0,
                        }}
                        className="overflow-hidden"
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="text-gray-600 leading-relaxed pr-4 text-sm md:text-base">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </TiltCard>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fade gradients top & bottom */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default ProcessSection;
