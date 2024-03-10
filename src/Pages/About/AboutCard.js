import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./AboutCard.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am
            <b> Conticchio Giuseppe </b>
            from <b> Gravina in Puglia, Italy.</b>
            <br />I am a Full-stack software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> &nbsp; Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> &nbsp; Playing Guitar, and
              other instrument
            </li>
            <li className="about-activity">
              <ImPointRight className="about-icon" /> &nbsp; 3D Design and
              digital sculpting in Blender and creation
            </li>
          </ul>

          <p className="about-phrase">
            &quot;Strive to build things that make a difference!&quot;
          </p>
          <footer className="blockquote-footer">Giuseppe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
