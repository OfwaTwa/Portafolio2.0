import "./App.css";
import { Cabecera } from "./componentes/Cabecera.jsx";
import { Main } from "./componentes/Main.jsx";
import { Footer } from "./componentes/Footer.jsx";
import { Scroll } from "./componentes/Scroll.jsx";
import Cats from "./componentes/cats";

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Main />
      <Footer />
      <Cats />
      <Scroll />
    </div>
  );
}

export default App;