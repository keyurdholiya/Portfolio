import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
  DiMysql,
  DiNpm,
  DiPhotoshop,
} from "react-icons/di";
import { SiJavascript, SiFirebase, SiAdobe, SiAdobexd, SiAngularjs, SiDribbble, SiDotNet, SiHtml5, SiLaravel, SiMagento, SiNodemon, SiBootstrap } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <CgCPlusPlus /> <p style={{ fontSize:"10px" }}> C Plus Plus </p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiHtml5 /> <p style={{ fontSize:"10px" }}> Html5</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiJavascript /> <p style={{ fontSize:"10px" }}> Javascript</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiBootstrap /> <p style={{ fontSize:"10px" }}> Bootstrap</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiDotNet /> <p style={{ fontSize:"10px" }}> DotNet</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPhp /> <p style={{ fontSize:"10px" }}> Php </p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiMysql /> <p style={{ fontSize:"10px" }}> Mysql </p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiNpm /> <p style={{ fontSize:"10px" }}> Npm </p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiLaravel /> <p style={{ fontSize:"10px" }}> Laravel</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiMagento /> <p style={{ fontSize:"10px" }}> Magento</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNodemon /> <p style={{ fontSize:"10px" }}> Nodemon</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiNodejs /> <p style={{ fontSize:"10px" }}> Nodejs </p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact /> <p style={{ fontSize:"10px" }}> React</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiMongodb /> <p style={{ fontSize:"10px" }}> Mongodb</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPython /> <p style={{ fontSize:"10px" }}> Python</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAngularjs /> <p style={{ fontSize:"10px" }}> Angularjs </p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit /> <p style={{ fontSize:"10px" }}> Git</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFirebase /> <p style={{ fontSize:"10px" }}> Firebase</p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAdobe /> <p style={{ fontSize:"10px" }}> Adobe </p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAdobexd /> <p style={{ fontSize:"10px" }}> AdobeXD </p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPhotoshop /> <p style={{ fontSize:"10px" }}> Photoshop </p>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiDribbble /> <p style={{ fontSize:"10px" }}> Dribbble</p>
      </Col>


    </Row>
  );
}

export default Techstack;
