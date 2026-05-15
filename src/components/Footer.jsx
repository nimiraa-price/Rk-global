import React from 'react';
import { NavLink } from 'react-router-dom';
import footerLogoUrl from '../assets/brand/footer-logo.svg';
import footerImg from '../assets/images/footerimg.png';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { defaultCitizenshipSlug } from '../data/citizenshipPrograms';
import { defaultResidenceSlug } from '../data/residencePrograms';
import { defaultBusinessMigrationSlug } from '../data/businessMigrationPrograms';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: `/citizenship/${defaultCitizenshipSlug}`, label: 'Citizenship' },
  { to: `/residence/${defaultResidenceSlug}`, label: 'Residence' },
  { to: `/business-migration/${defaultBusinessMigrationSlug}`, label: 'Business Migration' },
  { to: '/about', label: 'Our Expertise' },
  { to: '/contact', label: 'Contact Us' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans mt-auto border-t border-gray-100 flex flex-col">
      
      {/* Top Banner */}
      <div className="w-full bg-[#0a2769] py-8 md:py-10 px-4 text-center">
        <h2 className="text-white text-2xl md:text-3xl lg:text-[2.5rem] font-bold uppercase tracking-wide">
          Your Gateway To Global Opportunities
        </h2>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-12 md:py-16 flex flex-col lg:flex-row gap-12 lg:gap-4 justify-between">
        
        {/* Left: Brand / Logo */}
        <div className="flex flex-col gap-6 lg:w-[30%]">
          <img 
            src={footerLogoUrl} 
            alt="RK Global Immigration Logo" 
            className="w-auto h-16 md:h-20 object-contain self-start" 
          />
          <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed max-w-sm">
            RK Global Immigration Services empowers individuals and families to achieve global citizenship through strategic investments in second residencies and citizenship programs worldwide.  Our team play a pivotal role in supporting governments, immigration consultants, legal and financial professionals, and investors in achieving their objectives with efficiency, effectiveness, and the highest standards of integrity and responsibility.
          </p>
        </div>

        {/* Center: Links / Info */}
        <div className="flex flex-col sm:flex-row gap-12 lg:gap-24 lg:w-[40%] lg:pl-8">
          
          <div className="flex flex-col gap-6">
            <div className="h-16 md:h-20 flex items-center">
              <h3 className="text-black font-bold text-lg">Explore</h3>
            </div>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className="text-gray-500 hover:text-[#0a2769] transition-colors text-sm md:text-base cursor-pointer whitespace-nowrap">
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="h-16 md:h-20 flex items-center">
              <h3 className="text-black font-bold text-lg">Contact Us</h3>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-gray-500 text-sm md:text-base">
                Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
              </span>
              <a href="tel:+971564158163" className="text-gray-500 hover:text-[#0a2769] transition-colors text-sm md:text-base cursor-pointer">
                +971 56 415 8163
              </a>
              <a href="mailto:info@rkglobalimmigration.com" className="text-gray-500 hover:text-[#0a2769] transition-colors text-sm md:text-base cursor-pointer break-all">
                info@rkglobalimmigration.com
              </a>
            </div>
          </div>

        </div>

        {/* Right: Graphic */}
        <div className="w-full lg:w-[33%] flex items-end justify-center lg:justify-end mt-4 lg:mt-0 relative">
           <img 
            src={footerImg} 
            alt="Global Network Graphic" 
            className="w-full max-w-[450px] lg:scale-[1.15] lg:origin-bottom-right h-auto object-contain" 
          />
        </div>

      </div>

      {/* Bottom Copyright & Socials */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          
          {/* Socials */}
          <div className="flex items-center gap-4">
            <span className="text-black font-bold text-sm md:text-base mr-2">
              Follow Us
            </span>
            <a href="https://www.facebook.com/profile.php?id=61573448872654" target="_blank" rel="noopener noreferrer" className="text-[#0a2769] hover:opacity-75 transition-opacity">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/rkglobal14/" target="_blank" rel="noopener noreferrer" className="text-[#0a2769] hover:opacity-75 transition-opacity">
               <FaInstagram size={26} />
            </a>
            <a href="https://www.linkedin.com/company/rk-global-immigration-services/" target="_blank" rel="noopener noreferrer" className="text-[#0a2769] hover:opacity-75 transition-opacity">
               <FaLinkedin size={26} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 font-medium text-sm md:text-base text-center lg:pr-[120px]">
            © 2026 All Rights Reserved
          </div>

          {/* Spacer for flex layout balancing if needed, but flex-between with 2 real items and absolute positioning is another way. Here we use 3 items to perfectly balance center if needed, or just standard between. */}
          <div className="hidden md:block w-[150px]"></div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
