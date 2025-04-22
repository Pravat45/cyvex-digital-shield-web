import { Shield, Cpu, Cloud, Code, Lock, Database } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const technologies = [
  {
    icon: <Shield className="h-10 w-10 text-cyber-red" />,
    title: "Network Security",
    description:
      "Advanced firewall configurations, intrusion detection systems, and network monitoring tools to protect your organizational infrastructure.",
    tools: ["Palo Alto Networks", "Cisco", "Fortinet", "Wireshark"],
    image:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=700&q=80",
  },
  {
    icon: <Lock className="h-10 w-10 text-cyber-red" />,
    title: "Identity & Access Management",
    description:
      "Comprehensive solutions for controlling user access to critical systems and sensitive data across your organization.",
    tools: ["Okta", "Microsoft Azure AD", "OneLogin", "Auth0"],
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&q=80",
  },
  {
    icon: <Cloud className="h-10 w-10 text-cyber-red" />,
    title: "Cloud Security",
    description:
      "Securing cloud environments and workloads with specialized tools and configurations for major cloud providers.",
    tools: [
      "AWS Security Hub",
      "Azure Sentinel",
      "Google Cloud Security",
      "CloudGuard",
    ],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80",
  },
  {
    icon: <Cpu className="h-10 w-10 text-cyber-red" />,
    title: "Endpoint Protection",
    description:
      "Next-generation antivirus and endpoint detection and response (EDR) solutions to secure all devices in your network.",
    tools: ["CrowdStrike", "SentinelOne", "Carbon Black", "Trend Micro"],
    image:
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=700&q=80",
  },
  {
    icon: <Code className="h-10 w-10 text-cyber-red" />,
    title: "Application Security",
    description:
      "Securing software development lifecycles and implementing robust application vulnerability management.",
    tools: ["Checkmarx", "OWASP ZAP", "SonarQube", "Veracode"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80",
  },
  {
    icon: <Database className="h-10 w-10 text-cyber-red" />,
    title: "Data Protection",
    description:
      "Comprehensive data encryption, access controls, and data loss prevention strategies for sensitive information.",
    tools: ["Varonis", "Digital Guardian", "Symantec DLP", "McAfee DLP"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
  },
];

const Technologies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cyber-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Technologies
            </h1>
            <div className="w-24 h-1 bg-cyber-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              We leverage cutting-edge technologies and industry-leading tools
              to deliver exceptional cybersecurity and technical solutions to
              our clients.
            </p>
          </div>
        </div>
      </section>
      <div className="section-padding min-h-screen bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto">
          {/* <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our <span className="text-gradient">Technologies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry-leading tools
              to deliver exceptional cybersecurity and technical solutions to
              our clients.
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 mb-2">
                    {tech.icon}
                    {tech.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/80">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Featured Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="bg-secondary text-foreground/80 px-3 py-1 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button size="lg" className="bg-cyber-red hover:bg-cyber-red/90">
              Discuss Your Technology Needs
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Technologies;
