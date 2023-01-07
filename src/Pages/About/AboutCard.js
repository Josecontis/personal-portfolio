import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImMusic } from "react-icons/im";
import { IoLogoGameControllerB } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am
            <span className="purple">Conticchio Giuseppe </span>
            from <span className="purple"> Gravina in Puglia, Italy.</span>
            <br />I am a junior software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> &nbsp; Playing Games
              <IoLogoGameControllerB className="about-icon" />
            </li>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> &nbsp; Playing Guitar, and
              other instrument <ImMusic className="about-icon" />
            </li>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> &nbsp; 3D Design and
            </li>
          </ul>

          <p className="about-phrase">
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Giuseppe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
