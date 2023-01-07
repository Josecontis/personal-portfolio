import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader/Preloader";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Projects } from "./Pages/Projects/Projects";
import { Footer } from "./Components/Footer/Footer";
import { Resume } from "./Pages/Resume/Resume";
import { Contacts } from "./Pages/Contacts/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";

import ScrollToTop from "./Components/ScrollToTop";
import { Topbar } from "./Components/NavBar/Topbar";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Topbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
