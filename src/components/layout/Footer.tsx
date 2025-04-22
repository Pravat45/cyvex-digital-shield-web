import { Link } from "react-router-dom";
import {
  Shield,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-cyber-darkGray text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col items-center space-y-4 text-center max-w-md mx-auto">
            {/* Logo */}
            <Link to="/" className="pt-2">
              <img
                src={logo}
                alt="Cyvex Lab Logo"
                className="h-32 md:h-40 lg:h-44 w-auto"
              />
            </Link>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of cybersecurity solutions, healthcare and IT
              staffing, and enterprise security technology implementation.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-cyber-red"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-cyber-red"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-cyber-red"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-cyber-red"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyber-red"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Blog", path: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center"
                  >
                    <span className="mr-2">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyber-red"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center"
                >
                  <span className="mr-2">›</span> Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center"
                >
                  <span className="mr-2">›</span> Healthcare Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center"
                >
                  <span className="mr-2">›</span> IT Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center"
                >
                  <span className="mr-2">›</span> Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyber-red"></span>
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your Email"
                className="rounded-r-none bg-gray-700 border-gray-600 text-gray-300"
              />
              <Button className="rounded-l-none px-3">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Cyvex Lab. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-sm text-gray-400 hover:text-gray-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-400 hover:text-gray-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
