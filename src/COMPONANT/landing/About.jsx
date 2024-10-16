import React from 'react';

const AboutMe = () => {
  return (
    <div id='About' className="container mx-auto px-4 py-12">
      <div className=" rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/3">
            <img
              src="https://i.ibb.co/wzKqqvq/449146201-1225835575246784-5976769244078335114-n.jpg"
              alt="Jubaer Talukder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 p-8">
            <h2 className="text-6xl font-bold text-white mb-4">About Me</h2>

            <div className="text-gray-300 text-3xl font-serif">
              In 2015, a freshman in college who was fascinated by the institute's festivities, picked up a camera and started documenting everything that he found amusing. This hobby evolved into a passion, and he later explored the amazing field of filmmaking. Fast forward to today, he is trying to make a living out of the thing he loves. That's me!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;