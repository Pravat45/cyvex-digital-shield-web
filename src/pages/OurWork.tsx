import { ArrowRight, Award, Code, Image, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const projects = [
  {
    title: "Enterprise Security Implementation",
    description:
      "Complete security infrastructure overhaul for a Fortune 500 financial services company, featuring advanced threat detection systems and employee training programs.",
    category: "Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=700&q=80",
    icon: <ShieldCheck className="h-8 w-8 text-cyber-red" />,
  },
  {
    title: "Healthcare Management Platform",
    description:
      "Custom healthcare staffing and management solution that streamlined operations and improved patient care efficiency by 35% at a major hospital network.",
    category: "Healthcare IT",
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=700&q=80",
    icon: <Code className="h-8 w-8 text-cyber-red" />,
  },
  {
    title: "Government Data Protection Initiative",
    description:
      "Implementation of classified information protection protocols for a federal agency, ensuring compliance with the highest security standards.",
    category: "Government",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=700&q=80",
    icon: <ShieldCheck className="h-8 w-8 text-cyber-red" />,
  },
  {
    title: "Financial Services Web Application",
    description:
      "End-to-end development of a secure banking platform with biometric authentication and real-time transaction monitoring for fraud prevention.",
    category: "Software Development",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80",
    icon: <Code className="h-8 w-8 text-cyber-red" />,
  },
  {
    title: "Corporate IT Staffing Solution",
    description:
      "Provided specialized IT professionals for a multinational corporation's digital transformation initiative, reducing hiring time by 60%.",
    category: "Staffing",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
    icon: <Award className="h-8 w-8 text-cyber-red" />,
  },
  {
    title: "Security Operations Center",
    description:
      "Design and implementation of a 24/7 security operations center for real-time threat monitoring and incident response for a retail conglomerate.",
    category: "Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80",
    icon: <ShieldCheck className="h-8 w-8 text-cyber-red" />,
  },
];

const OurWork = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cyber-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <div className="w-24 h-1 bg-cyber-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 mb-8">
              Explore our portfolio of successful projects across cybersecurity,
              healthcare, staffing, and software development - delivering
              exceptional results for organizations of all sizes.
            </p>
          </div>
        </div>
      </section>
      {/* <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our <span className="text-gradient">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful projects across cybersecurity,
              healthcare, staffing, and software development - delivering
              exceptional results for organizations of all sizes.
            </p>
          </div> */}

      {/* Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all hover:shadow-lg flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                {project.icon}
              </div>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                {project.category}
              </span>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="ghost" size="sm" className="ml-auto">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button size="lg">
          See All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      {/* </div>
      </div> */}
    </Layout>
  );
};

export default OurWork;
