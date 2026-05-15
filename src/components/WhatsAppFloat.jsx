import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/971564158163"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:bg-[#1ebd5a] transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
      {/* Optional tooltip */}
      <span className="absolute right-16 px-3 py-1 bg-white text-gray-800 text-sm font-semibold rounded-md shadow-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none group-hover:opacity-100">
        WhatsApp API - DANNY
      </span>
    </a>
  );
};

export default WhatsAppFloat;
