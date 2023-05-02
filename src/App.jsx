import "./App.css";
import { Cabecera } from "./componentes/Cabecera.jsx";
import { Home } from "./componentes/Home.jsx";
import { Footer } from "./componentes/Footer.jsx";
import { Scroll } from "./componentes/Scroll.jsx";
import Cats from "./componentes/Cats";
import About from "./componentes/About";
import Skills from "./componentes/Skills";
import Qualification from "./componentes/Qualification";
import Services from "./componentes/Servicies";
import Portfolio from "./componentes/Portfolio";
import ProjectInMind from "./componentes/ProjectInMind";
import ContactMe from "./componentes/ContactMe";

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <ProjectInMind />
      <ContactMe />
      <Footer />
      <Cats />
      <Scroll />
    </div>
  );
}

export default App;