import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  
  SiMongodb,
  SiHtml5,
  SiCplusplus,
  SiTailwindcss,
  SiJava,
  SiC,
  SiCss3,
  SiMysql,
  SiLinux,
  
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiLinux />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
