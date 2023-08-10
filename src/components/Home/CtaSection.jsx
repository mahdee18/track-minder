import React from 'react';

const CtaSection = () => {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-tertiary mb-4">Ready to Get Started?</h2>
        <p className="text-lg md:text-xl text-light mb-8">
          Join Bug TrackerX today and experience hassle-free bug tracking and project management.
        </p>
        <a
          href="#"
          className="bg-secondary text-tertiary hover:bg-light py-2 px-6 rounded-full transition duration-300 inline-block"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
