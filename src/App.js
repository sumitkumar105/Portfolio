import "./App.css";
import Heading from "./Componets/Heading";
import Navbar from "./Componets/Navbar";
import About from "./Componets/About";
import Skills from "./Componets/Skills";
import Certificates from "./Componets/Certificates";
import Projects from "./Componets/Projects";
import Contact from "./Componets/Contact";
import Footer from "./Componets/Footer";
function App() {
  return (
    <div className="App">
      <Heading />
      <Navbar />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
