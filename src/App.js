import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import AllClasses from "./pages/allClasses/AllClasses";
import ContactUs from "./pages/contactUs/ContactUs";
import Services from "./pages/services/Services";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allclasses" element={<AllClasses/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
