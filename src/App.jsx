import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarComponent from './components/navbarcomponents';
import HeroSection from './components/herosection';
import FeaturesSection from './components/featuressection';
import HowItWorksSection from './components/howItworkssection';
import TechStackSection from './components/techstacksection';
import IntegrationsSection from './components/integrationssection';
import PricingSection from './components/pricingsection';
import TestimonialsSection from './components/testimonialssection';
import FooterSection from './components/footersection';
import Dashboard from './components/dash'; // Import Dashboard Component
import PrivacyPolicy from './components/privacy';
import TermsAndConditions from './components/terms';
import CookieConsent from 'react-cookie-consent';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showCookiesPopup, setShowCookiesPopup] = useState(
    !document.cookie.includes('cookiesAccepted')
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const acceptCookies = () => {
    document.cookie = "cookiesAccepted=true; path=/; max-age=" + 365 * 24 * 60 * 60;
    setShowCookiesPopup(false);
  };

  const declineCookies = () => {
    document.cookie = "cookiesAccepted=false; path=/; max-age=" + 365 * 24 * 60 * 60;
    setShowCookiesPopup(false);
  };

  return (
    <Router>
      {/* Cookie Consent Popup */}
      {showCookiesPopup && (
        <CookieConsent
          location="bottom"
          buttonText=""
          cookieName="cookiesAccepted"
          style={{
            background: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
          containerStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
          expires={365}
        >
          {/* Cookie Content Box */}
          <div
            style={{
              background: "#222",
              color: "#fff",
              maxWidth: "400px",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <strong>🍪 We Use Cookies</strong>
            <p style={{ fontSize: "13px", margin: "10px 0" }}>
              We use cookies to enhance your experience, analyze traffic, and serve personalized content.
              Read our{" "}
              <a href="/cookie-policy" style={{ color: "#5DD62C", textDecoration: "underline" }}>
                Cookie Policy
              </a>{" "}
              for details.
            </p>

            {/* Buttons Box */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
              {/* Accept Button */}
              <div
                style={{
                  background: "#337418",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: "14px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "background 0.3s ease",
                }}
                onClick={acceptCookies}
              >
                Accept
              </div>

              {/* Decline Button */}
              <div
                style={{
                  background: "#337418",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: "14px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "background 0.3s ease",
                }}
                onClick={declineCookies}
              >
                Decline
              </div>
            </div>
          </div>
        </CookieConsent>
      )}

      <Routes>
        {/* Main Website Pages */}
        <Route
          path="/"
          element={
            <>
              <NavbarComponent scrolled={scrolled} />
              <HeroSection />
              <FeaturesSection />
              <HowItWorksSection />
              <TechStackSection />
              <IntegrationsSection />
              <PricingSection />
              <TestimonialsSection />
              <FooterSection />
            </>
          }
        />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
