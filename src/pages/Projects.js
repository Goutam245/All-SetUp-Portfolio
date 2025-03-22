import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Basketballs from "../assets/projects/basket.png"
import FiverClone from "../assets/projects/Fiver.clone.png"
import HistoryIndia from "../assets/projects/History-india.png"
import CV from "../assets/projects/CV.png"
import AI from "../assets/projects/AI.png"
import Ecomarce from "../assets/projects/Ecommarce.png"
import fastFood from "../assets/projects/Fast-Food.png"
import gadgetShop from "../assets/projects/gadget-shop.png"
import Games from "../assets/projects/Game .png"
import Bdhistory from "../assets/projects/historyBd.png"
import Eart from "../assets/projects/eart.png"
import real from "../assets/projects/real-estate.png"
import Ghost from "../assets/projects/Ghost.png"
import Indiavspaki from "../assets/projects/i-p.war.png"
import fitness from "../assets/projects/fitness.png"
import logo from "..//assets/projects/logo.png"
import cover from "../assets/projects/banner.png"
import self from "../assets/projects/self.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <h4 className="text-white border border border-yellow">MY Best Frontend Projects 🚀🌟</h4>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Games}
              isBlog={false}
              title="Ultimate Game Website"
              description="🎮🌟Welcome to the Ultimate Game website, where gaming enthusiasts come together to explore, compete, and discover new worlds 🌍. This platform provides a hub for all types of gamers, from casual players 🕹️ to hardcore competitors 🏆, featuring the latest games 🎮, gaming news 📰, and exclusive content. The website is designed with a user-friendly interface 🖥️ that ensures smooth navigation 🧭 and a rich experience for all visitors."
              ghLink="https://github.com/Goutam245/Ultimate-Game-Website-"
              demoLink="https://ultimate-game-website.netlify.app/"
            />
          </Col>
    
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CV}
              isBlog={false}
              title="Professional CV Builder"
              description="Build a Job-Winning CV in Minutes – The Ultimate Professional CV Builder 🚀🌟 Stand Out. Get Hired. Succeed. Looking to land your dream job? Our Professional CV Builder makes it effortless to create an eye-catching, ATS-friendly, and industry-approved resume in just a few clicks! Whether you're a fresh graduate, experienced professional, or career changer, our smart tools help you craft the perfect CV that grabs recruiters' attention."
              ghLink="https://github.com/Goutam245/Professional-CV-Builder"
              demoLink="https://professional-cv-builders.netlify.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI}
              isBlog={false}
              title="My-Simple-AI-Agent"
              description="Meet Your AI Agent: The Ultimate Virtual Assistant 🤖🚀 Empowering Your Future with Cutting-Edge AI Technology 🔮Say hello to your very own powerful AI Agent, designed to elevate your digital experience! Combining advanced artificial intelligence with sleek design and seamless integration, this intelligent agent is here to provide instant solutions, personalized assistance, and enhance productivity like never before."
              ghLink="https://github.com/Goutam245/My-Simple-AI-Agent"
              demoLink="https://my-simple-ai-agent.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FiverClone}
              isBlog={false}
              title="Fiverr-Clone"
              description="🚀 🌟 Overview This project is a Fiverr clone, a freelance marketplace that connects buyers and sellers. Built using HTML, CSS, JavaScript, and React, this platform provides a seamless user experience for freelancers to showcase their services and clients to hire professionals. The modern UI/UX ensures smooth navigation and interaction. This Fiverr clone is designed for scalability, allowing for future integrations."
              ghLink="https://github.com/Goutam245/Fiverr-Clone"
              demoLink="https://fiverr-clones-app.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecomarce}
              isBlog={false}
              title="E-commarce Website"
              description="Shop Smarter, 🚀 🌟 Live Better – Your Ultimate Online Shopping Destination! Welcome to [My Website], where style, convenience, and unbeatable deals come together! Discover a world of premium products, handpicked just for you. From trendy fashion and cutting-edge electronics to home essentials and beauty must-haves—we’ve got it all! ✨ Shop with Confidence, Shop with Style! 🛍️ Start Shopping Now & Elevate Your Lifestyle!"
              ghLink="https://github.com/Goutam245/E-commarce-Website"
              demoLink="https://creative-ecommarce-website.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={real}
              isBlog={false}
              title="Real Estate Listing site"
              description="🏡 Our Real Estate Listing Website 🏠 is designed to provide a seamless platform for buyers, sellers, and real estate agents to connect. Built using HTML, CSS, and JavaScript, this website ensures a responsive, user-friendly, and visually appealing experience. Whether you're looking to buy, sell, or rent properties, this platform offers an intuitive interface with powerful search and filtering options 🔎 to help users find their ideal property effortlessly.🚀 "
              ghLink="https://github.com/Goutam245/Real-estate-listing-site"
              demoLink="https://real-estate-listing-site.netlify.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fastFood}
              isBlog={false}
              title="Burgers-Website"
              description=" Welcome to my Fast Food Website!🍔🍟I've designed and developed a stunning, mouthwatering fast food website using HTML, CSS, and JavaScript to bring an appetizing digital experience to life! This project is inspired by top-tier burger brands and showcases an eye-catching design, smooth animations, and user-friendly features that enhance the overall browsing experience. Every section is designed with high-quality food images, vibrant colors, and a sleek. 🔥 Explore Now & Enjoy the Best Burger Collection! 🍔🚀"
              ghLink="https://github.com/Goutam245/Burgers-Websites"
              demoLink="https://best-fast-foods-collection.netlify.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Basketballs}
              isBlog={false}
              title="Basketballs-Company"
              description="Welcome to 🏀[MY Basketball Company ] 🏀, where passion for the game meets top-tier innovation. We specialize in crafting high-performance basketballs designed for players of all levels. Whether you're a professional athlete, a dedicated amateur, or a weekend warrior, our basketballs are engineered to enhance your skills and elevate your game. 🚀 our mission is to provide basketball enthusiasts with the highest quality equipment to improve performance and enjoyment on the court.✨🚀"
              ghLink="https://github.com/Goutam245/-Basketballs-Company"
              demoLink="https://basketballs-company.netlify.app/"
            />
          </Col>
       
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gadgetShop}
              isBlog={false}
              title="Best Gadget Zone"
              description="Gadget-Zone Offering the latest gadgets, innovative tech, and accessories for every need. From smartphones and laptops to smart home devices and gaming gear. Perfect for tech enthusiasts, gamers, and professionals alike. Experience top-notch products and exceptional customer service! Home Hero section with headline, subheading, and call-to-action. Highlight features/benefits with icons. Testimonials, gallery/showcase, FAQs, and a footer preview for navigation. ✨🚀"
              ghLink="https://github.com/Goutam245/Gadzet-Best-Zone"
              demoLink="https://gadget-heaven-websites.netlify.app/"
            />
          </Col>
         
         
          <h4 className="text-white border border border-yellow">Creative History Writing 🚀 Ghost Writing 🌟 Content Writing</h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HistoryIndia}
              //isBlog={false}
              title="The History Of India"
              description=" ✨🚀 India, one of the world's oldest civilizations, has a rich and diverse history that spans thousands of years. From the dawn of the Indus Valley Civilization to the rise and fall of great empires such as the Mauryas, Guptas, Mughals, and the British Raj, India's past is filled with remarkable events. This historical account will explore India's political, social, and economic evolution, shedding light on its struggles, achievements, and the spirit of its people. "
               ghLink="https://drive.google.com/file/d/1PbOBJDvPRDVmpdbskiwSj6OGrjoFb4x8/view?usp=sharing"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bdhistory}
              isBlog={false}
              title="The History of Bangladesh"
              description="The history of Bangladesh is a rich and complex narrative of struggle, resilience, and triumph. From its ancient roots in Bengal civilization to its emergence as an independent nation in 1971, Bangladesh has witnessed transformative events that have shaped its identity. This historical account delves into the rise and fall of powerful dynasties, the impact of colonial rule, the fight for linguistic and cultural rights, and the heroic liberation war that led to the birth of a sovereign country."
              ghLink="https://drive.google.com/file/d/1Zg72upaKlrz-fV_SHpJNl6Xqlb8tPnLm/view?usp=sharing"
             

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Indiavspaki}
              isBlog={false}
              title="India vs Pakistan Wars"
              description="🏔️⚔️ India and Pakistan have fought several wars since their independence in 1947. Most conflicts have been centered around the Kashmir dispute, but tensions have also emerged due to political and military differences. First India-Pakistani War (1947-1948) – First Kashmir War 🏔️⚔️. After Partition of India (1947), the princely state of Jammu & Kashmir (J&K) had the choice to join India or Pakistan."
              ghLink="https://drive.google.com/file/d/10Zi0kOw-E6zflmSfcrVKcUasReYvl50O/view?usp=sharing"
             

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ghost}
              isBlog={false}
              title="Best Ghostwriting"
              description="Incorporeal Cry 👻🔮 is a haunting tale of unseen sorrows and spectral whispers, where the echoes of the past refuse to be silenced. When an enigmatic presence 👁️ begins to manifest in the depths of the night 🌙, its chilling cries 🥶👂 unravel secrets long buried in the shadows. As the living and the departed collide, a fragile boundary between the corporeal and the ethereal shatters, revealing a truth more terrifying than death itself 💀⚰️."
              ghLink="https://drive.google.com/file/d/1roigky5U4ndyiO9qDwHmyzhrdVJcn39z/view?usp=sharing"
             

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Personal Trainer"
              description="The Importance of Being a Personal Trainer 💪
               By definition, a personal trainer is a fitness professional that provides individualized exercise programming and client instruction. 🏃‍♂️📋 Programming and client instruction have changed dramatically over time and will continue to evolve for years to come. Your NESTA education and continuing education courses 📚 are designed to keep you at the forefront of the latest developments in exercise science applications within the fitness industry. 🏆"
              ghLink="https://drive.google.com/file/d/1OJCHVp2GfDC9dVzdA2rmYJw1Yz8M4GAA/view?usp=sharing"
             

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eart}
              isBlog={false}
              title="Earthquakes"
              description="🌍⚡ Earthquakes have shaped human history for centuries, leaving behind tales of devastation, resilience, and scientific discovery. From ancient tremors recorded on fragile manuscripts to modern seismic events captured in real-time, the study of earthquakes offers a window into both natural forces and human adaptation.💥🌋 This historical exploration delves into the most significant earthquakes throughout time, their impact on civilizations, and the advancements in seismology that help us prepare for future tremors.🌍"
              ghLink="https://drive.google.com/file/d/1esBHK8au_la7oAAx5MZ3fwgekF3JGq6k/view?usp=sharing"
            />
          </Col>
          <h4 className="text-white border border border-yellow">Best Banner 🚀 Cover Photo 🌟 Logo Design</h4>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Logo Design"
              description="This logo embodies a perfect blend of modern aesthetics and timeless elegance, meticulously crafted to represent your brand’s identity. With bold, clean lines and vibrant, yet sophisticated color palettes, the design speaks to innovation 🚀 and trustworthiness 🤝, ensuring an immediate connection with your target audience. The logo features a unique, memorable icon that cleverly encapsulates the essence of your brand values 🌟, offering a dynamic yet simple visual appeal."
              ghLink="https://drive.google.com/file/d/14gHKkK0J5DSK0LdUcysmReP5K0ra8SWq/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cover}
              isBlog={false}
              title="Banner & cover photo"
              description="Create a modern, bold, and memorable logo that embodies the essence of your brand 🌟. The logo should be clean and professional 🧑‍💻, with a focus on strong typography and a unique icon that captures the attention of viewers 👀. Use vibrant colors 🎨 to infuse energy, while maintaining a sense of sophistication through a minimalist design approach ✨. Incorporate elements that are relevant to your industry 🏢, ensuring the logo stands out across various platforms, including social media 📱, websites 🌐, and print materials 🖨️."
              ghLink="https://drive.google.com/file/d/1ob7UCEkV6_7kVYmzBBw-pe79Wke91WGi/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={self}
              isBlog={false}
              title="Self Respect"
              description="Self-respect is the foundation of personal growth and success 🌱✨. It’s the art of valuing yourself and recognizing your worth in every aspect of life 💪💖. In a world that constantly challenges our beliefs and boundaries 🌍, mastering the concept of self-respect empowers us to maintain our integrity and stay true to our values 🛡️. This collection of writings on self-respect will delve deep into its importance, offering practical insights, inspiring stories, and actionable tips that will guide you toward embracing your true self 📝💡."
              ghLink="https://drive.google.com/file/d/1O0SIjF5g4GRwEZ5cql7_Nz0Q51ewwZxD/view?usp=sharing"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects