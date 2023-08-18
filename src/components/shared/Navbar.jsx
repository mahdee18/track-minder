import { useContext, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/styles/logo.png';
// import { AuthContext } from '../../Providers/AuthProvider';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { user, logOut } = useContext(AuthContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {

  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  return (
    <header className="bg-primary py-4 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <h1 className="text-white text-2xl md:text-3xl font-semibold">Bug TrackerX</h1>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <Link to='/' className="text-white hover:text-black">Home</Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-black">Features</Link>
            </li>
            <li>
              <Link to="/pricing" className="text-white hover:text-black">Pricing</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-black">About Us</Link>
            </li>
            <li>
              <Link to='/contact' className="text-white hover:text-black">Contact</Link>
            </li>
            <li>
              <a href="#" className="bg-white text-primary hover:bg-dark hover:text-white px-3 py-2 rounded transition duration-300">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
