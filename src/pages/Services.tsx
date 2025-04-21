
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Shield, Users, HeartPulse, Code, Database, Brain, Clock, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  useEffect(() => {
    document.title = "Services | Cyvex Lab";
  }, []);

  // Our main service categories
  const serviceCategories = [
    {
      id: "cyber-security",
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security solutions designed to protect your organization's digital assets from evolving cyber threats.",
      image: "/placeholder.svg",
      services: [
        {
          icon: Shield,
          title: "Security Auditing",
          description: "Thorough assessment of your security infrastructure and policies to identify vulnerabilities."
        },
        {
          icon: Clock,
          title: "24/7 Monitoring",
          description: "Continuous monitoring of your systems and networks to detect and respond to threats in real-time."
        },
        {
          icon: Brain,
          title: "Incident Response",
          description: "Rapid and effective response to security incidents to minimize damage and recovery time."
        },
        {
          icon: FileCheck,
          title: "Security Training",
          description: "Training programs to educate your staff about security best practices and threat awareness."
        }
      ]
    },
    {
      id: "staffing-solutions",
      title: "Staffing Services",
      description:
        "Connect with top-tier IT talent through our specialized recruitment and staffing services.",
      image: "/placeholder.svg",
      services: [
        {
          icon: Users,
          title: "Executive Search",
          description: "Find top-level executives with the specific skills and experience your company needs."
        },
        {
          icon: Clock,
          title: "Contract Staffing",
          description: "Flexible staffing solutions for project-based needs and temporary requirements."
        },
        {
          icon: Database,
          title: "Staff Augmentation",
          description: "Seamlessly integrate skilled professionals into your existing teams to enhance capabilities."
        },
        {
          icon: Shield,
          title: "Direct Placement",
          description: "Find permanent employees who match your company culture and technical requirements."
        }
      ]
    },
    {
      id: "healthcare-services",
      title: "Healthcare Staffing",
      description:
        "Specialized staffing solutions for healthcare facilities, ensuring qualified medical professionals for all roles.",
      image: "/placeholder.svg",
      services: [
        {
          icon: HeartPulse,
          title: "ICU Specialists",
          description: "Critical care nurses and specialists with extensive ICU experience."
        },
        {
          icon: HeartPulse,
          title: "OR Staff",
          description: "Operating room nurses, surgical technicians, and perioperative professionals."
        },
        {
          icon: HeartPulse,
          title: "Pediatric Care",
          description: "Specialized nurses and staff for pediatric departments and children's hospitals."
        },
        {
          icon: HeartPulse,
          title: "Travel Nursing",
          description: "Temporary staffing solutions for hospitals with immediate or seasonal staffing needs."
        }
      ]
    },
    {
      id: "software-development",
      title: "Software Development",
      description:
        "Custom software solutions tailored to your specific business requirements and challenges.",
      image: "/placeholder.svg",
      services: [
        {
          icon: Code,
          title: "Custom Software",
          description: "Tailored software applications designed specifically for your business needs."
        },
        {
          icon: Shield,
          title: "Secure Applications",
          description: "Development with security-first approach, ensuring data protection at every level."
        },
        {
          icon: Database,
          title: "Database Solutions",
          description: "Robust database design, migration, and optimization for performance and security."
        },
        {
          icon: Brain,
          title: "AI Integration",
          description: "Incorporating artificial intelligence to enhance your software capabilities."
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cyber-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <div className="w-24 h-1 bg-cyber-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive cybersecurity, staffing, and technology solutions to protect and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <section 
          key={category.id} 
          id={category.id} 
          className={`section-padding ${index % 2 === 1 ? 'bg-secondary/50' : ''}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <div className="w-16 h-1 bg-cyber-red mb-6"></div>
                <p className="text-muted-foreground mb-8">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, i) => (
                    <div key={i} className="flex">
                      <div className="mr-4 mt-1">
                        <div className="p-2 bg-cyber-red/10 rounded-full">
                          <service.icon className="w-5 h-5 text-cyber-red" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button className="bg-cyber-red hover:bg-cyber-red/90 text-white">
                    Learn More
                  </Button>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-cyber-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Customized Solution?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you address your specific security and staffing challenges.
          </p>
          <Button size="lg" className="bg-cyber-red hover:bg-cyber-red/90 text-white">
            Contact Us Today
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
