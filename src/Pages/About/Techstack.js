import React from "react";
import { Row } from "react-bootstrap";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiApachecassandra,
  SiCplusplus,
  SiCss,
  SiDart,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedux,
  SiSpring,
  SiTensorflow,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import "./Stack.css";
import TechIcon from "./TechIcon";

const skills = [
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <SiDart />, name: "Dart" },
  { icon: <SiThreedotjs />, name: "Three.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss />, name: "CSS" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiSpring />, name: "Spring Boot" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiApachecassandra />, name: "Cassandra" },
  { icon: <TbApi />, name: "REST API" },
  { icon: <FaAws />, name: "AWS" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map(({ icon, name }) => (
        <TechIcon key={name} icon={icon} name={name} />
      ))}
    </Row>
  );
}

export default Techstack;
