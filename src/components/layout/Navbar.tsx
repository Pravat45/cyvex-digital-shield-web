import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import logo from "../../assets/Logo.png";

const servicesDropdown = [
  { name: "Cyber Security", path: "/services#cyber-security" },
  { name: "Staffing Solutions", path: "/services#staffing-solutions" },
  { name: "Healthcare Services", path: "/services#healthcare-services" },
  { name: "Software Development", path: "/services#software-development" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Technologies", path: "/technologies" },
  { name: "Our Work", path: "/our-work" },
  { name: "About Us", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const textColor = isScrolled ? "text-black" : "text-white";
  const iconColor = isScrolled ? "text-black" : "text-white";

  useEffect(() => {
    setIsOpen(false); // Close nav on route change
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className={`flex items-center space-x-6 ${textColor}`}>
            <img
              src={logo}
              alt="Cyvex Lab Logo"
              className="h-48 md:h-56 lg:h-64 w-auto pt-4"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) =>
              link.name === "Home" ? (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium ${textColor} hover:bg-black hover:text-white rounded-md transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              ) : null
            )}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-3 py-2 text-sm font-medium ${textColor} hover:bg-black hover:text-white transition-colors duration-200 flex items-center gap-1`}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 ${iconColor}`} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-40 bg-white shadow-md">
                {servicesDropdown.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link
                      to={service.path}
                      className="w-full block text-black font-medium hover:bg-black/10 px-3 py-2 rounded"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Links */}
            {navLinks
              .filter(
                (link) => link.name !== "Home" && link.name !== "Services"
              )
              .map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium ${textColor} hover:bg-black hover:text-white rounded-md transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden lg:block">
            <Button variant="default" className="font-medium" asChild>
              <Link to="/contact" className={"text-white"}>
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} hover:bg-black hover:text-white`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-black hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Services Dropdown (Mobile) */}
            <div className="mb-2">
              <div className="flex items-center px-3 py-2 font-medium text-black">
                Services
                <ChevronDown className="h-4 w-4 ml-1 text-black" />
              </div>
              <div className="ml-6 flex flex-col space-y-1">
                {servicesDropdown.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-2 py-1 rounded-md text-base font-medium text-black hover:bg-black hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks
              .filter(
                (link) => link.name !== "Home" && link.name !== "Services"
              )
              .map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-black hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

            <div className="pt-2">
              <Button className="w-full font-medium" asChild>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-black"
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
