import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Housing from "./pages/Housing";
import "../src/font.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route exact path="/Housing/:housingId" element={<Housing />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
