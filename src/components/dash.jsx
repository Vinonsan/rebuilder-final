import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaServer, 
  FaChartLine, 
  FaSearch, 
  FaRobot, 
  FaShieldAlt, 
  FaBell,
  FaSpinner,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowLeft,
  FaHome,
  FaChartBar,
  FaHeartbeat,
  FaCog,
  FaDatabase
} from 'react-icons/fa';
import './style/dash.css';

const Dashboard = () => {
  const [websiteStatus] = useState({
    uptime: "99.9%",
    responseTime: "0.8s",
    visitors: "1,234",
    bounceRate: "32%",
    threats: "0",
    alerts: "2"
  });

  const features = [
    {
      icon: <FaServer className="feature-icon" />,
      title: "Live Website Status",
      description: "Monitor uptime, speed & performance",
      status: websiteStatus.uptime,
      statusColor: "success"
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Traffic & Engagement",
      description: "Track visitors, bounce rates & interactions",
      status: websiteStatus.visitors,
      statusColor: "primary"
    },
    {
      icon: <FaSearch className="feature-icon" />,
      title: "SEO & Content Insights",
      description: "AI-driven optimization suggestions",
      status: "Optimized",
      statusColor: "info"
    },
    {
      icon: <FaRobot className="feature-icon" />,
      title: "Chatbot & User Queries",
      description: "Analyze and enhance engagement",
      status: "Active",
      statusColor: "success"
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Security & Hosting Health",
      description: "Detect threats & server performance",
      status: "Protected",
      statusColor: "success"
    },
    {
      icon: <FaBell className="feature-icon" />,
      title: "Instant Alerts & Reports",
      description: "Stay updated with AI-powered insights",
      status: `${websiteStatus.alerts} Alerts`,
      statusColor: "warning"
    }
  ];

  return (
    <div className="dashboard-container">
      <Link to="/" className="back-home-btn">
        <FaArrowLeft className="back-icon" />
        <FaHome className="home-icon" />
        <span>Back to Home</span>
      </Link>

      <div className="dashboard-header animated-border">
        <div className="header-icon-wrapper">
          <FaDatabase className="animated-icon" />
        </div>
        <h1>AI Website Monitoring Dashboard</h1>
        <p>Real-time monitoring and analytics for your website</p>
      </div>

      <Container fluid>
        <Row className="status-bar mb-4 animated-border">
          <div className="section-icon-wrapper">
            <FaHeartbeat className="animated-icon pulse" />
          </div>
          <Col>
            <div className="status-item">
              <FaCheckCircle className="status-icon success" />
              <span>Uptime: {websiteStatus.uptime}</span>
            </div>
          </Col>
          <Col>
            <div className="status-item">
              <FaSpinner className="status-icon spinning" />
              <span>Response: {websiteStatus.responseTime}</span>
            </div>
          </Col>
          <Col>
            <div className="status-item">
              <FaExclamationTriangle className="status-icon warning" />
              <span>{websiteStatus.alerts} Active Alerts</span>
            </div>
          </Col>
        </Row>

        <div className="features-section animated-border">
          <div className="section-icon-wrapper">
            <FaChartBar className="animated-icon" />
          </div>
          <Row>
            {features.map((feature, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <Card className="dashboard-card">
                  <Card.Body>
                    <div className="card-icon-wrapper">
                      {feature.icon}
                    </div>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                    <div className={`status-badge ${feature.statusColor}`}>
                      {feature.status}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard; 