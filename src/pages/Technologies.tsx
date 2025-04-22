import { ShieldCheck } from "lucide-react";
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
    name: "Identity Governance (IGA)",
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    description:
      "We implement IGA to ensure users have the right access at the right time, helping organizations enforce access policies and stay compliant.",
    tools: ["SailPoint", "Saviynt", "Oracle Identity Governance"],
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4",
  },
  {
    name: "Identity Management (IDM)",
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    description:
      "Our IDM solutions automate user provisioning, streamline lifecycle management, and enable secure access across platforms.",
    tools: ["Okta", "Azure AD", "Ping Identity", "ForgeRock"],
    image:
      "https://img.freepik.com/free-photo/application-contact-communication-connection-concept_53876-132755.jpg?t=st=1745320169~exp=1745323769~hmac=38367da33db0b4b7b7c6ff6b08e75f678f69620e7830b16c094cfe070d30efef&w=900",
  },
  {
    name: "SailPoint",
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    description:
      "We help organizations deploy SailPoint for modern identity governance, access reviews, and risk-based access controls.",
    tools: ["SailPoint IdentityNow", "AI-Driven Governance"],
    image:
      "https://cdn.gca.net/wp-content/uploads/2022/02/SailPoint-AI-Identity-Management-Diagram.png",
  },
  {
    name: "CyberArk",
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    description:
      "We deploy CyberArk to secure privileged access, manage credentials, and monitor sessions to prevent insider and external threats.",
    tools: ["CyberArk PAM", "Password Vault", "Session Manager"],
    image:
      "https://www.manufacturingtodayindia.com/cloud/2024/05/24/CyberArk-CORA-AI-Graphic.png",
  },
  {
    name: "Saviynt",
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    description:
      "We integrate Saviynt’s cloud-native identity governance to simplify access reviews, manage identities, and meet compliance mandates.",
    tools: ["Saviynt IGA", "Cloud Privileged Access Management"],
    image:
      "https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908113.jpg?t=st=1745320202~exp=1745323802~hmac=56a59609b0d48fa86f062cbc6dc00c2abd5079abc665b6060361942276de1a56&w=1060",
  },
  {
    name: "Access Management",
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    description:
      "Our access management solutions enforce secure login mechanisms, SSO, adaptive MFA, and federated identity access.",
    tools: ["Okta", "Ping Identity", "Auth0", "Keycloak"],
    image:
      "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041856.jpg?t=st=1745320333~exp=1745323933~hmac=637d1487fc2cfc8198d5936d7ff74c835a5e35acfb874a9a3a4d5704b81480d7&w=1380",
  },
  {
    name: "PingIdentity",
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    description:
      "Ping Identity provides secure, seamless access using intelligent SSO and MFA. We help implement it to support zero-trust strategies.",
    tools: ["PingOne", "PingFederate", "PingAccess"],
    image:
      "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?t=st=1745320287~exp=1745323887~hmac=1b67a2714a1735870537fd7df70e3a31c56fe9601a1b43f66c3393cb4580f1c9&w=996",
  },
  {
    name: "Okta",
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    description:
      "We integrate Okta’s cloud-based identity platform for universal directory, secure authentication, and frictionless SSO experiences.",
    tools: ["Okta Workforce Identity", "Okta Customer Identity Cloud"],
    image:
      "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041845.jpg?t=st=1745320420~exp=1745324020~hmac=4f9f4a152acab9ce4acfd6838e5ea0162cde4d25d289bb43d16f6882fe746ef3&w=826",
  },
  {
    name: "DevOps",
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    description:
      "We embed security into DevOps to automate secure CI/CD pipelines, infrastructure as code, and compliance in modern engineering workflows.",
    tools: ["Jenkins", "GitLab CI", "Terraform", "Checkmarx", "SonarQube"],
    image:
      "https://img.freepik.com/premium-photo/cloudnative-apps-cloudnative-technologies-conceptual-illustration_1026678-78.jpg?w=1380",
  },
  {
    name: "Healthcare Security",
    icon: <ShieldCheck className="h-10 w-10 text-cyber-red" />,
    description:
      "We provide identity and access control tailored to the healthcare sector, ensuring patient data security and HIPAA compliance.",
    tools: ["Cerner Integration", "Epic IAM", "Audit & Compliance Dashboards"],
    image:
      "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-glove_23-2149611205.jpg?t=st=1745320590~exp=1745324190~hmac=c0279a31f2daba4e175d3696deddca8c40e3e355d3367b9171dec72b49cd5328&w=996",
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
                    alt={tech.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 mb-2">
                    {tech.icon}
                    {tech.name}
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
