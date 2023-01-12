import "./App.css";
import About from "./components/About";
import Bot from "./components/Bot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";


function App() {
  return (
    <>
      <Navbar />
      <Bot />
      <Hero/>
      <About/>
      <Skill/>
      <Hireme/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
