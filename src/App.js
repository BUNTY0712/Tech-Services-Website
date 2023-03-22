import './App.css';
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Service from './Service'
import React from 'react';
import Navbar from './Navbar';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/about' element={<About/>}/>
       <Route exact path='/contact' element={<Contact/>}/>
       <Route exact path='/service' element={<Service/>}/>
       </Routes>
       </BrowserRouter>
       <Footer/>
  
    </>
  )
}

export default App
