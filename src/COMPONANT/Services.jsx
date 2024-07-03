const Services = () => {
    const imageSrc = ["https://i.ibb.co/CBc6km3/camera-photographic-device-24877-81508-removebg-preview.png",'https://i.ibb.co/qN4X1CM/images-removebg-preview.png','https://i.ibb.co/86bkC7q/Screenshot-4.png'];
    
    return (
      <div className="relative z-10 text-white px-4 py-6  bg-opacity-75">
              <h1 className="text-5xl md:text-6xl lg:text-5xl xl:text-8xl font-bold mb-12 font-serif text-center">Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <img src={imageSrc[0]} alt="Product Photography" className="h-20 w-28 mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Product Photography</h3>
        
          </div>
          <div className="flex flex-col items-center ">
            <img src={imageSrc[1]} alt="Product Commercial" className="h-20 w-28 mb-4 bg-white rounded" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Product Commercial</h3>
          
          </div>
          <div className="flex flex-col items-center">
            <img src={imageSrc[2]} alt="Brand Collaboration" className="h-20 w-28 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">Brand Collaboration</h3>
     
          </div>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-lg">
            Please email at <a href="mailto:filmsbyjubaer@gmail.com" className="underline text-red-400">filmsbyjubaer@gmail.com</a> for contacting me.
          </p>
        </div>
      </div>
    );
  };
  
  export default Services;
  