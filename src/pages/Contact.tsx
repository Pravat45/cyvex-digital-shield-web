import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will respond shortly.",
        action: (
          <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
        ),
      });
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cyber-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-cyber-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 mb-8">
              Reach out to discuss your cybersecurity needs, staffing
              requirements, or to learn more about our services. Our team is
              ready to assist you.
            </p>
          </div>
        </div>
      </section>
      {/* <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Reach out to discuss your cybersecurity needs, staffing requirements, or to learn more about our services. Our team is ready to assist you.
          </p>
        </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-5">
        {/* Contact Form */}
        <div className="bg-card rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number (Optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(123) 456-7890"
                  value={formState.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please tell us about your project or inquiry..."
                rows={5}
                required
                value={formState.message}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Sending Message...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col">
          <div className="bg-card rounded-xl shadow-md p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Our Headquarters</h3>
                  <p className="text-muted-foreground">
                    5725 corporate way ste 206,
                    <br />
                    west palm beach
                    <br />
                    FL, 33407, United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+1 (984) 382-3218 ,</p>
                  <p className="text-muted-foreground">
                    Monday - Friday 8am - 5pm EST
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">hr@cyvexlab.com</p>
                  {/* <p className="text-muted-foreground">support@cyvexlab.com</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card rounded-xl shadow-md overflow-hidden flex-grow">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
