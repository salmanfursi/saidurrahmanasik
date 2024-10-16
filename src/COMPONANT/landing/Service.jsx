import React from "react";

const Service = () => {
  return (
  <>
  <h1 id="Service" className='text-center text-2xl font-bold bg-sky-300 outline'>My serveces !</h1><hr />
    <div className="md:grid grid-cols-3 gap-4 md:contact bg-sky-200 ">

      <div className="md:pt-6 card bg-white mx-auto my-auto w-96 h-2/3 border border-xl shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src="https://img.freepik.com/free-vector/tester-developer-work-with-laptop-tablet-cross-platform-bug-founding-bug-identification-testing-team-concept-white-background-bright-vibrant-violet-isolated-illustration_335657-315.jpg?w=900&t=st=1688061430~exp=1688062030~hmac=71d3c2a3399ca177f1d55ef58d14ecdeec8521c5b4a287c65f0a07672965ad2e"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Custom Website Development</h2>
          <p>I specialize in creating custom websites using the MERN stack, tailored to your unique requirements. From front-end design to back-end development, I deliver high-quality, responsive websites that provide an exceptional user experience.</p>
        </div>
      </div>
      <div className="md:pt-6 card bg-white mx-auto my-auto w-96 h-2/3 border border-xl shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src="https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149483807.jpg?w=900&t=st=1688061530~exp=1688062130~hmac=795d629195d83b4186b4a83b54503f2da7d854d239e1eef975aef11e6f51f28c"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Responsive Web Design</h2>
          <p>With the increasing use of mobile devices, it's crucial to have a website that looks great and functions flawlessly on any screen size. I ensure that your website is fully responsive, providing optimal user experience across desktops, tablets, and smartphones.</p>
        </div>
      </div>
      <div className="md:card bg-white mx-auto my-auto w-96 h-2/3 border border-xl shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src="https://img.freepik.com/free-vector/gradient-intranet-illustration_23-2149368727.jpg?w=826&t=st=1688061593~exp=1688062193~hmac=8a46614d0997ce18541bf1ca2e864be5d92b811dd9ac57d76d9138ea3909fab7"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Database Integration</h2>
          <p>I have experience working with databases like MongoDB allowing me to design and implement efficient data storage and retrieval solutions. Whether you need a database-driven web application or seamless integration with existing databases, I've got you covered.</p>
        </div>
      </div>

    </div>
    </>
  );
};

export default Service;
