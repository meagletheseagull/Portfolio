import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shellhacks from "../../Assets/Projects/shellhacks_22.png"
import arm from "../../Assets/Projects/arm.png"
import robo from "../../Assets/Projects/robo_de_janeiro.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shellhacks}
              isBlog={false}
              title="Object Locator Using GPS Input"
              description="In this project, I developed a specialized device capable of accurately locating and tracking objects solely through GPS input for the shellhacks 2022 event. The endeavor required a integration of both hardware and software components, showcasing my capability to engineer innovative solutions. This project culminated in the successful creation of a functional prototype, even under stringent time constraints of 3 days."

              demoLink="https://youtube.com/shorts/hwlaBH5Xm5A"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robo}
              isBlog={false}
              title="Solar Powered Pesticide Spraying Robot"
              description="For my senior design project, I spearheaded the design and development of a groundbreaking remote-controlled robot powered by solar energy, specifically designed to spray pesticides. The primary objective of this robot was to diminish the direct exposure of humans to potentially harmful pesticides and to protect them from extreme weather conditions often encountered during manual spraying.
              Throughout the project, I employed a meticulous mechanical design process, which facilitated multiple iterations to continually enhance the robot's performance and efficiency. My technical approach included creating detailed CAD drawings using SolidWorks, leveraging rapid prototyping services, and playing a role in the actual manufacturing process of the robot."
              demoLink="https://youtu.be/MCcZ9ERJ4WA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arm}
              isBlog={false}
              title="Collaborative Dexterous Manipulation"
              description="I took on a challenging task with the UR3 industrial robot, aiming to grip and sort balls based on their color. A vital aspect of this project involved the integration of ROS nodes, which facilitated seamless communication between the depth camera and the robot arm, ensuring accurate and efficient ball detection and sorting.
              To enhance the robot's capability in recognizing and pinpointing ball positions, I utilized the OpenCV library. This allowed for the precise determination of the centroids of the balls, ensuring the UR3 robot could grip and sort them accurately by color."
              demoLink="https://youtu.be/3TIN3wxTR_E"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
