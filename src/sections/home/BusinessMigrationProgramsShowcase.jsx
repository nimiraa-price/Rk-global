import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import businessPrograms from '../../data/businessMigrationPrograms';

// Select curated list of programs to feature
const curatedSlugs = [
  { slug: 'uk-innovator-founder-visa', base: '/business-migration' },
  { slug: 'usa-e2-investor-visa', base: '/business-migration' },
  { slug: 'canada-ict-visa', base: '/business-migration' },
  { slug: 'portugal-d2-entrepreneur-visa', base: '/business-migration' }
];

const BusinessMigrationProgramsShowcase = () => {
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef(null);

  // Map slugs to actual program data
  const programs = curatedSlugs.map((curated, index) => {
    const program = businessPrograms.find(p => p.slug === curated.slug);
    
    // Safely parse stats
    let priceStr = 'Contact Us';
    let timeStr = 'Varies';
    if (program && program.stats && program.stats.length >= 2) {
      priceStr = program.stats[0].value;
      timeStr = program.stats[1].value;
    }
    
    return {
      id: index,
      name: program?.menuLabel || program?.name || 'Program',
      image: program?.heroImage,
      subtitle: program?.heroTitle || 'Global Mobility Pathway',
      price: priceStr,
      time: timeStr,
      slug: program?.slug,
      linkBase: curated.base
    };
  });

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll('.program-card-business');
      let closestId = activeCard;
      let minDistance = Infinity;
      const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = parseInt(card.dataset.id);
        }
      });
      
      if (closestId !== activeCard) {
        setActiveCard(closestId);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeCard]);

  return (
    <div className="w-full bg-gray-50">
      <section
        className="w-full py-8 md:py-12 bg-white overflow-hidden shadow-sm"
        style={{ fontFamily: "'Outfit', 'Inter', system-ui, sans-serif" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-6 md:mb-10">
            <h2
              className="font-bold text-gray-900 uppercase mb-4 text-[24px] leading-[141%] md:text-[40px] md:leading-normal"
            >
              Business Immigration
            </h2>
            <p
              className="text-[#8c8c8c] max-w-6xl mx-auto font-bold text-[14px] leading-[145%] md:text-[18px] md:leading-[145%]"
            >
              Expand your enterprise globally to top international destinations.
            </p>
          </div>

          {/* Carousel / Card Grid */}
          <div 
            ref={scrollContainerRef}
            className="flex flex-nowrap overflow-x-auto w-full gap-4 md:gap-6 lg:gap-8 pb-8 pt-2 px-4 md:px-8 lg:px-0 snap-x snap-mandatory hide-scrollbar justify-start" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
            {programs.map((program) => {
              if (!program.slug) return null; // skip if data not found
              const isActive = activeCard === program.id;
              
              return (
                <div 
                  key={program.id}
                  id={`business-card-${program.id}`}
                  data-id={program.id}
                  onMouseEnter={() => setActiveCard(program.id)}
                  onClick={() => setActiveCard(program.id)}
                  className={`program-card-business relative rounded-[2rem] overflow-hidden cursor-pointer shrink-0 snap-center
                    min-h-[440px] md:min-h-[490px]
                    ${isActive
                      ? 'w-[80vw] sm:w-[320px] md:w-[380px] lg:w-[380px] shadow-2xl z-10'
                      : 'w-[80vw] sm:w-[240px] md:w-[280px] lg:w-[320px] shadow-lg'
                    }
                  `}
                  style={{
                    transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
                    willChange: 'width, box-shadow',
                    opacity: isActive ? 1 : 0.9,
                  }}
                >
                  {/* Background Image */}
                  {program.image && (
                    <img
                      src={program.image}
                      alt={program.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      }}
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      background: isActive
                        ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 45%, transparent 100%)'
                        : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)',
                    }}
                  />

                  {/* Content */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-end p-5 md:p-4 ${isActive ? 'items-start' : 'items-center pb-12'}`}
                    style={{ transition: 'padding 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  >
                    <h3
                      className="text-white font-bold tracking-wide uppercase"
                      style={{
                        transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1), margin 0.4s ease, text-align 0.3s ease',
                        fontSize: isActive ? undefined : undefined,
                      }}
                    >
                      <span className={`block transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'text-2xl md:text-[1.7rem] leading-tight' : 'text-xl md:text-2xl text-center w-full'}`}>
                        {program.name}
                      </span>
                    </h3>

                    {/* Expanded Details */}
                    <div
                      className="flex flex-col items-start w-full"
                      style={{
                        transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), margin-top 0.4s ease',
                        maxHeight: isActive ? '300px' : '0px',
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? '8px' : '0px',
                        overflow: 'hidden',
                      }}
                    >
                      <p className="text-white/90 text-sm md:text-base font-medium mb-5 leading-snug line-clamp-2">
                        {program.subtitle}
                      </p>

                      <div className="flex items-center gap-3 mb-6 flex-wrap">
                        <span className="bg-white/20 text-white backdrop-blur-md text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10">
                          {program.price}
                        </span>
                        <span className="bg-white/20 text-white backdrop-blur-md text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10">
                          {program.time}
                        </span>
                      </div>

                      <Link
                        to={`${program.linkBase}/${program.slug}`}
                        style={{
                          borderRadius: '30px',
                          fontWeight: 900,
                          padding: '18px',
                          background: 'linear-gradient(90deg, #002668 0%, #0A38A0 100%)',
                          color: 'white',
                          fontSize: '16px',
                          lineHeight: '158%',
                        }}
                        className="w-full text-center hover:opacity-95 text-gray-900 py-3 transition-all duration-300 shadow-xl mt-auto active:scale-95"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8 w-full">
            {programs.map((prog) => {
              if (!prog.slug) return null;
              return (
              <div 
                key={prog.id}
                onClick={() => {
                  setActiveCard(prog.id);
                  document.getElementById(`business-card-${prog.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer 
                  ${activeCard === prog.id ? 'w-16 bg-[#C9A84C]' : 'w-6 bg-[#C9A84C]/30'}`}
              ></div>
            )})}
          </div>

        </div>
      </section>
    </div>
  );
};

export default BusinessMigrationProgramsShowcase;
