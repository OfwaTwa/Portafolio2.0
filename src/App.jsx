import './App.css'
import Header from "./componentes/Header"
import Home from './componentes/Home'
import Redes from './componentes/Main'
import Profile from './componentes/Profile'

function App() {
  return (
    <div className="App">
      <Header/>
      <Redes/>
      <Profile/>
      <Home/>
    </div>
  )
};

export default App
