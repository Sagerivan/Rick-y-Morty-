
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Peticion from './Components/Pages/Characters/Characters.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import Contact from './Components/Pages/Contact/Contact.jsx';

function App() {
  return (
    <div className="App">
          <div className='imagenFondo'></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/Characters" element={<Peticion/>} exact/>
            <Route path="/Contact" element={<Contact/>} exact/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;

