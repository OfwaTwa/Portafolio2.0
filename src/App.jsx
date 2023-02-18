import "./App.css";
import { Cabecera } from "./componentes/Cabecera.jsx";
import { Principal } from "./componentes/Principal.jsx";
import { Footer } from "./componentes/Footer.jsx";
import { Scroll } from "./componentes/Scroll.jsx";
import Cats from "./componentes/cats";

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Principal />
      <Footer />
      <Cats />
      <Scroll />
    </div>
  );
}

export default App;