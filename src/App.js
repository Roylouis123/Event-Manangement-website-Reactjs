import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurServices from "./pages/OurServices";
import Bridal from "./pages/Bridal";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Offers from "./pages/Offers";
import Workinprogress from "./pages/Workinprogress";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ourservices" element={<OurServices />}></Route>
          <Route path="/bridal" element={<Bridal />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/Offers" element={<Offers />}></Route>
          <Route path="/workinprogress" element={<Workinprogress />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
