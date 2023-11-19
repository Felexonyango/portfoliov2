import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movieapp from "../../Assets/Projects/movieapp.PNG";
import dev from "../../Assets/Projects/dev.PNG";
import Ecom from "../../Assets/Projects/Ecom.PNG";
import PM from "../../Assets/Projects/PM.PNG";
import mobileapp from "../../Assets/Projects/mobileapp.PNG";
import LeaveM from "../../Assets/Projects/LeaveM.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Let me offer you a glimpse into my recent project endeavors.
           A number of these projects are accessible on GitHub, spanning from Monorepos
          created using the NX tool, to my daily practice of tackling LeetCode
          challenges. These efforts are all aimed at enhancing and honing my
          programming skills.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PM}
              isBlog={false}
              title="Project Management"
              description="Developed a project management software designed for efficient product management, streamlining deliverable tracking, ensuring milestone achievements, and enhancing overall success.
              It  utilizes Angular, Primeng, Rxjs  and ExpressJs.
               The system includes features such as task assignment, file uploads ,role based permissions and real-time notifications for impending deadlines. 
               It facilitates easy categorization of products into distinct departments through the utilization of workspaces, showcasing its multi-tenant capability.
                This project exemplifies my proficiency in software development and practical implementation of project management solutions
              
              "
              ghLink="https://github.com/Felexonyango/project-learn"
              demoLink="https://felex-onyango-project-managment.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LeaveM}
              isBlog={false}
              title="Leave Management"
              description="Engineered a comprehensive leave management solution utilizing Angular, RxJS, NgRx, MongoDB and Express.js. 
              The application is tailored for organizations, streamlining onboarding processes and enhancing leave tracking within the company. 
              This system significantly simplifies the complex task of managing leaves, contributing to improved efficiency and employee satisfaction.
               The system was well-written with unit testing, ensuring robustness and reliability in its functionality.
                This approach not only guaranteed the software's stability but also facilitated easier maintenance and future enhancements"
              ghLink="https://github.com/Felexonyango/ngrx-learn"
              demoLink="https://felex-leave-managment.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecom}
              isBlog={false}
              title="E-commerce "
              description="Created a robust e-commerce application utilizing React,Redux, TypeScript, and Express.js.
               This platform facilitates seamless transactions, empowering businesses to effortlessly offer and acquire a wide range of goods and services. 
               This solution enhances the customer experience while driving business growth through streamlined sales processes"
              ghLink="https://github.com/Felexonyango/Ecommerce-web"
              demoLink="https://felex-eshop.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieapp}
              isBlog={false}
              title="Movie App"
              description="Presenting a cutting-edge movie application designed to empower users with the ability to explore the latest global cinematic releases.
               This innovative platform is engineered using a technology stack that includes React, Redux Toolkit, and a blend of Sass and CSS, ensuring a visually captivating and user-friendly experience.
              Stay ahead in the entertainment industry with this dynamic solution, offering users the convenience to discover and engage with the most recent movie releases from around the world."
              ghLink="https://github.com/Felexonyango/movieApp"
              demoLink="https://react-reduxtoolkit-movie-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileapp}
              isBlog={false}
              title="Mobile E-commerce App"
              description="Presenting a Cutting-Edge Mobile E-commerce Solution: Your Gateway to Seamless Shopping

              Unlock a new realm of shopping convenience with our expertly developed Mobile E-commerce App.
               Designed exclusively for authorized users, this platform grants access to a curated array of products, revolutionizing the browsing, shopping, and order fulfillment experience.
              
              Leveraging a powerful technology stack including React Native, Expo CLI, Firebase, and robust push notifications, our solution ensures top-notch security and interactivity. Elevate your business's online retail prowess and customer engagement with this visionary platform"
              ghLink="https://github.com/Felexonyango/E-commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dev}
              isBlog={false}
              title="Developer connector Social app"
              description="Unveiling a Global Developer Connector: The Ultimate Social Application Powered by React, Redux, Express.js, Sockets, and MongoDB

              Discover the transformative Developer Connector app, ingeniously crafted to unite developers and nurture talents worldwide. Harnessing the prowess of React, Redux, Express.js, Sockets, and MongoDB, this application serves as the epicenter for developers to connect, fostering mentorship and fostering interactions within dynamic chat rooms.
              
              Step into a new era of collaborative development, where expertise meets innovation and connections transcend boundaries. Embrace a global community dedicated to advancing the world of programming"
              ghLink="https://github.com/Felexonyango/DevConnector"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
