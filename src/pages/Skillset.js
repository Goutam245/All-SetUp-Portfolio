import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle';
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1>I'm <span className="">Goutam ROY</span></h1>
        <p>I am a creative and detail-driven professional specializing in Graphics design, web development, and content creation. With expertise in tools like Photoshop, Illustrator, HTML5, CSS3, and GitHub, I deliver visually captivating designs and seamless, responsive websites. My storytelling and copywriting skills allow me to craft compelling, audience-focused content that leaves a lasting impact. Advanced proficiency in Microsoft Word, Excel, and data entry ensures precision and efficiency in every project.</p>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        <Leetcode />
        <Github />
      </Container>
    </Container>
  )
}

export default Skillset