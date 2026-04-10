import React from 'react';
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import Contact from './components/Contact.jsx';
import Footer from "./components/Footer.jsx";
import Home from "./components/home.jsx";
import WhatsappFloat from './components/WhatsappFloat.jsx';
import HireMeFloat from './components/HireMeFLoat.jsx';
import Navbar from './components/NavBar.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import "./App.css"

function App() {
  return(
    <div className="App" >    
    <Navbar/>

    <h1>Welcome to my portfolio</h1>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Services/>
    <Testimonials/>
    <Contact/>
    <HireMeFloat/>
    <WhatsappFloat/>
    <Footer/>
  
    </div>
  );
}
export default App;