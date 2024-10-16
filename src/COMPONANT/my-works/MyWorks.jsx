import { Outlet } from "react-router";

function MyWorks() {
  return (
    <div className="text-white mx-auto">
      <h1 className="text-center text-3xl font-serif mt-10">MY WORKS</h1>
      <nav className="flex justify-center items-center gap-4 py-4">
        <a
          href="/work/fonts"
          className="text-white font-bold outline-white outline-1 outline-dashed rounded-3xl p-2 hover:bg-gray-900 transition-colors duration-300"
        >
          Fonts
        </a>
        <a
          href="/work/graphics"
          className="text-white font-bold outline-white outline-1 outline-dashed rounded-3xl p-2 hover:bg-gray-900 transition-colors duration-300"
        >
          Graphics
        </a>
        <a
          href="services"
          className="text-white font-bold outline-white outline-1 outline-dashed rounded-3xl p-2 hover:bg-gray-900 transition-colors duration-300"
        >
          Videos
        </a>
      </nav>
 
      <Outlet />
    </div>
  );
}

export default MyWorks;
