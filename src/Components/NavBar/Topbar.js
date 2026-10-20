import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgCoffee, CgHeadset } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../../Assets/header-logo.svg";

import { useTranslation } from "react-i18next";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import SONG from "./Songs/LudovicoEinaudi-Experience.mp3";
import "./Topbar.css";

export const Topbar = () => {
  const { t, i18n } = useTranslation();

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentLanguage = i18n.resolvedLanguage || "en";

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const [audio] = useState(typeof Audio !== "undefined" && new Audio(SONG));

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  // One click switches between Italian and English
  const toggleLanguage = () => {
    i18n.changeLanguage(currentLanguage === "it" ? "en" : "it");
    updateExpanded(false);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "topbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => updateExpanded(false)}>
          <img src={logo} className="logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-topbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineHome style={{ marginBottom: "2px" }} />
              {t("topBar.home")}
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} />
              {t("topBar.about")}
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/projects"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
              {t("topBar.projects")}
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/resume"
              onClick={() => updateExpanded(false)}
            >
              <CgFileDocument style={{ marginBottom: "2px" }} />
              {t("topBar.resume")}
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contacts"
              onClick={() => updateExpanded(false)}
            >
              <CgCoffee style={{ marginBottom: "2px" }} />
              {t("topBar.contacts")}
            </Nav.Link>

            <Nav.Item>
              <button
                type="button"
                className="nav-link music-toggle"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                <CgHeadset
                  style={{ marginBottom: "2px" }}
                  className={`sound-${!isPlaying}`}
                />
                {t("topBar.music")}
                <span className="music-btn" aria-hidden="true">
                  {!isPlaying ? "ON" : "OFF"}
                </span>
              </button>
            </Nav.Item>
            <Nav.Item>
              <div className="nav-link">
                <button
                  type="button"
                  className="translate-btn"
                  onClick={toggleLanguage}
                  aria-label={currentLanguage === "it" ? "Switch to English" : "Passa all'italiano"}
                >
                  {currentLanguage.toUpperCase()}
                </button>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
