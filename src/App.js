import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader/Preloader";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Resume from "./Pages/Resume/Resume";
import Contacts from "./Pages/Contacts/Contacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
