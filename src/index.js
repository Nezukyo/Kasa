import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from "../src/pages/Home";
import Header from "../src/components/Header";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}>      
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);