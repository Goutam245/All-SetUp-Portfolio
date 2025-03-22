import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaFilePowerpoint} from "react-icons/fa";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { FaRegCopyright } from "react-icons/fa";
 import { RxCodesandboxLogo } from "react-icons/rx";
import { TbBrandTailwind } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { TbWriting } from "react-icons/tb";
import { GiGhost } from "react-icons/gi";

function Techstack() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techs = [
    { icon: <TiHtml5 />, name: "HTML5" },
    { icon: <MdCss />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React" },
    { icon: <TbBrandTailwind />, name: "Tailwind CSS" },
    { icon: <GiGhost/>, name: "Ghost Writing" },
    { icon: <FaRegCopyright />, name: "Copywriting" },
    { icon: <TbWriting />, name: "Content Writing" },
    { icon: <DiGit />, name: "Git" },
    { icon: <TiVendorMicrosoft />, name: "Microsoft Security" },
    { icon: <RxCodesandboxLogo />, name: "Graphics Design" },
    { icon: <FaFilePowerpoint />, name: "Project Management" },
    { icon: <TfiWrite />, name: "Academic Writer" },
  ];

  return (
    <div className="text-center">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techs.map((tech, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <div
              style={{
                position: "relative",
                display: "inline-block",
                textAlign: "center",
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {tech.icon}
              {hoveredTech === tech.name && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "18px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tech.name}
                </div>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
