import About from "./COMPONANT/About";
import Banner from "./COMPONANT/Banner";
import Contact from "./COMPONANT/Contact";
import FindMe from "./COMPONANT/FindMe";
import Footer from "./COMPONANT/Footer";
import Header from "./COMPONANT/Header";
import Projects from "./COMPONANT/Projects";
import Service from "./COMPONANT/Service";
import Services from "./COMPONANT/Services";
import Skill from "./COMPONANT/Skill";


const App = () => {
  return (
    <div className='bg-black'>
      <Header></Header>
      <Banner></Banner>
      <FindMe></FindMe>
      <Services></Services>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
};

export default App;