
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BugTrackerX. All rights reserved.
        </p>
        {/* <div className="mt-4">
          <a
            href="#"
            className="text-tertiary hover:text-secondary mx-2 transition duration-300"
          >
            Privacy Policy
          </a>
          <span className="text-tertiary">|</span>
          <a
            href="#"
            className="text-tertiary hover:text-secondary mx-2 transition duration-300"
          >
            Terms of Service
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
