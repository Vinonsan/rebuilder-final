// FeaturesSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRocket, FaPalette, FaRobot, FaChartLine, FaComments, FaCloud,FaBolt } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      {/* Floating Background Shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-5"></div>
      
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
        <div className="animated-icon-container">
            <FaBolt className="animated-icon" />
          </div>
          <h2 className="section-title">AI Special Features</h2>
          <div className="animated-underline"></div>
          <p className="section-description">
          Experience the next generation of website development with our advanced AI-powered features.

          </p>
        </div>

        <Row className="justify-content-center g-4">
          {[
             { 
              icon: <FaRocket className="feature-icon" />, 
              title: 'Website Generation Using AI', 
              description: 'AI-powered brilliant templates that adjust to your needs quickly and easily to create websites while saving time, producing results with minimal effort and maximum efficiency.' 
            },
            { 
              icon: <FaPalette className="feature-icon" />, 
              title: 'Drag & Drop Personalization', 
              description: 'AI provides a seamless design process by making smart layout, color, and font suggestions to create websites with ideas that are suitable for your customer base and business.' 
            },
            { 
              icon: <FaRobot className="feature-icon" />, 
              title: 'SEO & Smart Content', 
              description: 'AI helps you easily construct search engine-friendly websites with less workload and gain amazing results by producing attractive text, graphics, and content optimization.' 
            },
            { 
              icon: <FaChartLine className="feature-icon" />, 
              title: 'Real-Time Insights', 
              description: 'AI-driven analytics monitor performance and interaction, offering insightful information to maximize performance, improve user experience, and make smarter decisions based on data.' 
            },
            { 
              icon: <FaComments className="feature-icon" />, 
              title: 'AI Chatbots Integration', 
              description: 'AI chatbots to increase website engagement by giving users immediate, individualized replies, boost customer service and experience through automated, real-time conversations.' 
            },
            { 
              icon: <FaCloud className="feature-icon" />, 
              title: 'Seamless Hosting Setup', 
              description: 'AI streamlines the setup process, guarantees seamless integration, and offers dependable, scalable solutions for a website launch by automating domain connections and cloud hosting.' 
            },
          ].map((feature, index) => (
            <Col key={index} md={6} lg={4}>
              <div className="feature-card">
                <div className="feature-content">
                  {feature.icon}
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
                <div className="feature-hover-content">
                 
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeaturesSection;
