import React from "react";
import { Col, Row } from "react-bootstrap";

function Mechstack() {
  const tools = ["ROS","Gazebo", "MATLAB", "3D Printing", "NX", "AutoCAD", "ANSYS", "SolidWorks"];
  const fontSize = "25px";
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <b><p style={{ fontSize }}>{tool}</p></b> {/* You can add a custom class name if needed */}
        </Col>
      ))}
    </Row>
  );
}

export default Mechstack;
