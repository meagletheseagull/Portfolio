import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/grad_2.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a mechanical engineer that somehow found myself in the world of
              software engineering, in pursuit of going into robotics.
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="blue"> C++ and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are in &nbsp;
              <i>
                <b className="blue">Robotics (mechanical and software design) </b> and
                also in areas related to{" "}
                <b className="blue">
                  Artifical Intelligence and Machine Learning.
                </b>
              </i>
              <br />
              <br />
              I am going to be finishing my masters in &nbsp;
              <i>
                <b className="blue"> computer science </b>
              this upcoming {" "}
                <b className="blue"> fall 2023 </b>
              </i>
              and will be in search of a full-time role as a
              <b className="blue"> Roboticist  </b>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/meagletheseagull"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/miguel-mac/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/meagletheseagull"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
