// FooterSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaMapMarker, FaEnvelope, FaPhone, FaClock, FaShieldAlt, FaAward } from 'react-icons/fa';
import './style/footer.css'
const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="footer-info">
                <h3 className="footer-brand">AI Website Builder</h3>
                <p className="footer-description">
                Revolutionizing website creation with AI-powered automation. Build stunning, professional websites in minutes without coding knowledge.

                </p>
                <div className="social-links">
                  <a href="#" className="social-link"><FaTwitter /></a>
                  <a href="#" className="social-link"><FaLinkedin /></a>
                  <a href="#" className="social-link"><FaGithub /></a>
                  <a href="#" className="social-link"><FaInstagram /></a>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} className="mb-4">
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#how-it-works">How It Works</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#tech-stack">Tech Stack</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <div className="contact-info">
                  <p><FaMapMarker className="contact-icon" /> 123 Innovation Street, Tech City</p>
                  <p><FaEnvelope className="contact-icon" /> support@aiwebbuilder.com</p>
                  <p><FaPhone className="contact-icon" /> +1 (555) 123-4567</p>
                  <p><FaClock className="contact-icon" /> Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <div className="footer-newsletter">
                <h4>Stay Updated</h4>
                <p>Subscribe to our newsletter for the latest updates and AI innovations.</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email" />
                  <button className="subscribe-btn">Subscribe</button>
                </div>
              
                <div className="footer-badges">
                  <span className="badge">
                    <FaShieldAlt /> Secure Platform
                  </span>
                  <span className="badge">
                    <FaAward /> Award Winning
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="copyright">
                © {new Date().getFullYear()} AI Website Builder. All rights reserved.
              </p>
            </Col>
            <Col md={6}>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterSection;
