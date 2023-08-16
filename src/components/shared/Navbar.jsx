import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/styles/logo.png';
import { logOutUser, selectUser } from '../../features/user/userSlice';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    dispatch(logOutUser());
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
              <Link to='features' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</Link>
              <Link to='/pricing' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
              <Link to='/contact' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              {user ? (
                <div className='flex items-center'>
                  <div className="flex mt-2 items-center justify-center gap-6">
                    <img
                      title={user.displayName}
                      className="w-12 h-12 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                    <button
                      onClick={handleLogOut}
                      className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button className="btn border-0 bg-success fw-bold rounded-md flex items-center gap-1">
                  <Link className='text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' to='/login'>Login</Link>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="ml-4 flex flex-col items-center">
            <Link to='/' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to='features' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</Link>
            <Link to='/pricing' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
            <Link to='/contact' className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            {user ? (
              <div className='flex items-center'>
                <div className="flex mt-2 items-center justify-center gap-6">
                  <img
                    title={user.displayName}
                    className="w-12 h-12 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                  <button
                    onClick={handleLogOut}
                    className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button className="btn border-0 bg-success fw-bold rounded-md flex items-center gap-1">
                <Link className='text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' to='/login'>Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
