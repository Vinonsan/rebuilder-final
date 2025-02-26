import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './style/pricingplan.css';

const PricingSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleShowModal = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  const plans = [
    { 
      title: 'Starter Plan', 
      price: '0',
      period: 'per month',
      features: [
        'Basic AI templates',
        'Limited hosting (500MB)',
        'Community support',
        'Basic analytics',
        'Standard security',
      ],
      buttonText: 'Choose Now!',
      popular: false
    },
    { 
      title: 'Standard Plan', 
      price: '19.99',
      period: 'per month',
      features: [
        'Advanced AI customization',
        'Premium hosting (5GB)',
        'Priority support',
        'Advanced analytics',
        'Enhanced security',
      ],
      buttonText: 'Choose Now!',
      popular: true
    },
    { 
      title: 'Ultimate Plan', 
      price: '49.99',
      period: 'per month',
      features: [
        'Full AI capabilities',
        'Enterprise hosting (50GB)',
        '24/7 Priority Support',
        'Custom analytics',
        'Advanced security + WAF',
      ],
      buttonText: 'Choose Now!',
      popular: false
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">Explore Our Plans!</h2>
          <div className="animated-underline"></div>
          <p className="section-description">
            Select the best package for your needs and start building your website right now!
          </p>
        </div>
        <Row className="justify-content-center g-4">
          {plans.map((plan, index) => (
            <Col key={index} lg={4} md={6}>
              <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} 
                   data-aos="fade-up" 
                   data-aos-delay={index * 100}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3 className="pricing-title">{plan.title}</h3>
                  <div className="pricing-price">
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>
                <div className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="feature-item">
                      <FaCheck className="pricing-feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="pricing-button" onClick={() => handleShowModal(plan)}>
                  {plan.buttonText}
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal Popup */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className="custom-modal-body1">
          <button className="close-button" onClick={handleCloseModal}>
            <FaTimes />
          </button>
          
          {/* Subscription Form */}
          <div className="subscription-form">
            <h4>Subscribe Now</h4>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Credit Card Details" required />
            <button className="subscribe-button">Confirm Subscription</button>
          </div>
        </Modal.Body>
      </Modal>

    </section>
  );
};

export default PricingSection;
