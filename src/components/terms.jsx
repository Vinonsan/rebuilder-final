import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  return (
    <div style={{ padding: '30px 15px', backgroundColor: '#121212', color: '#e0e0e0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card style={{
              padding: '40px',
              borderRadius: '12px',
              backgroundColor: '#1b1f1d',
              boxShadow: '0px 4px 12px rgba(0, 255, 127, 0.2)',
              border: '1px solid rgba(0, 255, 127, 0.3)',
            }}>
              <Card.Body>
                <h1 style={{ textAlign: 'center', marginBottom: '25px', color: '#00ff7f', fontSize: '2rem', fontWeight: 'bold' }}>Terms and Conditions</h1>
                <p style={{ color: '#9e9e9e', textAlign: 'center', marginBottom: '20px', fontSize: '1rem' }}>Effective Date: [Insert Date]</p>

                <h3 style={{ marginTop: '25px', fontSize: '1.4rem', fontWeight: '600', color: '#00ff7f' }}>1. Introduction</h3>
                <p style={{ fontSize: '1rem', color: '#c8e6c9', lineHeight: '1.6' }}>
                  Welcome to [Your Company Name]. By using our services, you agree to comply with and be bound by the following terms and conditions.
                </p>

                <h3 style={{ marginTop: '25px', fontSize: '1.4rem', fontWeight: '600', color: '#00ff7f' }}>2. Use of Services</h3>
                <ul style={{ paddingLeft: '20px', color: '#c8e6c9' }}>
                  <li>Use the website only for lawful purposes.</li>
                  <li>Not engage in fraudulent or harmful activities.</li>
                  <li>Respect intellectual property rights and copyrights.</li>
                </ul>

                <h3 style={{ marginTop: '25px', fontSize: '1.4rem', fontWeight: '600', color: '#00ff7f' }}>3. Account Responsibilities</h3>
                <ul style={{ paddingLeft: '20px', color: '#c8e6c9' }}>
                  <li>Maintain confidentiality of your credentials.</li>
                  <li>Ensure the security of your account.</li>
                  <li>Notify us of any unauthorized access.</li>
                </ul>

                <h3 style={{ marginTop: '25px', fontSize: '1.4rem', fontWeight: '600', color: '#00ff7f' }}>4. Limitations of Liability</h3>
                <ul style={{ paddingLeft: '20px', color: '#c8e6c9' }}>
                  <li>Any indirect, incidental, or consequential damages.</li>
                  <li>Service interruptions or losses beyond our control.</li>
                  <li>User-generated content or third-party links.</li>
                </ul>

                <h3 style={{ marginTop: '25px', fontSize: '1.4rem', fontWeight: '600', color: '#00ff7f' }}>5. Modifications to Terms</h3>
                <p style={{ fontSize: '1rem', color: '#c8e6c9', lineHeight: '1.6' }}>
                  We reserve the right to update these terms at any time. Continued use of our services after changes indicates your acceptance of the new terms.
                </p>

                <h3 style={{ marginTop: '25px', fontSize: '1.4rem', fontWeight: '600', color: '#00ff7f' }}>6. Governing Law</h3>
                <p style={{ fontSize: '1rem', color: '#c8e6c9', lineHeight: '1.6' }}>
                  These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Location].
                </p>

                <h3 style={{ marginTop: '25px', fontSize: '1.4rem', fontWeight: '600', color: '#00ff7f' }}>7. Contact Us</h3>
                <p style={{ fontSize: '1rem', color: '#c8e6c9', lineHeight: '1.6' }}>
                  If you have any questions about our Terms and Conditions, please contact us at <strong>[Your Contact Email]</strong>.
                </p>

                <div style={{ textAlign: 'center', marginTop: '30px' }} ref={bottomRef}>
                  <Link to="/" style={{
                    padding: '12px 24px',
                    background: 'linear-gradient(135deg, #00ff7f, #008c4a)',
                    color: '#000',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: '500',
                    boxShadow: '0 4px 10px rgba(0, 255, 127, 0.4)',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}>
                    Back to Home
                  </Link>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
