import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-gray-900 hidden sm:inline">Portfolio</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-black font-medium transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-black font-medium transition-colors">
              Projects
            </Link>
            <Link to="/skills" className="text-gray-700 hover:text-black font-medium transition-colors">
              Skills
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-black font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Resume Button */}
          <a
            href="#resume"
            className="px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
