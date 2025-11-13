import React from "react";
import "../App.css";
import aiImage from "../images/10339960.jpg"; // add your image in src/images/

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img src={aiImage} alt="AI Technology" />
      </div>

      <div className="about-text">
        <p><b>"Stackly is a forward-thinking technology company dedicated to driving digital transformation."</b></p>
        <p>
          We design intelligent, scalable solutions powered by AI and cloud innovation.
          Our mission is to empower businesses with cutting-edge tools for smarter growth.
          With a passion for innovation and precision, we turn complex ideas into seamless experiences.
          At Stackly, technology meets creativity to shape the future of tomorrow.
        </p>
        <p className="quote">💡 <b>“Innovating today to define tomorrow’s digital world.”</b></p>
      </div>
    </section>
  );
}
