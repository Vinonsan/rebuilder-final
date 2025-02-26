// HeroSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style/herosection.css'
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="bubbles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      <Container>
        <Row className="align-items-center justify-content-center text-center min-vh-100">
          <Col lg={8} data-aos="fade-up">
            <h1 className="display-4 fw-bold mb-4 mt-5 text-white hero-title">Build Stunning Websites Smarter And Faster with AI-Automation</h1>
            <p className="lead mb-4 text-white hero-subtitle">Use AI to create polished, responsive websites in a matter of minutes without any code required.            </p>
            <Button size="lg" className="btn-primary pulse-animation">Build Websites Now For Free!
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default HeroSection;
