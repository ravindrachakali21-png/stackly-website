import React from "react";
import "../App.css";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h1 className="section-title">We Are Providing</h1>

      <div className="service-row">
        <div className="service-box">
          <h2>0.1 Digital Marketing</h2>
          <p>Stackly’s digital marketing solutions combine strategy, creativity, and technology to elevate brands.</p>
        </div>

        <div className="service-box">
          <h2>0.2 AI and Automation</h2>
          <p>We leverage artificial intelligence and automation to streamline operations and boost efficiency.</p>
        </div>

        <div className="service-box">
          <h2>0.3 Web Development</h2>
          <p>We build fast, scalable, and responsive web solutions tailored to your business goals.</p>
        </div>
      </div>

      <div className="service-row">
        <div className="service-box">
          <h2>0.4 Mobile Application Development</h2>
          <p>Delivering intuitive, high-performance mobile apps that connect your brand with users on the go.</p>
        </div>

        <div className="service-box">
          <h2>0.5 Product Branding And Design</h2>
          <p>We craft impactful brand identities that tell your story through design with creativity and purpose.</p>
        </div>

        <div className="service-box">
          <h2>0.6 Online Form Filling</h2>
          <p>Stackly’s digital marketing solutions combine strategy, creativity, and technology to elevate brands.</p>
        </div>
      </div>
    </section>
  );
}
