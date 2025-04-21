
import { Star, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Expert Team",
    description:
      "Our team consists of certified security experts, IT professionals, and healthcare specialists with years of industry experience.",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=440&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Tailored Solutions",
    description:
      "We customize our services to meet your specific security and staffing requirements, ensuring optimal results.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=440&q=80",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring and support to address security incidents and client needs at any time.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=440&q=80",
  },
];

const clients = [
  { name: "Client 1", logo: "/placeholder.svg" },
  { name: "Client 2", logo: "/placeholder.svg" },
  { name: "Client 3", logo: "/placeholder.svg" },
  { name: "Client 4", logo: "/placeholder.svg" },
  { name: "Client 5", logo: "/placeholder.svg" },
  { name: "Client 6", logo: "/placeholder.svg" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-cyber-red mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Cyvex Lab, we combine technical expertise with industry knowledge to deliver
            exceptional security and staffing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-border/50 flex flex-col items-center"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-40 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-8 flex flex-col items-center">
                <div className="bg-cyber-red/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="text-cyber-red h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold mb-4">Trusted by Industry Leaders</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We work with organizations across various sectors to enhance their security posture and address staffing needs.
          </p>
        </div>

        {/* Client logos auto-scrolling section */}
        <div className="relative overflow-x-auto">
          <div className="flex animate-scroll min-w-max" style={{ animationDuration: "30s" }}>
            {clients.concat(clients).map((client, index) => (
              <div 
                key={index} 
                className="mx-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
