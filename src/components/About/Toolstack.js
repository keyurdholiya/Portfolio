import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiAdobecreativecloud,
  SiAndroidstudio,
  SiComposer,
  SiCodecademy,
  SiCodechef,
  SiCoursera,
  SiMailchimp,
  SiMicrosoftoffice,
} from "react-icons/si";

import {
  DiAtom,
  DiWordpress,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <SiLinux /> <p style={{ fontSize:"10px" }}> Linux</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiVisualstudiocode /> <p style={{ fontSize:"10px" }}> Visual Studio</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiComposer /> <p style={{ fontSize:"10px" }}> Composer</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPostman /> <p style={{ fontSize:"10px" }}> Postman</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiHeroku /> <p style={{ fontSize:"10px" }}> heroku</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiWordpress /> <p style={{ fontSize:"10px" }}> Wordpress</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAdobecreativecloud /> <p style={{ fontSize:"10px" }}> Adobe Creative Cloud</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAndroidstudio /> <p style={{ fontSize:"10px" }}> Android Studio</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiCodecademy /> <p style={{ fontSize:"10px" }}> Codecademy</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiCodechef /> <p style={{ fontSize:"10px" }}> Codechef</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiCoursera /> <p style={{ fontSize:"10px" }}> Coursera</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiMailchimp /> <p style={{ fontSize:"10px" }}> Mailchimp</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiMicrosoftoffice /> <p style={{ fontSize:"10px" }}> Microsoft Office</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiAtom /> <p style={{ fontSize:"10px" }}> Atom</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
