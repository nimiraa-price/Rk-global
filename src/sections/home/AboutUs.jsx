import React from 'react';
import { Link } from 'react-router-dom';
import leftTopImg from '../../assets/images/lefttop.png';
import rightTopImg from '../../assets/images/righttop.png';
import bottomImg from '../../assets/images/bottom.png';

const AboutUs = () => {
  // Helper for the image grid
  const ImageGrid = ({ className }) => (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Top Row */}
      <div className="flex gap-3 h-44 sm:h-56 md:h-[240px] lg:h-[260px]">
        {/* Passport image */}
        <div className="w-[62%] h-full overflow-hidden rounded-3xl md:rounded-2xl shadow-sm">
          <img
            src={leftTopImg}
            alt="Passport concept"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Building handshake image */}
        <div className="w-[38%] h-full overflow-hidden rounded-3xl md:rounded-2xl shadow-sm relative">
          <img
            src={rightTopImg}
            alt="Business handshake over building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="w-full h-44 sm:h-56 md:h-[220px] lg:h-[240px] overflow-hidden rounded-3xl md:rounded-2xl shadow-sm">
        <img
          src={bottomImg}
          alt="Professional handshake in office"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );

  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-[4rem]">

        {/* Desktop & Mobile Heading (on mobile it stays at very top of this column) */}
        <div className="w-full lg:w-[60%] flex flex-col items-start gap-6">
          
          <h2 className="text-[32px] md:text-4xl font-extrabold text-black uppercase tracking-tight">
            Our Expertise
          </h2>

          {/* MOBILE ONLY: Images between Heading and Description */}
          <ImageGrid className="lg:hidden w-full my-2" />

          <div className="flex flex-col gap-4 text-[#8C8C8C] md:text-gray-500 text-[14px] md:text-[18px] leading-[1.6] md:leading-relaxed">
            <p>
              RK Global Immigration delivers a comprehensive suite of tailored residency and citizenship by investment programs, creating exceptional value for discerning clients. Through robust offshore strategies including golden visas residencies, citizenship-by-investment pathways, international real estate, wealth management, and asset protection via sophisticated entities we empower global families, entrepreneurs, and investors to navigate the legal and financial intricacies of international life with integrity, precision, and unwavering regulatory compliance.
            </p>
          </div>

          <Link to="/about" className="bg-gradient-to-r from-[#002668] to-[#0A38A0] hover:opacity-90 active:scale-95 text-white font-bold md:font-semibold px-10 md:px-8 py-4 md:py-3.5 rounded-xl md:rounded-lg transition-all text-[15px] md:text-sm tracking-wide md:tracking-widest uppercase shadow-md">
            Know More
          </Link>
        </div>

        {/* DESKTOP ONLY: Images on the right */}
        <ImageGrid className="hidden lg:flex lg:w-[40%] relative" />

      </div>
    </section>
  );
};

export default AboutUs;
