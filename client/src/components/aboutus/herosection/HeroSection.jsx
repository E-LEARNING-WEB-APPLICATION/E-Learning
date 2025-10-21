import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
      <section className="hero-section text-center text-white py-5">
          <div className="container">
              <h1 className="display-4 fw-bold mb-3">
                  Empower Your Learning Journey
              </h1>
              <p className="lead mb-4">
                  We connect passionate learners with world-class instructors
                  worldwide.
              </p>
          </div>
      </section>
  );
}

export default HeroSection