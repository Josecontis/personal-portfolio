import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Topbar } from "./Components/NavBar/Topbar";
import Preloader from "./Components/Preloader/Preloader";
import ScrollToTop from "./Components/ScrollToTop";
import "./Translations/i18next";

const Home = lazy(() => import("./Pages/Home/Home").then(({ Home }) => ({ default: Home })));
const About = lazy(() => import("./Pages/About/About").then(({ About }) => ({ default: About })));
const Projects = lazy(() => import("./Pages/Projects/Projects").then(({ Projects }) => ({ default: Projects })));
const Resume = lazy(() => import("./Pages/Resume/Resume").then(({ Resume }) => ({ default: Resume })));
const Contacts = lazy(() => import("./Pages/Contacts/Contacts").then(({ Contacts }) => ({ default: Contacts })));

function App() {
  const [load, updateLoad] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
      window.scrollTo(0, 0);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div id={load ? "no-scroll" : "scroll"}>
        <Topbar />
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
