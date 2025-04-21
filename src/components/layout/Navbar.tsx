
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const servicesDropdown = [
  { name: "Cyber Security", path: "/services#cyber-security" },
  { name: "Staffing Solutions", path: "/services#staffing-solutions" },
  { name: "Healthcare Services", path: "/services#healthcare-services" },
  { name: "Software Development", path: "/services#software-development" },
];

const navLinks = [
  { name: "Home", path: "/" },
  // Services dropdown will be handled separately
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

  useEffect(() => {
    setIsOpen(false); // close nav on route change
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
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Shield size={32} className="text-cyber-red" />
            <span className="text-xl font-bold">Cyvex Lab</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) =>
              link.name === "Home" ? (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ) : null
            )}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors duration-200 flex items-center gap-1"
                >
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-40 bg-background">
                {servicesDropdown.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.path}>{service.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* The rest of the nav links */}
            {navLinks
              .filter((link) => link.name !== "Home")
              .filter((link) => link.name !== "Services")
              .map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
          </div>

          {/* Get Started button */}
          <div className="hidden lg:block">
            <Button variant="default" className="font-medium" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Home link */}
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Services as collapsible dropdown list on mobile */}
            <div className="mb-2">
              <div className="flex items-center px-3 py-2 font-medium">
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
              <div className="ml-6 flex flex-col space-y-1">
                {servicesDropdown.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-2 py-1 rounded-md text-base font-medium hover:bg-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks
              .filter((link) => link.name !== "Home" && link.name !== "Services")
              .map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            <div className="pt-2">
              <Button className="w-full font-medium" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
