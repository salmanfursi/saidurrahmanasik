const Projects = () => {
  return (
    <div id="Projects" className=" md:contact bg-purple-200">
      <p className="text-center font-bold text-3xl outline bg-purple-200">
        Prozects
      </p>
      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 py-16 ">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 outline rounded">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://i.ibb.co/YDHpbwF/salt-bey.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-white pb-12">
                Chef-Recipe
              </h1>
              <p className="mb-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className=" font-semibold">Technology used</p>
                HTML, CSS, Tailwind, JavaScript, React, Node.js, MongoDB,
                Express.js, Firebase
              </p>

              <div className="flex items-center gap-3">
                <a href="https://github.com/salmanfursi/chef-hunter-client" target="_blank" rel="noreferrer">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#391263] to-yellow-600 hover:to-blue-500  justify-center focus:outline-none hover:bg-gray-600">
                    GitHub
                  </button>
                </a>
                <a href="https://chef-recipe-9485d.web.app/" target="_blank" rel="noreferrer">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  bg-gradient-to-r from-[#49177e] to-green-600 hover:to-orange-500  justify-center ml-2 focus:outline-none hover:bg-gray-600">
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 outline rounded">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://i.ibb.co/nR07vWD/toy-market.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-white pb-12">
                Toy Market
              </h1>
              <p className="mb-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className=" font-semibold">Technology used</p>
                HTML, CSS, Tailwind, JavaScript, React, Node.js, MongoDB,
                Express.js, Firebase
              </p>
              <div className="flex items-center gap-3">
                <a href="https://github.com/salmanfursi/toy-marketplace-client" target="_blank" rel="noreferrer">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#391263] to-yellow-600 hover:to-blue-500  justify-center focus:outline-none hover:bg-gray-600">
                    GitHub
                  </button>
                </a>
                <a href="https://toys-car-f92c8.web.app/" target="_blank" rel="noreferrer">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  bg-gradient-to-r from-[#49177e] to-green-600 hover:to-orange-500  justify-center ml-2 focus:outline-none hover:bg-gray-600">
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 outline rounded">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://i.ibb.co/1TZ3gbj/martial-art.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center  text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-2xl font-bold text-white pt-4">
                Martial Art
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-semibold">Technology used:</p>
                HTML, CSS, Tailwind, JavaScript, React, Node.js, MongoDB,
                Express.js, Firebase, Stripe, JWT, Tanstack Query, React Hook
                Form
              </p>
              <div className="flex items-center gap-3">
                <a href="https://github.com/salmanfursi/summer-camp-school-client" target="_blank" rel="noreferrer">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#391263] to-yellow-600 hover:to-blue-500  justify-center focus:outline-none hover:bg-gray-600">
                    GitHub
                  </button>
                </a>
                <a href="https://summer-camp-school-8acc2.web.app/" target="_blank" rel="noreferrer">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  bg-gradient-to-r from-[#49177e] to-green-600 hover:to-orange-500  justify-center ml-2 focus:outline-none hover:bg-gray-600">
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
