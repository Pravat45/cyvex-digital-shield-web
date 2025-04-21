
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { CheckCircle, Users, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Cyvex Lab";
  }, []);

  const coreValues = [
    {
      icon: CheckCircle,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from security solutions to client service."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our business dealings."
    },
    {
      icon: ShieldCheck,
      title: "Partnership",
      description: "We work closely with our clients to develop solutions that truly meet their needs."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We continually explore new technologies and approaches to stay ahead of emerging threats."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cyber-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Cyvex Lab</h1>
            <div className="w-24 h-1 bg-cyber-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Your trusted partner in cybersecurity solutions and professional staffing
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="w-16 h-1 bg-cyber-red mb-6"></div>
              <p className="text-muted-foreground mb-6">
                Cyvex Lab was founded with a mission to provide cutting-edge cybersecurity solutions and professional staffing services to organizations facing evolving digital challenges.
              </p>
              <p className="text-muted-foreground mb-6">
                Our founders, who have extensive background in both cybersecurity and healthcare industries, recognized the need for a specialized service provider that could address the unique security and staffing requirements of modern businesses.
              </p>
              <p className="text-muted-foreground">
                Today, Cyvex Lab has grown into a trusted partner for organizations across multiple sectors, helping them navigate the complex landscape of digital security while providing top talent to meet their staffing needs.
              </p>
            </div>
            <div className="lg:order-first">
              <img
                src="/placeholder.svg"
                alt="Cyvex Lab Team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-cyber-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-4">
              To empower organizations with robust security solutions and exceptional talent, enabling them to thrive in an increasingly digital world.
            </p>
            <p className="text-gray-300">
              We are committed to excellence, integrity, and innovation in all our services, fostering long-term partnerships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-cyber-red mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Cyvex Lab, our values guide everything we do. They shape our culture, inform our decisions, and define our approach to serving our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-background p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-border/50 text-center"
              >
                <div className="inline-flex items-center justify-center bg-cyber-red/10 p-3 rounded-full mb-6">
                  <value.icon className="text-cyber-red h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Cyvex Lab can help secure your digital assets and connect you with the talent you need.
          </p>
          <Button className="bg-cyber-red hover:bg-cyber-red/90 text-white">
            Contact Us Today
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
