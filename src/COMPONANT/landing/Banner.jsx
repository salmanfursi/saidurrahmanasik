
const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
      style={{ backgroundImage: `url(https://i.ibb.co/7KRqyT0/Screenshot-2.png)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-left text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello!
          </span>
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400">
            I'm Saidur Rahman Asik
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-serif">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-300">
            A filmmaker, graphic designer, photographer & content creator.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;