
import { Shield, Users, HeartPulse, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Comprehensive security solutions to protect your digital assets from evolving cyber threats with 24/7 monitoring and response.",
    link: "/services#cyber-security",
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description:
      "Connect with top-tier IT talent through our specialized recruitment and staffing services tailored to your needs.",
    link: "/services#staffing-solutions",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    description:
      "Expert healthcare staffing solutions for medical facilities including ICU, OR, pediatrics, and travel nursing.",
    link: "/services#healthcare-services",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions designed and developed to address your unique business challenges and requirements.",
    link: "/services#software-development",
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
            Cyvex Lab delivers cutting-edge cybersecurity solutions, staffing services, and technology implementation to secure and advance your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-border/50"
            >
              <div className="bg-cyber-red/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-5">
                <service.icon className="text-cyber-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              <Link to={service.link}>
                <Button variant="outline" className="w-full hover:bg-cyber-red hover:text-white transition-colors">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlights;
