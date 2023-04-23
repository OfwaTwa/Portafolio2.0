import "./App.css";
import { Cabecera } from "./componentes/Cabecera.jsx";
import { Principal } from "./componentes/Principal.jsx";
import { Footer } from "./componentes/Footer.jsx";
import { Scroll } from "./componentes/Scroll.jsx";
import Cats from "./componentes/cats";
import ContactMe from "./componentes/ContactMe";

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Principal />
      <ContactMe />
      <Footer />
      <Cats />
      <Scroll />
    </div>
  );
}

export default App;