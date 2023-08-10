import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-primary text-light py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Welcome to Bug TrackerX</h2>
        <p className="text-lg md:text-xl text-tertiary mb-8">
          Your all-in-one solution for efficient bug tracking and project management.
        </p>
        <a
          href="#"
          className="bg-secondary text-tertiary hover:bg-dark py-2 px-6 rounded-full transition duration-300 inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
