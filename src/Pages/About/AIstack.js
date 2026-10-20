import { Row } from "react-bootstrap";
import { SiClaude, SiModelcontextprotocol, SiOpenai } from "react-icons/si";
import { TbBrain, TbPrompt, TbRobot, TbServerBolt, TbTerminal2 } from "react-icons/tb";
import "./Stack.css";
import TechIcon from "./TechIcon";

const aiSkills = [
  { icon: <TbBrain />, name: "ML classifiers" },
  { icon: <TbServerBolt />, name: "Local LLMs" },
  { icon: <SiClaude />, name: "Claude" },
  { icon: <SiOpenai />, name: "GPT" },
  { icon: <TbTerminal2 />, name: "Claude Code" },
  { icon: <TbRobot />, name: "CLI AI agents" },
  { icon: <SiModelcontextprotocol />, name: "MCP" },
  { icon: <TbPrompt />, name: "Prompt Engineering" },
];

function AIstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {aiSkills.map(({ icon, name }) => (
        <TechIcon key={name} icon={icon} name={name} />
      ))}
    </Row>
  );
}

export default AIstack;
