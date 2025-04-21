
import { Server, Building, Briefcase, Hospital, ShieldCheck, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    title: "Government & Defense",
    description: "Securing critical infrastructure and classified information systems with advanced cybersecurity solutions tailored for government agencies and defense contractors.",
    image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=700&q=80"
  },
  {
    icon: <Hospital className="h-10 w-10 text-cyber-red" />,
    title: "Healthcare",
    description: "Specialized staffing and security solutions for healthcare organizations, protecting patient data while ensuring compliance with industry regulations.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80"
  },
  {
    icon: <Server className="h-10 w-10 text-cyber-red" />,
    title: "Financial Services",
    description: "Custom security frameworks and talent solutions for financial institutions to safeguard sensitive transactions and customer financial data.",
    image: "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?w=700&q=80"
  },
  {
    icon: <Building className="h-10 w-10 text-cyber-red" />,
    title: "Enterprise",
    description: "Enterprise-grade cybersecurity and IT staffing solutions that scale with your business needs and protect corporate assets.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&q=80"
  },
  {
    icon: <Globe className="h-10 w-10 text-cyber-red" />,
    title: "Technology",
    description: "Next-generation security protocols and top technical talent for technology companies developing cutting-edge products and services.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80"
  },
  {
    icon: <Briefcase className="h-10 w-10 text-cyber-red" />,
    title: "Small Business",
    description: "Right-sized security solutions and flexible staffing options designed specifically for small to medium businesses with budget constraints.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80"
  }
];

const Industries = () => {
  return (
    <div className="section-padding min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cyvex Lab delivers specialized cybersecurity and staffing solutions across diverse industries,
            with expertise tailored to each sector's unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {industry.icon}
                  {industry.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">
                  {industry.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
