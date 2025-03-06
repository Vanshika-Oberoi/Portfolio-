import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import blog from "../assets/projects/blog.png";
import kickstart from "../assets/projects/kickstart.png";
import AI from "../assets/projects/AI.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Website"
              description="This full-stack blog website allows users to create, read, update, and delete blog posts with an interactive and responsive UI. It is built using React.js (frontend) and Express.js with MongoDB (backend)."
              ghLink="https://github.com/Vanshika-Oberoi/Blog-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="This e-commerce web application provides users with a seamless shopping experience. It features a dynamic product listing, cart management, and user authentication. The website is designed with HTML, CSS, and JavaScript for an interactive UI and utilizes local storage to manage cart items efficiently."
              ghLink="https://github.com/Vanshika-Oberoi/E-Commerce"
            />
          </Col>

         

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI}
              isBlog={false}
              title="AI-Quiz"
              description="This AI-driven quiz application allows users to answer programming-related questions and receive real-time feedback using Google Gemini AI. The application is built using HTML, CSS, JavaScript, and Express.js, with questions dynamically loaded from a JSON file."
              ghLink="https://github.com/Vanshika-Oberoi/AI-Quiz"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects