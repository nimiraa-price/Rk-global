import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/images/got-any-question.png';

const ContactCTA = () => {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-8 bg-white flex justify-center font-sans">
      <div
        className="max-w-[1400px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden min-h-[290px] md:min-h-[450px] flex items-center justify-center p-4 md:p-16 relative bg-[#02050a] bg-inherit bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Overlay to ensure readability if needed (though the asset looks dark enough) */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center">
          <h2 className="text-[24px] md:text-[48px] font-extrabold text-white uppercase tracking-tight mb-3 md:mb-6 leading-tight">
            GOT ANY QUESTIONS?
          </h2>

          <p className="text-[#cbd5e1] text-[12px] md:text-xl font-medium mb-5 md:mb-12 leading-[1.75] max-w-5xl">
            Invest in your future with RK Global and unlock a world of possibilities. Connect with one of our client advisors today to book a private consultation and discover bespoke residence and citizenship by investment solutions that cater to your unique needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/contact" className="bg-[#cca347] hover:bg-[#b08b39] text-white px-6 md:px-10 py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-[0.08em] md:tracking-wider transition-colors duration-300 min-w-[220px] text-[12px] md:text-base text-center">
              Get In Touch
            </Link>
            <Link to="/about" className="bg-white hover:bg-gray-100 text-[#111] px-6 md:px-10 py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-[0.08em] md:tracking-wider transition-colors duration-300 min-w-[220px] text-[12px] md:text-base text-center">
              Know More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
