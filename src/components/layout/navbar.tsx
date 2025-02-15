import { Bitcoin, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme when component mounts
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900", "text-white"); // Set background and text color
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-900", "text-white");
      document.body.classList.add("bg-white", "text-gray-900");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Bitcoin className="h-8 w-8 text-blue-600 dark:text-yellow-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">BlockchainClub</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center space-x-8">
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
            <Link to="/events" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Events</Link>
            <Link to="/resources" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Resources</Link>
            <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</Link>
            <Link to="/careers" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Careers</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link>

            {/* Join Now button */}
            <a href="https://chat.whatsapp.com/Gu3mNGFNeS6FL30eeDmccf" target="_blank" rel="noopener noreferrer">
              <Button>Join Now</Button>
            </a>

            {/* Dark Mode Toggle */}
            <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-700" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 transition-colors">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">About</Link>
            <Link to="/events" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Events</Link>
            <Link to="/resources" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Resources</Link>
            <Link to="/projects" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Projects</Link>
            <Link to="/careers" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Careers</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Contact</Link>

            {/* Join Now Button */}
            <div className="px-3 py-2">
              <a href="https://chat.whatsapp.com/Gu3mNGFNeS6FL30eeDmccf" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Join Now</Button>
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <div className="px-3 py-2">
              <Button variant="ghost" className="w-full flex items-center justify-center" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-700" />}
                <span className="ml-2">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
