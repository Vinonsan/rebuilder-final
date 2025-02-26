// HowItWorksSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPalette, FaRobot, FaCloudUploadAlt, FaSearch, FaMobile, FaChartLine } from 'react-icons/fa';
import './style/howitworks.css'
const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">How It Works</h2>
          <div className="animated-underline"></div>
          <p className="section-description">
          Use our simple but effective AI-driven method to create your website instantly.

          </p>
        </div>
        <Row className="justify-content-center g-4">
          {[
           { 
            step: 1, 
            title: 'Select the Type of Website', 
            description: 'Choose the template you want for blogs, portfolios, e-commerce, or businesses.',
            icon: <FaPalette className="step-icon" />
          },
          { 
            step: 2, 
            title: 'Use AI to Customize', 
            description: 'AI makes content, color scheme, and layout suggestions while allowing human adjustments.',
            icon: <FaRobot className="step-icon" />
          },
          { 
            step: 3, 
            title: 'Add Your Content', 
            description: 'You may decide to either let AI create material for you or upload your own text and graphics.',
            icon: <FaCloudUploadAlt className="step-icon" />
          },
          { 
            step: 4, 
            title: 'Search Engine Optimization', 
            description: 'The content you provide is automatically optimized for search engines by AI.',
            icon: <FaSearch className="step-icon" />
          },
          { 
            step: 5, 
            title: 'Mobile Optimization', 
            description: 'AI makes sure that your website is seamlessly optimized for users on any screen size.',
            icon: <FaMobile className="step-icon" />
          },
          { 
            step: 6, 
            title: 'Start and Track', 
            description: 'Deploy your website and monitor how it works towards success using AI analytics.',
            icon: <FaChartLine className="step-icon" />
          }
          ].map((step, index) => (
            <Col key={index} md={6} lg={4}>
              <div className="step-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="step-number">{step.step}</div>
                <div className="step-icon-wrapper">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-connector"></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HowItWorksSection;
