import React from 'react';
import { Link } from 'react-router-dom';
import citizenAboutImg from '../../assets/images/citizen-about.png';

const CountryInfo = ({ program }) => {
  const { about } = program;
  const infoImage = program?.contactImage || citizenAboutImg;

  return (
    <section id="country-info" className="w-full py-8 md:py-12 px-4 md:px-8 bg-white font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-[26px] md:text-[2.6rem] font-extrabold text-[#111] uppercase tracking-tight leading-[1.08] mb-2 md:mb-3">
            {about.title}
          </h2>
          <p className="text-gray-500 text-[13px] md:text-xl max-w-2xl mx-auto leading-relaxed">
            {about.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-7 lg:gap-12 w-full items-stretch">
          <div className="flex-1 flex flex-col gap-3 md:gap-4 w-full order-2 lg:order-1">
            <h3 className="text-[22px] md:text-[32px] font-bold text-[#002668] leading-tight mb-1">
              {about.subtitle}
            </h3>

            <p className="text-gray-600 text-[13px] md:text-base leading-[1.75] ">
              {about.description}
            </p>

            <div className="bg-[#f7f7f7] rounded-[1.1rem] p-4 md:p-6 flex flex-col gap-3 md:gap-4 mt-1 md:mt-2 border border-gray-100 flex-1 justify-center">
              <p className="text-gray-600 text-[13px] md:text-base leading-[1.75]">
                {about.secondaryDescription}
              </p>

              {about.highlights && about.highlights.length > 0 && (
                <ul className="text-gray-600 text-[13px] md:text-base flex flex-col gap-1.5 pl-2 md:pl-3 mt-1">
                  {about.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center mt-0 lg:mt-0 order-1 lg:order-2">
            <div className="bg-white p-2.5 pb-7 md:p-4 md:pb-10 rounded-[1.2rem] md:rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 relative w-full h-full lg:max-w-xl flex flex-col items-stretch">
              <img
                src={infoImage}
                alt={about.title}
                className="w-full h-full min-h-[240px] md:min-h-[360px] object-cover rounded-[1rem] md:rounded-[1.2rem] flex-1"
              />

              <Link to="/contact" className="absolute bottom-3.5 md:bottom-5 left-1/2 transform -translate-x-1/2 bg-[#002668] hover:bg-[#001c4d] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-[0_10px_30px_rgba(0,38,104,0.3)] transition-all duration-300 hover:-translate-y-1 active:scale-95 text-[11px] md:text-[14px] tracking-wide w-[78%] max-w-[280px] text-center">
                GET IN TOUCH WITH US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryInfo;
