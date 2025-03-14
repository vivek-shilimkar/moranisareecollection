"use client";

import React from 'react';
import Image from 'next/image';

const WhatsAppButton = () => {
  const handleClick = () => {
    // In a real implementation, this would open WhatsApp with the business number
    window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="https://web-assets.same.dev/2043332117/703765452.svg+xml"
        alt="WhatsApp Icon"
        width={30}
        height={30}
      />
    </button>
  );
};

export default WhatsAppButton;
