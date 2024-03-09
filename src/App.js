import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Topbar } from "./Components/NavBar/Topbar";
import Preloader from "./Components/Preloader/Preloader";
import ScrollToTop from "./Components/ScrollToTop";
import { About } from "./Pages/About/About";
import { Contacts } from "./Pages/Contacts/Contacts";
import { Home } from "./Pages/Home/Home";
import { Projects } from "./Pages/Projects/Projects";
import { Resume } from "./Pages/Resume/Resume";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
      window.scrollTo(0, 0);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div id={load ? "no-scroll" : "scroll"}>
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
