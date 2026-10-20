import { Row } from "react-bootstrap";
import {
  SiBlender,
  SiClaude,
  SiCpanel,
  SiDocker,
  SiGit,
  SiGithub,
  SiMarkdown,
  SiMiro,
  SiNetlify,
  SiPostman,
  SiPycharm,
  SiSublimetext,
  SiVercel,
} from "react-icons/si";
import { TbBrandVscode, TbServer } from "react-icons/tb";
import "./Stack.css";
import TechIcon from "./TechIcon";

const firstRow = [
  { icon: <TbBrandVscode />, name: "VS Code" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiNetlify />, name: "Netlify" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiCpanel />, name: "cPanel" },
  { icon: <TbServer />, name: "ServerPlan" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiBlender />, name: "Blender" },
];

const secondRow = [
  { icon: <SiSublimetext />, name: "Sublime Text" },
  { icon: <SiMarkdown />, name: "Markdown" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiPycharm />, name: "PyCharm" },
  { icon: <SiMiro />, name: "Miro" },
  { icon: <SiClaude />, name: "Claude" },
];

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        {firstRow.map(({ icon, name }) => (
          <TechIcon key={name} icon={icon} name={name} />
        ))}
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {secondRow.map(({ icon, name }) => (
          <TechIcon key={name} icon={icon} name={name} />
        ))}
      </Row>
    </>
  );
}

export default Toolstack;
