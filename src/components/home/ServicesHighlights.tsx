import { Shield, Users, HeartPulse, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Unsplash photo IDs for each service
const serviceImages = [
  "photo-1518770660439-4636190af475", // Cybersecurity
  "photo-1605810230434-7631ac76ec81", // Staffing Solutions
  "photo-1472396961693-142e6e269027", // Healthcare Services
  "photo-1487058792275-0ad4aaf24ca7", // Software Development
];

const services = [
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Comprehensive security solutions to protect your digital assets from evolving cyber threats with 24/7 monitoring and response.",
    link: "/services#cyber-security",
    img: `https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80`,
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description:
      "Connect with top-tier IT talent through our specialized recruitment and staffing services tailored to your needs.",
    link: "/services#staffing-solutions",
    img: `https://img.freepik.com/free-photo/woman-selecting-pictures-people_1134-466.jpg?t=st=1745307933~exp=1745311533~hmac=569f6dfecb89c75ccf7ca86176358ef4660deb146279b86273ba2b8b2314d63d&w=996`,
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    description:
      "Expert healthcare staffing solutions for medical facilities including ICU, OR, pediatrics, and travel nursing.",
    link: "/services#healthcare-services",
    img: `https://img.freepik.com/free-photo/medicine-uniform-healthcare-medical-workers-day-concept_185193-108329.jpg?t=st=1745308204~exp=1745311804~hmac=89e85fee5870b9d6bf3ed6a0e19b1174774e95877010c2645effcaee81bf3aa7&w=740`,
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions designed and developed to address your unique business challenges and requirements.",
    link: "/services#software-development",
    img: `https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&q=80`,
  },
];

const ServicesHighlights = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-cyber-red mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cyvex Lab delivers cutting-edge cybersecurity solutions, staffing
            services, and technology implementation to secure and advance your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-0 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-border/50"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-44 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="bg-cyber-red/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-5 mt-[-2.5rem] shadow-lg mx-auto">
                  <service.icon className="text-cyber-red h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow text-center">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-cyber-red hover:text-white transition-colors"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlights;
