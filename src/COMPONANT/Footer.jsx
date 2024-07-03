import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-4">
      <div className="container mx-auto flex flex-col items-center">
      <div className="flex justify-center py-2">
        <img src="https://i.ibb.co/pRF10Rj/asikbhai-removebg-preview.png" alt="Your Logo" className="w-14 rounded-full border-white border-2" />
      </div>
        <div className="text-sm mb-1">
          saidurrahmanasik@gmail.com
        </div>
        <div className="text-xs">
          ©2024 All Rights Reserved by Jubaer Talukder
        </div>
        <div className="flex space-x-2 mt-2">
          <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
          <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;