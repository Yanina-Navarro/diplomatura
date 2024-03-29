import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/nosotros" element={<NosotrosPage/>}/>
        <Route path="/novedades" element={<NovedadesPage/>}/>
        <Route path="/contacto" element={<ContactoPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
