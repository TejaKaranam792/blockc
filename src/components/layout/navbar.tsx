import { Bitcoin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply dark mode globally
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Always use dark mode
    document.body.classList.add("bg-black", "text-white");
  }, []);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Bitcoin className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold text-white">BlockchainClub</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center space-x-6">
            <Link to="/about" className="text-lg font-medium text-gray-300 transition-colors hover:text-blue-400 hover:underline">About</Link>
            <Link to="/events" className="text-lg font-medium text-gray-300 transition-colors hover:text-purple-400 hover:underline">Events</Link>
            <Link to="/resources" className="text-lg font-medium text-gray-300 transition-colors hover:text-green-400 hover:underline">Resources</Link>
            <Link to="/projects" className="text-lg font-medium text-gray-300 transition-colors hover:text-red-400 hover:underline">Projects</Link>
            <Link to="/careers" className="text-lg font-medium text-gray-300 transition-colors hover:text-orange-400 hover:underline">Careers</Link>
            <Link to="/contact" className="text-lg font-medium text-gray-300 transition-colors hover:text-cyan-400 hover:underline">Contact</Link>

            {/* Join Now Button */}
            <a href="https://chat.whatsapp.com/Gu3mNGFNeS6FL30eeDmccf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition">
                Join Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <Button
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md text-white hover:bg-gray-800 transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black transition-colors">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-blue-400 hover:underline">About</Link>
            <Link to="/events" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-purple-400 hover:underline">Events</Link>
            <Link to="/resources" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-green-400 hover:underline">Resources</Link>
            <Link to="/projects" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-red-400 hover:underline">Projects</Link>
            <Link to="/careers" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-orange-400 hover:underline">Careers</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-cyan-400 hover:underline">Contact</Link>

            {/* Join Now Button */}
            <div className="px-3 py-2">
              <a href="https://chat.whatsapp.com/Gu3mNGFNeS6FL30eeDmccf" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition">
                  Join Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
