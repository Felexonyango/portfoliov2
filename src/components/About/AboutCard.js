import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Felex Onyango </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br /> I am a software engineer with over 2 years of working experience
            in building products. I possess extensive knowledge of web
            application and mobile web development. My proven experience in both
            front-end and back-end development puts me in a unique position to
            deliver work that meets your team’s deadlines and exceeds your
            expectations.
           
          </p>
         

         
          <footer className="blockquote-footer">Felex </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
