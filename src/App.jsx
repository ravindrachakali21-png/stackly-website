import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <div className="logo-circle">S</div>
            <h1 className="logo-text">Stackly</h1>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#software-solutions">Software Solutions</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#help">Help</a>
            <button className="get-started">Get Started</button>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <nav>
              <a href="#home" onClick={toggleMenu}>Home</a>
              <a href="#software-solutions" onClick={toggleMenu}>Software Solutions</a>
              <a href="#services" onClick={toggleMenu}>Services</a>
              <a href="#about" onClick={toggleMenu}>About</a>
              <a href="#help" onClick={toggleMenu}>Help</a>
              <button onClick={toggleMenu}>Get Started</button>
            </nav>
            <img
              src="https://www.vecteezy.com/photo/36791263-ai-generated-global-urban-city-light-up-in-the-night-city-animation"
              alt="Mobile Menu Illustration"
            />
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-image">
          <img
            src="https://share.google/images/2dAqAsWQKWWVuVsPT"
            alt="AI Technology Illustration"
          />
        </div>
        <div className="hero-text">
          <h1>Welcome to Stackly</h1>
          <p>
            <b>"Stackly is a forward-thinking technology company dedicated to driving digital transformation."</b>
          </p>
          <p>
            <i>
              We design intelligent, scalable solutions powered by AI and cloud innovation. Our mission is to empower businesses with cutting-edge tools for smarter growth. With a passion for innovation and precision, we turn complex ideas into seamless experiences. At Stackly, technology meets creativity to shape the future of tomorrow.
            </i>
          </p>
          <p><b>💡 “Innovating today to define tomorrow’s digital world.”</b></p>
        </div>
      </section>

      {/* Software Solutions Section with Animation */}
      <section id="software-solutions" className="software-solutions-section">
        <h1 className="section-title">Our Software Solutions</h1>
        <div className="solutions-cards">
          <div className="solution-card fade-in">
            <h2>Custom Enterprise Software</h2>
            <p>Tailored solutions to optimize enterprise processes with scalability and security.</p>
          </div>
          <div className="solution-card fade-in delay-1">
            <h2>Cloud Migration</h2>
            <p>Seamlessly move your infrastructure to the cloud with minimal downtime.</p>
          </div>
          <div className="solution-card fade-in delay-2">
            <h2>AI-Powered Analytics</h2>
            <p>Unlock insights with advanced AI analytics for data-driven decision making.</p>
          </div>
        </div>
      </section>

      {/* Existing Services Cards */}
      <h1 className="section-title">We Are Providing =</h1>
      <section className="service-cards">
        <div className="service-card">
          <h2>0.1 Digital Marketing 🌐</h2>
          <p><i>"Stackly’s digital marketing solutions combine strategy, creativity, and technology to elevate brands.”</i></p>
        </div>
        <div className="service-card">
          <h2>0.2 AI and Automation 🤖</h2>
          <p><i>"We leverage artificial intelligence and automation to streamline operations and boost efficiency.”</i></p>
        </div>
        <div className="service-card">
          <h2>0.3 Web Development 💡</h2>
          <p><i>"We build fast, scalable, and responsive web solutions tailored to your business goals.”</i></p>
        </div>
        <div className="service-card">
          <h2>0.4 Mobile Application Development 📲</h2>
          <p><i>"Delivering intuitive, high-performance mobile apps that connect your brand with users on the go.”</i></p>
        </div>
        <div className="service-card">
          <h2>0.5 Product Branding And Design 🎯</h2>
          <p><i>"We craft impactful brand identities that tell your story through design. Every detail reflects creativity, purpose, and lasting visual appeal.”</i></p>
        </div>
        <div className="service-card">
          <h2>0.6 Online Form Filling 📝</h2>
          <p><i>"Stackly’s digital marketing solutions combine strategy, creativity, and technology to elevate brands.”</i></p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="info-section">
        <h1>Our Services</h1>
        <p>At <b>Stackly</b>, we provide a wide range of digital solutions designed to transform your ideas into high-impact business results.</p>
        <div className="info-cards">
          <div className="info-card">
            <h2>🌐 Web Development</h2>
            <p>We build responsive, secure, and scalable websites customized to your business needs using the latest technologies.</p>
          </div>
          <div className="info-card">
            <h2>🤖 AI & Automation</h2>
            <p>Automate your workflows with intelligent solutions powered by AI and machine learning to save time and increase efficiency.</p>
          </div>
          <div className="info-card">
            <h2>📱 Mobile App Development</h2>
            <p>We design and develop user-friendly mobile apps that deliver seamless performance across Android and iOS devices.</p>
          </div>
          <div className="info-card">
            <h2>🎯 Digital Marketing</h2>
            <p>From SEO to social media campaigns, we help your brand reach the right audience and grow its online presence effectively.</p>
          </div>
          <div className="info-card">
            <h2>🎨 Product Branding & Design</h2>
            <p>Our creative design team helps you build a strong brand identity that stands out with unique visuals and storytelling.</p>
          </div>
          <div className="info-card">
            <h2>🧾 Online Form Filling</h2>
            <p>We simplify your online form-filling processes using digital automation tools to ensure accuracy and speed.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="info-section">
        <h1>About Us</h1>
        <p>At <b>Stackly</b>, we’re passionate about building intelligent, scalable, and modern technology solutions that empower businesses to thrive in the digital age.</p>
        <div className="info-cards">
          <div className="info-card">
            <h2>Who We Are</h2>
            <p>Stackly is a forward-thinking company specializing in digital marketing, web and mobile development, and AI-powered automation.</p>
          </div>
          <div className="info-card">
            <h2>Our Mission</h2>
            <p>Our mission is to create technology that simplifies life and enhances business performance — blending innovation with practicality.</p>
          </div>
          <div className="info-card">
            <h2>Our Vision</h2>
            <p>To be a global leader in digital innovation, transforming ideas into seamless, impactful solutions that shape the future.</p>
          </div>
          <div className="info-card">
            <h2>Our Values</h2>
            <ul>
              <li>Innovation and continuous learning</li>
              <li>Integrity and transparency</li>
              <li>Customer-first approach</li>
              <li>Collaboration and teamwork</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section id="help" className="info-section">
        <h1>Help & Support</h1>
        <p>Welcome to Stackly Help Center! Find answers to common questions and learn how to make the most of our services.</p>
        <div className="info-cards">
          <div className="info-card">
            <h2>Getting Started</h2>
            <p>If you’re new to Stackly, explore our Home and Services sections to learn about digital marketing, AI automation, and more.</p>
          </div>
          <div className="info-card">
            <h2>Frequently Asked Questions</h2>
            <ul>
              <li><b>How do I create an account?</b> — Click “Get Started” and fill in your details.</li>
              <li><b>How can I reset my password?</b> — Use “Forgot Password” on login page.</li>
              <li><b>How do I contact support?</b> — Email <b>support@stackly.com</b>.</li>
            </ul>
          </div>
          <div className="info-card">
            <h2>Contact Us</h2>
            <p>Still need help? Reach us at <b>support@stackly.com</b> or call <b>+91 98765 43210</b>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
