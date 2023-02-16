import "./App.css";
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import { Footer } from "./componentes/Footer";
import { Scroll } from "./componentes/Scroll";
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