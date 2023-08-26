import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple">INTRODUCE</span> MYSELF
    </h1>
    <p className="home-about-body">
      My journey in programming began with fascination, and along the way, I've acquired valuable skills and knowledge.
      <br />
      <br />I'm proficient in languages like
      <i>
        <b className="purple">JavaScript and C# </b>
      </i>,  contributing to a strong foundation.
      <br />
      My passion lies in crafting innovative
      <i>
        <b className="purple">Web Technologies and Products  </b>
      </i>  that push boundaries and captivate users.
      <br />
      <br />
      Whenever possible, I channel this enthusiasm into utilizing
      <b className="purple">Node.js</b> and
      <i>
        <b className="purple">
          Modern Javascript Libraries and Frameworks
        </b>
      </i>
      &nbsp;such as
      <i>
        <b className="purple">React.js, Angular EXpress Js and Next Js    </b>
      </i>
      to bring ideas to life.
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
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Felexonyango"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/felexonyango02"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/felex-onyango-912359201/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
