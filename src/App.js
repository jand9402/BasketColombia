import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Navbar from './components/Navbar/Navbar';
import Eventos from './components/Eventos/Eventos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Eventos" exact element={<Eventos/>}/>
      </Routes>
    </div>
  );
}

export default App;
