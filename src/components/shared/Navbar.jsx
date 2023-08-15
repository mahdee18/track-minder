

const Navbar = () => {
  return (
    <header className="bg-primary py-4 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <h1 className="text-white text-2xl md:text-3xl font-semibold">Bug TrackerX</h1>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <a href="#" className="text-white hover:text-black">Home</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">Features</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">Contact</a>
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
