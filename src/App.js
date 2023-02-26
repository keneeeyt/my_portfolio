import { Router } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from './components/Footer';
import Navbar from './layouts/Navbar';




function App() {
  return (
    <div>
    <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
   
  
  );
}

export default App;
