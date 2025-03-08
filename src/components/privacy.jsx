import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const styles = {
    container: { padding: '30px 15px', backgroundColor: '#121212', color: '#e0e0e0' },
    card: { 
      padding: '40px', 
      borderRadius: '12px', 
      backgroundColor: '#1b1f1d', 
      boxShadow: '0px 4px 12px rgba(0, 255, 127, 0.2)',
      border: '1px solid rgba(0, 255, 127, 0.3)',
    },
    header: { textAlign: 'center', marginBottom: '25px', color: '#00ff7f', fontSize: '2rem', fontWeight: 'bold' },
    mutedText: { color: '#9e9e9e', textAlign: 'center', marginBottom: '20px', fontSize: '1rem' },
    sectionTitle: { marginTop: '25px', fontSize: '1.4rem', fontWeight: '600', color: '#00ff7f' },
    list: { paddingLeft: '20px', lineHeight: '1.6', fontSize: '1rem', color: '#c8e6c9' },
    paragraph: { fontSize: '1rem', color: '#c8e6c9', lineHeight: '1.6' },
    buttonContainer: { textAlign: 'center', marginTop: '30px' },
    button: { 
      padding: '12px 24px', 
      background: 'linear-gradient(135deg, #00ff7f, #008c4a)', 
      color: '#000', 
      textDecoration: 'none', 
      borderRadius: '6px', 
      fontWeight: '500',
      boxShadow: '0 4px 10px rgba(0, 255, 127, 0.4)',
      transition: 'all 0.3s ease',
      display: 'inline-block'
    },
    buttonHover: { background: 'linear-gradient(135deg, #008c4a, #004d2c)', transform: 'translateY(-2px)', boxShadow: '0 6px 15px rgba(0, 255, 127, 0.6)' }
  };

  return (
    <div style={styles.container}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card style={styles.card}>
              <Card.Body>
                <h1 style={styles.header}>Privacy Policy</h1>
                <p style={styles.mutedText}>Effective Date: [Insert Date]</p>

                <h3 style={styles.sectionTitle}>1. Introduction</h3>
                <p style={styles.paragraph}>
                  Welcome to [Your Company Name]. We respect your privacy and are committed to protecting your personal data.
                  This Privacy Policy outlines how we collect, use, and safeguard your information.
                </p>

                <h3 style={styles.sectionTitle}>2. Information We Collect</h3>
                <p style={styles.paragraph}>We may collect the following types of information:</p>
                <ul style={styles.list}>
                  <li>Personal information such as name, email, and phone number.</li>
                  <li>Technical data like IP addresses, browser type, and device information.</li>
                  <li>Usage data, including interactions with our website.</li>
                </ul>

                <h3 style={styles.sectionTitle}>3. How We Use Your Information</h3>
                <p style={styles.paragraph}>We use your information to:</p>
                <ul style={styles.list}>
                  <li>Provide, maintain, and improve our services.</li>
                  <li>Personalize user experience and deliver relevant content.</li>
                  <li>Ensure security and prevent fraudulent activities.</li>
                </ul>

                <h3 style={styles.sectionTitle}>4. Data Sharing and Protection</h3>
                <p style={styles.paragraph}>We do not sell your personal data. We may share data with third parties only when necessary to:</p>
                <ul style={styles.list}>
                  <li>Comply with legal obligations.</li>
                  <li>Enhance security and prevent fraud.</li>
                  <li>Provide essential third-party services.</li>
                </ul>

                <h3 style={styles.sectionTitle}>5. Your Rights</h3>
                <p style={styles.paragraph}>You have the right to:</p>
                <ul style={styles.list}>
                  <li>Access, update, or delete your personal information.</li>
                  <li>Opt out of marketing communications.</li>
                  <li>Request a copy of the data we hold about you.</li>
                </ul>

                <h3 style={styles.sectionTitle}>6. Changes to This Policy</h3>
                <p style={styles.paragraph}>
                  We may update this Privacy Policy periodically. Continued use of our services after any changes indicates acceptance of the updated policy.
                </p>

                <h3 style={styles.sectionTitle}>7. Contact Us</h3>
                <p style={styles.paragraph}>
                  If you have any questions about our Privacy Policy, please contact us at <strong>[Your Contact Email]</strong>.
                </p>

                <div style={styles.buttonContainer}>
                  <Link 
                    to="/" 
                    style={styles.button}
                    onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
                    onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
                  >
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

export default PrivacyPolicy;
