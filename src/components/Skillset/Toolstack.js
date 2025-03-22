import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { SiAdobelightroom, SiVisualstudiocode} from "react-icons/si";
import { FaRegFileExcel } from "react-icons/fa";
import { FaRegFileWord } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { SiAdobephotoshop } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMore } from "react-icons/md";

const renderTooltip = (props, text) => (
  <Tooltip {...props}>{text}</Tooltip>
);

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={(props) => renderTooltip(props, "Adobe Lightroom")}>
          <span><SiAdobelightroom /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={(props) => renderTooltip(props, "VS Code")}>
          <span><SiVisualstudiocode /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={(props) => renderTooltip(props, " Microsoft Excel")}>
          <span><FaRegFileExcel/></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={(props) => renderTooltip(props, "Adobe Illustrator")}>
          <span><DiIllustrator/></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={(props) => renderTooltip(props, "Microsoft Word")}>
          <span><FaRegFileWord /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={(props) => renderTooltip(props, "Adobe Photoshop")}>
          <span><SiAdobephotoshop /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={(props) => renderTooltip(props, "Github")}>
          <span><IoLogoGithub /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={(props) => renderTooltip(props, "linkedin")}>
          <span><FaLinkedin /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={(props) => renderTooltip(props, "More Tools")}>
          <span><MdOutlineMore /></span>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
