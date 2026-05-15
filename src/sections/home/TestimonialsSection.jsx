import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import testimonialBanner from '../../assets/images/testimonial-background.png';

const testimonials = [
  {
    id: 1,
    name: 'Mr. Rahul',
    location: 'Delhi, India',
    text: 'RK Global Immigration completely transformed our family\'s future. Their expert team guided us through the entire residency process with unmatched professionalism and clarity.',
    image: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'
  },
  {
    id: 2,
    name: 'Mr. Tariq',
    location: 'Dubai',
    text: 'The team\'s dedication and transparent communication made securing our Caribbean citizenship incredibly smooth. I highly recommend their services to any business owner.',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    id: 3,
    name: 'Mr. David',
    location: 'California',
    text: 'I was overwhelmed by the complexities of the business migration visa, but RK Global provided a tailored strategy that worked perfectly. Truly exceptional service.',
    image: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
  },
  {
    id: 4,
    name: 'Mrs. Fatima',
    location: 'Abu Dhabi',
    text: 'Exceptional service and deep understanding of the global mobility landscape. Highly recommended for complicated cases.',
    image: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 5,
    name: 'Ms. Emily',
    location: 'New York',
    text: 'The process was entirely seamless. Their team handled everything from document collection to final submission flawlessly.',
    image: 'https://i.pravatar.cc/150?img=11'
  }
];

// Reusable orbiting image component
const OrbitingImage = ({ image, radius, duration, initialAngle, size = 'w-16 h-16', delay = 0 }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 rounded-full z-0"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        marginLeft: `-${radius}px`,
        marginTop: `-${radius}px`,
      }}
      animate={{
        rotate: [-90, 90]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }}
      initial={{ rotate: initialAngle }}
    >
      <motion.div
        className={`absolute rounded-full overflow-hidden border-[3px] border-[#0d2350] shadow-xl ${size}`}
        style={{
          top: 0,
          left: '50%',
          x: '-50%',
          y: '-50%'
        }}
        animate={{ rotate: [90, -90] }} // Reverse of parent rotate to stay upright
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          delay: delay
        }}
        initial={{ rotate: -initialAngle }}
      >
        <img src={image} alt="Client" className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const scrollCooldown = useRef(false);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll wheel / trackpad navigation
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Use horizontal scroll (trackpad two-finger swipe) or vertical scroll
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 30) return; // ignore tiny nudges

      if (scrollCooldown.current) return; // debounce
      scrollCooldown.current = true;
      setTimeout(() => { scrollCooldown.current = false; }, 700);

      e.preventDefault();
      if (delta > 0) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      // wrap around logic
      cards.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return cards;
  };

  return (
    <section
      className="relative w-full min-h-[650px] md:min-h-[950px] overflow-hidden flex flex-col items-center justify-between pb-12 pt-16"
      style={{
        backgroundImage: `url(${testimonialBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* 
        Background Concentric Lines & Orbiting Images
        Anchored cleanly at a single central point so the orbital math perfectly aligns with the visual borders.
      */}
      <div className="absolute top-[40%] md:top-[75%] left-1/2 w-0 h-0 flex pointer-events-none z-0 transform scale-[0.35] sm:scale-[0.5] md:scale-100 origin-top">
        {/* Inner Circle (800x404 -> 400px radius half-circle) */}
        <div className="absolute top-[-400px] left-[-400px] w-[800px] h-[404px] rounded-t-[400px] border-[1px] border-b-0 border-white/50" />
        {/* Middle Circle (1091x542 -> 545.5px radius half-circle) */}
        <div className="absolute top-[-545.5px] left-[-545.5px] w-[1091px] h-[542px] rounded-t-[545.5px] border-[1px] border-b-0 border-white/30" />
        {/* Outer Circle (1344x715 -> 672px radius half-circle) */}
        <div className="absolute top-[-672px] left-[-672px] w-[1344px] h-[715px] rounded-t-[672px] border-[1px] border-b-0 border-white/20" />
      </div>

      {/* Spacer to push everything to the bottom */}
      <div className="flex-grow z-0"></div>

      {/* Header & Carousel Container pinned at the bottom */}
      <div ref={carouselRef} className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center mt-auto px-4 sm:px-6 lg:px-8">

        {/* Header Content moved directly above carousel */}
        <div className="text-center w-full mb-10 md:mb-8">
          <div className="flex items-center justify-center gap-2 text-yellow-500 font-bold mb-3 tracking-wide text-sm md:text-base">
            <FaQuoteLeft /> Testimonials
          </div>
          <h2
            className="text-[30px] md:text-[50px] font-medium leading-[1.41] tracking-normal text-white uppercase text-center"
            style={{ fontFamily: "'Outfit', 'Inter', system-ui, sans-serif" }}
          >
            What are our clients saying
          </h2>
        </div>

        {/* Desktop View (3 cards) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {getVisibleCards().map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`} // Force re-render on index change
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-[rgba(255,255,255,0.06)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] rounded-2xl p-8 flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.12)] min-h-[280px]"
              >
                <div className="mb-6">
                  <div className="w-10 h-10 rounded-full border border-yellow-500/80 flex items-center justify-center">
                    <FaQuoteLeft className="text-yellow-500 text-sm" />
                  </div>
                </div>

                <p className="text-white/90 text-[15px] leading-relaxed mb-8 flex-grow font-light">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <span className="text-white/60 text-sm">{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile/Tablet View (1 card) */}
        <div className="lg:hidden w-full max-w-md mx-auto relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-[rgba(255,255,255,0.06)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] rounded-2xl p-6 sm:p-8 flex flex-col shadow-xl"
            >
              <div className="mb-2">
                <div className="w-10 h-10 rounded-full border border-yellow-500/80 flex items-center justify-center">
                  <FaQuoteLeft className="text-yellow-500 text-sm" />
                </div>
              </div>

              <p className="text-white/90 text-[15px] sm:text-base leading-relaxed mb-4 flex-grow font-light">
                {testimonials[currentIndex].text}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <span className="text-white/60 text-sm">{testimonials[currentIndex].location}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex gap-2 mt-12 mb-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-10 bg-yellow-500' : 'w-4 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)]'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
