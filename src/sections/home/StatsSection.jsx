import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView, animate } from 'framer-motion';
import { Award, Clock, Globe, TrendingUp } from 'lucide-react';
import statsLeftImage from '../../assets/images/statsleft.png';
import Across4Image from '../../assets/images/Across4.png';
import officeImage from '../../assets/images/Business discussion in a modern office.png';
import supportBg from '../../assets/images/24:7bg.png';
import successBg from '../../assets/images/sucess-driven.jpg';
import bagIcon from '../../assets/icons/bag.svg';
import fdiImage from '../../assets/images/500M.png';

const Counter = ({ value, prefix = "", suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <div className="w-full bg-gray-50">
      <section 
        className="w-full py-8 md:py-12 bg-white overflow-hidden shadow-sm"
        style={{ fontFamily: "'Outfit', 'Inter', system-ui, sans-serif" }}
      >
        <div className="max-w-screen-xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 auto-rows-auto md:auto-rows-[200px] lg:auto-rows-auto lg:grid-rows-[260px_260px] gap-4 sm:gap-4 md:gap-5 lg:gap-6 px-4 md:px-6 lg:px-8">
          
          {/* Card 1: 22+ Programmes (Tall) */}
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden col-span-2 md:col-span-1 row-span-2 md:row-span-2 shadow-sm border border-gray-100 group flex flex-col justify-end p-5 sm:p-6 md:p-5 lg:p-6 min-h-[460px] sm:min-h-[430px] md:min-h-0">
            <img 
              src={statsLeftImage} 
              alt="Investment" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "center top" }}
            />
            <div className="absolute inset-x-0 bottom-0 h-[68%] md:h-2/3 bg-gradient-to-t from-white/95 via-white/75 to-transparent"></div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-[3rem] sm:text-6xl md:text-[3rem] lg:text-[4.5rem] font-bold text-gray-900 tracking-tight mb-1 sm:mb-2">
                <Counter value={22} suffix="+" />
              </h3>
              <p className="text-gray-900 font-medium text-[16px] sm:text-lg md:text-base lg:text-xl leading-[1.2] sm:leading-snug">
                Investment Migration<br />Programmes
              </p>
            </div>
          </div>

          {/* Card 2: 10+ Years Experience */}
          <div className="relative overflow-hidden group rounded-[1.5rem] md:rounded-[2rem] bg-[#F2F5FF] p-5 sm:p-8 md:p-5 lg:p-8 flex flex-col items-center justify-center text-center shadow-sm col-span-1 md:col-span-1 md:row-span-1 border border-[#e8f0ff] min-h-[210px] sm:min-h-[180px]">
            <img 
              src={officeImage} 
              alt="Professional advisory" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
            />
            <div className="relative z-10 w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] mb-3 sm:mb-6">
              <Award className="text-blue-600 w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <div className="relative z-10">
              <p className="text-blue-600 font-bold text-[10px] sm:text-xs uppercase tracking-[0.18em] mb-1">Experience</p>
              <h3 className="text-[2.2rem] sm:text-5xl md:text-[2.5rem] lg:text-[3.5rem] font-bold text-gray-900 tracking-tight mb-1">
                <Counter value={10} suffix="+" />
              </h3>
              <p className="text-gray-900 font-bold text-[12px] sm:text-sm md:text-xs lg:text-base leading-snug">Years in Investment Migration<br/>& RCBI Programmes</p>
            </div>
          </div>

          {/* Card 3: 24/7 Support */}
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden col-span-1 md:col-span-2 md:row-span-1 shadow-sm group bg-[#0c2b6b] min-h-[210px] sm:min-h-[180px]">
            <img 
              src={supportBg} 
              alt="Support background" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c2b6b]/60 to-[#1a4599]/60"></div>
            <div className="relative z-10 w-full h-full flex items-center p-4 sm:p-4 md:p-6 lg:p-8">
              <div className="flex flex-row items-center gap-4 sm:gap-8 w-full justify-start">
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 flex-shrink-0">
                  <Clock size={34} className="text-white animate-pulse sm:w-10 sm:h-10" />
                </div>
                <div className="text-left">
                  <h3 className="text-[2.1rem] sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-1">24/7</h3>
                  <p className="text-white/80 font-medium text-[15px] sm:text-xl md:text-base lg:text-xl leading-snug">Dedicated Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Global Client Base (Continents) */}
          <div className="rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-tr from-[#8BAEFC] via-[#D1E0FF] to-[#F4F7FF] p-5 sm:p-8 md:p-5 lg:p-8 flex flex-col sm:flex-row items-center justify-center sm:justify-around text-center sm:text-left gap-3 sm:gap-8 md:gap-4 lg:gap-14 col-span-1 md:col-span-2 md:row-span-1 shadow-sm overflow-hidden relative group min-h-[210px] sm:min-h-[190px]">
            <img 
              src={Across4Image} 
              alt="Global reach" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-multiply"
            />
            <div className="relative z-10 w-10 h-10 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] flex-shrink-0">
              <Globe className="text-blue-600 w-6 h-6 sm:w-10 sm:h-10 md:w-7 md:h-7 lg:w-10 lg:h-10" />
            </div>
            <div className="relative z-10 flex flex-col text-center sm:text-left">
              <h3 className="text-[2.1rem] sm:text-5xl md:text-[2.5rem] lg:text-[4rem] leading-none font-bold text-gray-900 tracking-tight mb-1 sm:mb-2">
                Across <Counter value={4} />
              </h3>
              <p className="text-gray-900 font-bold text-[14px] sm:text-lg md:text-sm lg:text-xl leading-tight">Continents Global Client Base</p>
            </div>
          </div>

          {/* Card 5: Success Driven Approach */}
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#cfdfff] to-[#AFC8FC] p-5 sm:p-6 md:p-4 lg:p-6 flex flex-col items-center justify-center text-center shadow-sm col-span-1 md:col-span-1 md:row-span-1 border border-blue-200/50 group min-h-[210px] sm:min-h-[190px]">
            <img 
              src={successBg} 
              alt="Success driven" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
            />
            <div className="relative z-10 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.03)] mb-4">
              <TrendingUp className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h4 className="relative z-10 text-[14px] sm:text-[16px] md:text-[18px] font-bold text-blue-900 leading-tight mb-2">
              Success-Driven<br/>Approach
            </h4>
            <p className="relative z-10 text-gray-700 text-[11px] sm:text-[13px] md:text-sm font-medium leading-snug">
              with Transparent<br/>Outcomes
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default StatsSection;
