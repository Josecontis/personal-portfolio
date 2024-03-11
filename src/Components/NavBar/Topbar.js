import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgCoffee, CgHeadset } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/header-logo.svg";

import i18next, { t } from "i18next";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import i18n from "../../Translations/i18next.js";
import SONG from "./Songs/LudovicoEinaudi-Experience.mp3";
import "./Topbar.css";

export const Topbar = () => {
  const navigate = useNavigate();

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [language, setLanguage] = useState("it");

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const [audio] = useState(typeof Audio !== "undefined" && new Audio(SONG));

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "it" ? "en" : "it";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "topbar"}
    >
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Item
              className="nav-link"
              onClick={() => {
                updateExpanded(false);
                navigate("/");
              }}
            >
              <AiOutlineHome style={{ marginBottom: "2px" }} />
              {t("topBar.home")}
            </Nav.Item>

            <Nav.Item
              className="nav-link"
              onClick={() => {
                updateExpanded(false);
                navigate("/about");
              }}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} />
              {t("topBar.about")}
            </Nav.Item>

            <Nav.Item
              className="nav-link"
              onClick={() => {
                updateExpanded(false);
                navigate("/projects");
              }}
            >
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
              {t("topBar.projects")}
            </Nav.Item>

            <Nav.Item
              className="nav-link"
              onClick={() => {
                updateExpanded(false);
                navigate("/resume");
              }}
            >
              <CgFileDocument style={{ marginBottom: "2px" }} />
              {t("topBar.resume")}
            </Nav.Item>

            <Nav.Item
              className="nav-link"
              onClick={() => {
                updateExpanded(false);
                navigate("/contacts");
              }}
            >
              <CgCoffee style={{ marginBottom: "2px" }} />
              {t("topBar.contacts")}
            </Nav.Item>

            <Nav.Item>
              <div
                className="nav-link"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <CgHeadset
                  style={{ marginBottom: "2px" }}
                  className={`sound-${!isPlaying}`}
                />
                {i18next.t("topBar.music")}
                <button
                  className="music-btn"
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                >
                  {!isPlaying ? "ON" : "OFF"}
                </button>
              </div>
            </Nav.Item>
            <Nav.Item>
              <div className="nav-link" onClick={toggleLanguage}>
                <button className="translate-btn" >
                  {language.toUpperCase()}
                </button>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
