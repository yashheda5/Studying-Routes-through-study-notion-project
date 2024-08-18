import logo from './logo.svg';
import './App.css';
import { NavBar } from "./Components/NavBar";
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Dashboard } from './Pages/Dashboard';
import { Signup } from './Pages/Signup';
import { Login } from './Pages/Login';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div  className="w-screen h-screen bg-richblack-900 flex flex-col">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App