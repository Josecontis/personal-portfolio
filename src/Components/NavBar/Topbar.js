import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../Assets/header-logo.svg";
import { useNavigate } from "react-router-dom";
import { CgHeadset, CgCoffee } from "react-icons/cg";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import SONG from "./Songs/LudovicoEinaudi-Experience.mp3";
import "./Topbar.css";
import { CgFileDocument } from "react-icons/cg";

export const Topbar = () => {
  const navigate = useNavigate();

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
          aria-controls="responsive-topbar-nav"
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
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Item>

            <Nav.Item
              className="nav-link"
              onClick={() => {
                updateExpanded(false);
                navigate("/about");
              }}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Item>

            <Nav.Item
              className="nav-link"
              onClick={() => {
                updateExpanded(false);
                navigate("/projects");
              }}
            >
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
              Projects
            </Nav.Item>

            <Nav.Item
              className="nav-link"
              onClick={() => {
                updateExpanded(false);
                navigate("/resume");
              }}
            >
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Item>

            <Nav.Item
              className="nav-link"
              onClick={() => {
                updateExpanded(false);
                navigate("/contacts");
              }}
            >
              <CgCoffee style={{ marginBottom: "2px" }} /> Contacts
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
                Music
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
            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
