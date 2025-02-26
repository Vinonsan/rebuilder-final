// IntegrationsSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTools, FaMobile, FaCloud, FaRobot, FaDatabase, FaLock, FaChartLine, FaComments } from 'react-icons/fa';
import './style/integration.css'
const IntegrationsSection = () => {
  return (
    <section className="integrations-section" id="integrations">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">Seamless Integrations</h2>
          <div className="animated-underline"></div>
          <p className="section-description">
          Maximize the Potential of Your Website with Effective Tools and Integrations.

          </p>
        </div>
        <Row className="justify-content-center g-4">
          {[
              { 
                icon: <FaTools />, 
                title: 'Developer Tools', 
                description: 'Integrate with the IDEs and development tools of your choice for smooth operations easily.',
                color: '#FF6B6B'
              },
              { 
                icon: <FaMobile />, 
                title: 'Mobile Apps', 
                description: 'Guarantee seamless mobile experiences with native support for the iOS and Android platforms.',
                color: '#4834D4'
              },
              { 
                icon: <FaCloud />, 
                title: 'Cloud Services', 
                description: 'Dependable and expandable hosting through smooth connection with top cloud providers.',
                color: '#00B4DB'
              },
              { 
                icon: <FaRobot />, 
                title: 'AI Services', 
                description: 'Connecting to well-known AI and machine learning services is simple and can improve functionality.',
                color: '#6AB04C'
              },
              { 
                icon: <FaDatabase />, 
                title: 'Analytical Data', 
                description: 'Integrate your website with advanced analytics tools to monitor and improve its performance.',
                color: '#F9CA24'
              },
              { 
                icon: <FaLock />, 
                title: 'Security Instruments', 
                description: 'Connect with leading authentication and security providers to safeguard user data.',
                color: '#EB4D4B'
              },
              { 
                icon: <FaChartLine />, 
                title: 'Marketing Tools', 
                description: 'Effortlessly connect with leading marketing and CRM tools to increase client interaction.',
                color: '#686DE0'
              },
              { 
                icon: <FaComments />, 
                title: 'Interacting Tools', 
                description: 'Use messaging and teamwork technologies to improve customer service and team cooperation.',
                color: '#30336B'
              }
          ].map((integration, index) => (
            <Col key={index} lg={3} md={6}>
              <div className="integration-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="integration-icon-wrapper" style={{'--icon-color': integration.color}}>
                  {integration.icon}
                </div>
                <h3 className="integration-title">{integration.title}</h3>
                <p className="integration-description">{integration.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default IntegrationsSection;
