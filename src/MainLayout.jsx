import { Outlet } from "react-router";
import Footer from "./COMPONANT/share/Footer";
import Header from "./COMPONANT/share/Header";

const MainLayout = () => {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
