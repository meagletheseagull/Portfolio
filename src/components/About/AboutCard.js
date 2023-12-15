import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Miguel Cabrera </span>
            from <span className="blue"> Miami, Florida.</span> <br></br>
            <br /> I have just recently finished my masters this semester in computer science at FIU
            and already have my bachelors in mechanical engineering from the same institution.
            My journey in these fields has been enriched by a series of challenging projects and internships at BOSCH Florida 
            Heat Pump and a startup company named Cutting Edge AI.
            <br /> <br></br>
            <br />
            I am particularly passionate about the field of robotics and aim to leverage my skills in CAD, AI, machine learning,etc. 
            to contribute to innovative solutions in the field.
            <br /> <br></br>
            Apart from coding and robotics, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Brazilian Jiujitsu
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
          </ul>
           <p style={{ color: "rgb(155 126 172)" }}>
            "There is no losing in jiu jitsu. You either win or you learn."{" "}
          </p > 
          <footer className="blockquote-footer">Carlson Gracie, Sr.</footer> 
          <p style={{ textAlign: "justify" }}>
          I would like to same that the same holds true in life: there is no losing, only opportunities to learn and succeed.
        </p>
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
