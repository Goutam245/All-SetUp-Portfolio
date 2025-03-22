import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


  

function AboutCard() {

  const style = {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
   
  
  };
  


  return (

  

    <Card style={style}   className="quote-card-view">
      <Card.Body >
        <blockquote  className="blockquote mb-0">
          <br/>
          <br/>
          <br/>
         
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Goutam ROY </span>
            from <span className="purple"> Gazipur, Bangladesh</span>.
            <br />
            <br/>
            
            I am currently pursuing a <b className="purple"> Bachelor of Science (BSc) in Computer Engineering</b>. I have a strong <b className="purple">interest in technology</b>, <b className="purple">programming</b>, and <b className="purple">software developmenty</b>.  My studies focus on areas such as artificial intelligence, algorithms, data structures and web development.
            I am passionate about learning new technologies and applying my  knowledge to solve real-world problems.
            <br /> <br/>
            
            Besides coding, I have been doing these things for a long time. And I have been completing these tasks beautifully.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Top Rated Freelancer
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphics Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Illustration & Vector Graphics
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Academic Writer
            </li>
            <li className="about-activity">
              <ImPointRight /> Audience Research & Insights
            </li>
            <li className="about-activity">
              <ImPointRight />Accounting & Financial Data Entry
            </li>
            <li className="about-activity">
              <ImPointRight /> Scientific & Technical Writing
            </li>
            <li className="about-activity">
              <ImPointRight />Creative Copywriting & Content Writing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
            
          <footer className="blockquote-footer">Goutam</footer>
        </blockquote>
      </Card.Body>
    </Card>


  );
}

export default AboutCard;












