import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/styles/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className='h-12 w-14 rounded-3xl' src={logo} alt="" />
            </div>
            <div className="ml-3">
              <span className="text-white font-bold text-lg">Bug TrackerX</span>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <FaBars></FaBars>
            </button>
          </div>
          <div className={`hidden md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="ml-4 flex items-center">
              <Link to='/' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to='instructors' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</Link>
              <Link to='/classes' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
              <Link to='/classes' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <Link to='/classes' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
            </div>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="ml-4 flex flex-col items-center">
            <Link to='/' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to='instructors' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</Link>
            <Link to='/classes' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
            <Link to='/classes' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <Link to='/classes' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
