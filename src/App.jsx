import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main">
      {/* HEADER */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-box">S</div>
            <h1>Stackly</h1>
          </div>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#help">Help</a>
            <button className="get-started">Get Started</button>
          </nav>

          <button className="menu-btn" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#features" onClick={toggleMenu}>Features</a>
            <a href="#pricing" onClick={toggleMenu}>Pricing</a>
            <a href="#about" onClick={toggleMenu}>About</a>
            <button className="get-started" onClick={toggleMenu}>Get Started</button>
            <img
              src="https://www.vecteezy.com/photo/36791263-ai-generated-global-urban-city-light-up-in-the-night-city-animation"
              alt="city"
            />
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-image">
          <img src="./images/10339960.jpg" alt="AI" />
        </div>
        <div className="hero-text">
          <p>
            <b>"Stackly is a forward-thinking technology company dedicated to driving digital transformation."</b>
          </p>
          <p>
            <i>
              We design intelligent, scalable solutions powered by AI and cloud innovation.
              Our mission is to empower businesses with cutting-edge tools for smarter growth.
            </i>
          </p>
          <p className="highlight">
            💡 “Innovating today to define tomorrow’s digital world.”
          </p>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <h1 className="section-title">We Are Providing =&gt;</h1>

      <section className="services-preview">
        {[
          ["0.1 Digital Marketing 🌐", "Stackly’s digital marketing solutions combine strategy, creativity, and technology to elevate brands."],
          ["0.2 AI and Automation 🤖", "We leverage artificial intelligence and automation to streamline operations and boost efficiency."],
          ["0.3 Web Development 💡", "We build fast, scalable, and responsive web solutions tailored to your business goals."],
          ["0.4 Mobile Application Development 📲", "Delivering intuitive, high-performance mobile apps that connect your brand with users on the go."],
          ["0.5 Product Branding And Design 🎯", "We craft impactful brand identities that tell your story through design."],
          ["0.6 Online Form Filling 📝", "Stackly’s form-filling automation ensures accuracy and speed for your workflows."]
        ].map(([title, desc], i) => (
          <div key={i} className="service-box">
            <h2>{title}</h2>
            <p><i>{desc}</i></p>
          </div>
        ))}
      </section>

      {/* FULL SERVICES SECTION */}
      <section id="services" className="full-section">
        <h1>Our Services</h1>
        <p className="center-text">
          At <b>Stackly</b>, we provide digital solutions designed to transform ideas into high-impact business results.
        </p>
        <div className="services-grid">
          {[
            ["🌐 Web Development", "We build responsive, secure, and scalable websites customized to your business needs."],
            ["🤖 AI & Automation", "Automate your workflows with intelligent AI-powered tools."],
            ["📱 Mobile App Development", "User-friendly apps for Android and iOS devices."],
            ["🎯 Digital Marketing", "SEO, social media campaigns, and brand growth strategies."],
            ["🎨 Product Branding & Design", "Strong brand identity with creative visuals."],
            ["🧾 Online Form Filling", "Simplify processes using digital automation."]
          ].map(([title, desc], i) => (
            <div key={i} className="service-card">
              <h2>{title}</h2>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="full-section">
        <h1>About Us</h1>
        <p className="center-text">
          At <b>Stackly</b>, we’re passionate about building intelligent, scalable technology solutions that empower businesses.
        </p>

        <div className="about-box">
          <div>
            <h2>Who We Are</h2>
            <p>Stackly specializes in digital marketing, web/mobile development, and AI automation to help businesses grow.</p>
          </div>

          <div>
            <h2>Our Mission</h2>
            <p>To simplify life and enhance business performance — blending innovation with practicality.</p>
          </div>

          <div>
            <h2>Our Vision</h2>
            <p>To be a global leader in digital innovation, transforming ideas into impactful solutions.</p>
          </div>

          <div>
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

      {/* HELP SECTION */}
      <section id="help" className="full-section">
        <h1>Help & Support</h1>
        <p className="center-text">
          Welcome to Stackly Help Center! Find answers and learn how to make the most of our services.
        </p>

        <div className="about-box">
          <div>
            <h2>Getting Started</h2>
            <p>Explore our Home and Services sections to learn about AI automation, marketing, and more.</p>
          </div>

          <div>
            <h2>Frequently Asked Questions</h2>
            <ul>
              <li><b>How do I create an account?</b> — Click “Get Started” and fill in your details.</li>
              <li><b>How can I reset my password?</b> — Use the “Forgot Password” option.</li>
              <li><b>How do I contact support?</b> — Email <b>support@stackly.com</b>.</li>
            </ul>
          </div>

          <div>
            <h2>Contact Us</h2>
            <p>Reach us at <b>support@stackly.com</b> or call <b>+91 98765 43210</b>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
