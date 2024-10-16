

// import React, { useState } from "react";

// const Graphics = () => {
//   const images = [
//     "https://mir-s3-cdn-cf.behance.net/project_modules/1400/637c82210102079.670ba5c6e1794.jpg",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30192d206209277.66c8604bf2197.jpg",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0dcd50206209277.66c862f21fce2.jpg",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ae63b8206209277.66c862f220134.png",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0fb00c206209277.66c862f21f5bf.jpg",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c02dbf206209277.66c862f21ed69.jpg",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8753b206209277.66c862f220adc.png",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/931dca206209277.66c862f220628.jpg",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/50f929206209277.66c862f21e760.jpg",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3123e7206209277.66c8604bf2c5e.jpg",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/491881206209277.66c862f22142b.jpg",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/1400/360696206200937.66c83f5d8d146.png",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/1400/17308b206200937.66c83f5d8ca27.jpg",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6b28ec206200937.66c83f5d8bf6e.png",
//     "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fc23c5206200937.66c83f5d8db33.png",
//   ];

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//   };

//   const handleOutsideClick = (e) => {
//     if (e.target.classList.contains("modal-background")) {
//       closeModal();
//     }
//   };

//   return (
//     <div>
//       <div className="px-12 py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//         {images.map((src, index) => (
//           <div key={index} className="relative group">
//             <img
//               key={index}
//               src={src}
//               alt={`Graphic ${index + 1}`}
//               className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
//               <button
//                 onClick={() => openModal(src)}
//                 className="text-white font-bold text-lg"
//               >
//                 Click to view
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 modal-background"
//           onClick={handleOutsideClick}
//         >
//           <div className="relative max-w-screen-lg">
//             <button
//               className="absolute top-2 right-2 text-white bg-red-600 p-2 rounded-full focus:outline-none z-10"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <img
//               src={selectedImage}
//               alt="Selected"
//               className=" h-3/5 object-fit rounded-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Graphics;











import React, { useState } from "react";

const Graphics = () => {
  const images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/637c82210102079.670ba5c6e1794.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30192d206209277.66c8604bf2197.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0dcd50206209277.66c862f21fce2.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ae63b8206209277.66c862f220134.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0fb00c206209277.66c862f21f5bf.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c02dbf206209277.66c862f21ed69.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8753b206209277.66c862f220adc.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/931dca206209277.66c862f220628.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/50f929206209277.66c862f21e760.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3123e7206209277.66c8604bf2c5e.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/491881206209277.66c862f22142b.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/360696206200937.66c83f5d8d146.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/17308b206200937.66c83f5d8ca27.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6b28ec206200937.66c83f5d8bf6e.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fc23c5206200937.66c83f5d8db33.png",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-background")) {
      closeModal();
    }
  };

  return (
    <div>
      <div className="px-12 py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative group">
            <img
              key={index}
              src={src}
              alt={`Graphic ${index + 1}`}
              className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <button
                onClick={() => openModal(src)}
                className="text-white font-bold text-lg"
              >
                Click to view
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 modal-background"
          onClick={handleOutsideClick}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white bg-red-600 p-2 rounded-full focus:outline-none z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-lg max-h-lg object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphics;
