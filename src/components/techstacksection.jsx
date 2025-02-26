// TechStackSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNode, FaDatabase, FaLock, FaCloud, FaMobile, FaRobot, FaTools } from 'react-icons/fa';
import './style/techstack.css'
const TechStackSection = () => {
  return (
    <section className="tech-stack-section" id="tech-stack">
       {/* Animated Floating Circles */}
       <div className="animated-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">Modern Tech Solutions</h2>
          <div className="animated-underline"></div>
          <p className="section-description">
          Latest technologies to ensure scalability, security, and standard performance.
          </p>
        </div>
        <Row className="justify-content-center g-4">
          {[
              { 
    icon: <FaReact />, 
    title: 'Modern Frontend', 
    description: 'Created with advanced web technologies and React to create a responsive, smooth experience.',
    color: '#61DAFB'
  },
  { 
    icon: <FaNode />, 
    title: 'Powerful Backend', 
    description: 'Scalable Node.js backend with microservices architecture provides flexibility and speed.',
    color: '#68A063'
  },
  { 
    icon: <FaDatabase />, 
    title: 'Smart Database', 
    description: 'AI-optimized data storage and retrieval ensures efficiency and speed.',
    color: '#336791'
  },
  { 
    icon: <FaLock />, 
    title: 'Enterprise Level Security', 
    description: 'Highly secure encryption and safety precautions guarantee the protection of your data.',
    color: '#FFD700'
  },
  { 
    icon: <FaCloud />, 
    title: 'Cloud-Based Infrastructure', 
    description: 'Trustworthy cloud hosting with smooth deployment for maximum adaptability and uptime.',
    color: '#FF6B6B'
  },
  { 
    icon: <FaMobile />, 
    title: 'Design That Responds to Mobile', 
    description: 'Thoroughly designed for smooth operation on every size of screens and devices.',
    color: '#4834D4'
  },
  { 
    icon: <FaRobot />, 
    title: 'Integration of AI', 
    description: 'Making use of modern machine learning techniques to provide data-driven, intelligent solutions.',
    color: '#6AB04C'
  },
  { 
    icon: <FaTools />, 
    title: 'Tools for Developers', 
    description: 'A complete set of development tools to improve productivity and optimize processes.',
    color: '#EB4D4B'
  }
          ].map((tech, index) => (
            <Col key={index} lg={3} md={6}>
              <div className="tech-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="tech-icon-wrapper" style={{'--icon-color': tech.color}}>
                  {tech.icon}
                  <div className="tech-icon-ring"></div>
                </div>
                <h3 className="tech-title">{tech.title}</h3>
                <p className="tech-description">{tech.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TechStackSection;
