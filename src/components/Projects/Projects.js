import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import diminsion from "../../Assets/Projects/4-Diminsion.png"
import clinc from "../../Assets/Projects/clinc.png";
import ecomerce from "../../Assets/Projects/ecomerce.png"
import FoodFounder from "../../Assets/Projects/Food Founder.png"
import sovate from "../../Assets/Projects/savote.png"
import car from "../../Assets/Projects/car.png"
import store from "../../Assets/Projects/Store.png"
import fashion from "../../Assets/Projects/fashionnest.png"
import hotel from "../../Assets/Projects/hotel.png"
import mask from "../../Assets/Projects/3mask.png"
import Qurane from "../../Assets/Projects/Qurane.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clinc}
              isBlog={false}
              title="Clinc"
              description="A platform that helps patients book appointments, consult doctors online, and manage their health records efficiently."
              ghLink="https://github.com/mohamedabdel-khaleq/Clinc"
              demoLink="https://clinc-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diminsion}
              isBlog={false}
              title="4-Diminsion"
              description="4-Dimension is a construction and contracting company project that delivers comprehensive building solutions with a focus on quality, efficiency, and modern design. The project represents a professional brand identity for a construction company specializing in residential and commercial developments."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"<--------Please include a demo link here
              demoLink="https://www.4dimeng.com/" 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomerce}
              isBlog={false}
              title="Ecomerce website"
              description="A modern e-commerce platform designed to provide a smooth and secure online shopping experience. The project allows users to browse products, view details, and make purchases easily through a clean and user-friendly interface. It focuses on performance, usability, and responsive design to ensure a seamless experience across all devices."
              ghLink="https://github.com/mohamedabdel-khaleq/-E-comerce"
              demoLink="https://e-comerce-coral.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodFounder}
              isBlog={false}
              title="FoodFounder"
              description="FoodFounder is a modern food ordering platform that allows users to explore restaurants, browse menus, and place orders easily through a clean and user-friendly interface. The project focuses on speed, simplicity, and responsive design to deliver a smooth experience across all devices."
              ghLink="https://github.com/mohamedabdel-khaleq/Food-Founder"
              demoLink="https://quran-yngh.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://github.com/mohamedabdel-khaleq/PlantAI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sovate}
              isBlog={false}
              title="Savory Bites"
              description = "Savory Bites is a modern food ordering web application designed to provide a smooth and enjoyable user experience.It allows users to browse menus, explore meals, and place orders through a clean and responsive interface.The platform focuses on simplicity,performance,and accessibility across all devices."
              ghLink="https://github.com/mohamedabdel-khaleq/Savory-Bites"
              demoLink="https://savory-bites-rose.vercel.app/" 
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="ArbeCar"
              description="rbeCar is a modern car service and booking platform designed to simplify vehicle rentals and services.
            It allows users to explore available cars, view details, and make reservations through an intuitive interface.
            The platform focuses on reliability, smooth user experience, and responsive design across all devices"
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection" <--------Please include a demo link here
              demoLink="https://cars-93v6.vercel.app/"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="store website"
              description="modern fashion e-commerce website designed to showcase and sell clothing in a stylish way.
              It allows users to browse collections, view product details, and add items to their cart 
              The website focuses on attractive UI, smooth navigation, and a responsive design for all devices"
              demoLink="https://store-wine-alpha.vercel.app/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="A modern fashion clothing website designed to showcase the latest trends and styles.
              It allows users to explore collections, view product details, and shop easily online.
              The platform focuses on elegant design, smooth user experience, and full responsiveness."
              ghLink="https://github.com/mohamedabdel-khaleq/FashionNest" 
              demoLink="https://fashion-nest.vercel.app/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Qurane}
              isBlog={false}
              title="Qurane "
              description="his platform provides full access to the Holy Quran with recitations, translations, and tafsir.
              It offers an interactive and user-friendly experience for learning and exploring the Quran.
              Ideal for study, reflection, and spiritual growth anytime, anywhere.."
              ghLink="https://github.com/mohamedabdel-khaleq/Quran"  
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mask}
              isBlog={false}
              title="3mask"
              description="mask is a medical supplies platform providing essential healthcare products and protective equipment.
            It offers high-quality medical tools, masks, and pharmacy-related essentials.
            The platform focuses on reliability, safety, and easy access to medical needs."
              demoLink="https://3mask.vercel.app/wholesale"  
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Travel website"
              description="A travel website designed to help users discover and book exciting trips and destinations.
              It offers detailed travel packages, booking options, and trip planning features.
              The platform focuses on ease of use, attractive visuals, and a smooth booking experience"
              demoLink="https://trippify.net/hotels"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
