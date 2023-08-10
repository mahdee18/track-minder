import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-primary py-4 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <h1 className="text-white text-2xl md:text-3xl font-semibold">Bug TrackerX</h1>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <a href="#" className="text-primary hover:text-secondary">Home</a>
            </li>
            <li>
              <a href="#" className="text-primary hover:text-secondary">Features</a>
            </li>
            <li>
              <a href="#" className="text-primary hover:text-secondary">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-primary hover:text-secondary">Contact</a>
            </li>
            <li>
              <a href="#" className="bg-secondary text-tertiary hover:bg-dark px-3 md:px-4 py-2 rounded-full transition duration-300">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
