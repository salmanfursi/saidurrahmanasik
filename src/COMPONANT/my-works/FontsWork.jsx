import React from 'react';

const FontsWork = () => {
  const images = [
    'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/461931131230363.Y3JvcCw4MTkyLDY0MDcsMCww.jpg',
    'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/170e89121640227.Y3JvcCw1NTc0LDQzNTksMCwzMTc.gif',
    'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/44d0bd148596869.Y3JvcCwxMDU4LDgyOCw3MCww.jpg',
    'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/44d0bd148596869.Y3JvcCwxMDU4LDgyOCw3MCww.jpg'
  ];

  return (
    <div className="px-12 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default FontsWork;
