import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Parallax from "./utility/Parallax";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6"
import Section7 from "./components/Section7";
import Footer from "./components/Footer";
function App() {
  return (
   <>
     <div className="w-full border-2 grid grid-cols-1">
      <Navbar/>
      <Hero/>
      <Section1/>
      <Parallax/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
     </div>
   </>
  );
}

export default App;
