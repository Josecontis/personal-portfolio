import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import homeLogo from "../../Assets/Programming-amico.svg";
import myImg from "../../Assets/avatar.svg";
import StarryBackground from "../../Components/Particles/StarryBackground";
import "./Home.css";
import Type from "./Tools/Type";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location && location.pathname === "/")
      document.title = "Home | Giuseppe Conticchio";
  }, [location]);

  return (
    <section>
      <StarryBackground />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> CONTICCHIO GIUSEPPE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                  <b> C++, Javascript and Python. </b>
                </i>
                <br />
                <br />
                My field of Interest s are building new&nbsp;
                <i>
                  <b>Web Technologies and Products </b> and also in areas
                  related to
                  <b>&nbsp;Deep Learning and Natural Launguage Processing.</b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b>Node.js</b> and&nbsp;
                <i>
                  <b>Modern Javascript Library and Frameworks</b>
                </i>
                &nbsp;like
                <i>
                  <b> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <div className="hover14 column">
                <figure>
                  <img src={myImg} alt="avatar" />
                </figure>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <b>connect </b>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Josecontis"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/giuseppe-conticchio-01a414159/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/giuseppe.conticchio/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};
