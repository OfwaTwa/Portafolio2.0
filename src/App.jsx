import "./App.css";
import { Header } from "./componentes/Header.jsx";
import Main from "./componentes/Main.jsx";
import { Footer } from "./componentes/Footer.jsx";
import { Scroll } from "./componentes/Scroll.jsx";
import Cats from "./componentes/cats";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Cats />
      <Scroll />
    </div>
  );
}

export default App;