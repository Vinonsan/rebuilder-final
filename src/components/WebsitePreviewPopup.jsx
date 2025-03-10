import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap"; // React Bootstrap modal components

const WebsitePreviewPopup = ({ show, handleClose }) => {
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to generate AI website preview (mockup for now)
  const generatePreview = async () => {
    if (!businessName || !industry) return alert("Please enter all fields.");
    setLoading(true);

    // Simulated AI Response (Replace with actual API call)
    setTimeout(() => {
      setPreview({
        title: `Welcome to ${businessName}`,
        tagline: `Your trusted ${industry} partner`,
        image: "https://source.unsplash.com/800x400/?technology,website",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <Modal show={show} onHide={handleClose} centered style={modalStyle}>
      <Modal.Header closeButton style={modalHeaderStyle}>
        <Modal.Title style={modalTitleStyle}>AI-Powered Website Preview</Modal.Title>
      </Modal.Header>

      <Modal.Body style={modalBodyStyle}>
        {!preview ? (
          <>
            <h3 style={sectionTitleStyle}>Create Your Custom Website</h3>
            <p style={sectionSubtitleStyle}>Enter your business details to generate a stunning website preview powered by AI.</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                style={inputStyle}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your industry (e.g., Restaurant, Tech, Finance)"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                style={inputStyle}
              />
            </Form.Group>

            <Button
              variant="primary"
              className="w-100"
              onClick={generatePreview}
              disabled={loading}
              style={buttonStyle}
            >
              {loading ? "Generating..." : "Generate Preview"}
            </Button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="fw-bold" style={previewTitleStyle}>{preview.title}</h2>
            <p className="text-muted" style={previewSubtitleStyle}>{preview.tagline}</p>
            <img
              src={preview.image}
              alt="AI Website Mockup"
              className="img-fluid rounded mt-3"
              style={previewImageStyle}
            />

            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={() => setPreview(null)} style={actionButtonStyle}>
                Generate Again
              </Button>
              <Button variant="success" style={actionButtonStyle}>Customize</Button>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

// New Style: Lighter, cleaner theme with rounded edges and modern look
const modalStyle = {
  backgroundColor: "", // Light background
  color: "rgba(0, 0, 0, 0.1)", // Dark text color for contrast
  borderRadius: "16px", // More rounded corners for modern look
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
  animation: "slideIn 0.5s ease-out", // Sliding effect for modal entrance
};

const modalHeaderStyle = {
  backgroundColor: "#f1f1f1", // Light header
  borderBottom: "1px solid #ddd", // Subtle bottom border
  borderRadius: "16px 16px 0 0",
};

const modalTitleStyle = {
  color: "#333",
  fontWeight: "600",
  fontSize: "26px",
  letterSpacing: "1px", // Slight letter spacing for modern look
};

const modalBodyStyle = {
  backgroundColor: "#fafafa", // Very light background for the body
  padding: "40px",
  borderRadius: "12px",
};

const sectionTitleStyle = {
  fontSize: "24px",
  fontWeight: "500",
  color: "#333",
  marginBottom: "15px",
  textAlign: "center", // Centering the title
};

const sectionSubtitleStyle = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#666",
  marginBottom: "25px",
  textAlign: "center", // Centering the description
};

const inputStyle = {
  backgroundColor: "#f5f5f5", // Light background for input
  color: "#333", // Dark text inside input
  border: "1px solid rgb(10, 73, 42)", // Subtle border color
  borderRadius: "8px",
  marginBottom: "15px",
  padding: "15px",
  transition: "all 0.3s ease", // Smooth transition for input focus
};

const buttonStyle = {
  backgroundColor: "#007bff", // Bright blue button
  borderColor: "#007bff",
  color: "#fff",
  padding: "15px",
  fontSize: "18px",
  borderRadius: "8px",
  marginTop: "25px",
  transition: "all 0.3s ease", // Smooth button hover transition
};

const previewTitleStyle = {
  color: "#333",
  fontWeight: "700",
  fontSize: "26px",
  marginBottom: "10px",
};

const previewSubtitleStyle = {
  color: "#777",
  fontSize: "18px",
  marginBottom: "20px",
};

const previewImageStyle = {
  maxWidth: "100%",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", // Soft shadow around the image
};

const actionButtonStyle = {
  fontSize: "14px",
  fontWeight: "600",
  borderRadius: "8px",
  padding: "12px 25px",
  transition: "all 0.3s ease", // Smooth transition for button hover effect
};

export default WebsitePreviewPopup;
