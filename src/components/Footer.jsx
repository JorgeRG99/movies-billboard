import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Our Movie Platform</h3>
          <p className="text-sm">
            Your ultimate destination for cinematic experiences.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link className="text-sm hover:text-gray-300" href="#">
            About Us
          </Link>
          <Link className="text-sm hover:text-gray-300" href="#">
            Contact
          </Link>
          <Link className="text-sm hover:text-gray-300" href="#">
            Privacy Policy
          </Link>
          <Link className="text-sm hover:text-gray-300" href="#">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
