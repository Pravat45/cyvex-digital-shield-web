
import { useRef, useState } from "react";
import { Briefcase, FileText, Upload, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const jobs = [
  {
    id: 1,
    title: "Cybersecurity Consultant",
    description:
      "Join our expert team to help organizations safeguard digital assets and develop robust security protocols.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    id: 2,
    title: "IT Staffing Specialist",
    description:
      "Connect top tech talent with leading employers and help build the workforce of tomorrow.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
  },
  {
    id: 3,
    title: "Healthcare Recruiter",
    description:
      "Support healthcare partners by recruiting talented professionals for critical roles nationwide.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
];

const testimonials = [
  {
    name: "Priya Singh",
    designation: "Cybersecurity Analyst",
    message: "Cyvex Lab gave me the opportunity to work on advanced security systems. The team is collaborative and the work is meaningful!",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Raj Patel",
    designation: "IT Staffing Lead",
    message: "I love connecting consultants with innovative healthcare projects. Cyvex's vision makes a real difference.",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
];

export default function Career() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadName, setUploadName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Carousel logic for jobs section
  const [currentJob, setCurrentJob] = useState(0);
  const handleJobNext = () => setCurrentJob((prev) => (prev + 1) % jobs.length);
  const handleJobPrev = () => setCurrentJob((prev) => (prev - 1 + jobs.length) % jobs.length);

  // (Dummy) Form submission logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, submit logic goes here
    alert("Application sent! Our team will review your profile.");
    if (formRef.current) formRef.current.reset();
    setUploadedFile(null);
    setUploadName("");
  };

  return (
    <div className="section-padding min-h-screen bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyber-red">
              Careers <span className="text-gradient">at Cyvex Lab</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-3">
              Join our team of passionate professionals redefining the future of cybersecurity and technology staffing.
            </p>
            <ul className="text-base mb-2 list-disc ml-5 text-foreground/80">
              <li>Innovative Projects</li>
              <li>Growth-Oriented Culture</li>
              <li>Great Benefits & Work-life Balance</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80"
            alt="Team collaboration"
            className="rounded-lg shadow-lg max-w-xs md:max-w-md object-cover"
          />
        </header>

        {/* Job Carousel Section */}
        <section className="mb-14">
          <Card className="glass shadow-xl overflow-hidden relative">
            <div className="relative flex items-center bg-cyber-red/5">
              <button
                onClick={handleJobPrev}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-cyber-red/80 hover:text-white rounded-full p-2 z-10 transition"
              >
                &#8592;
              </button>
              <img
                src={jobs[currentJob].image}
                alt={jobs[currentJob].title}
                className="h-56 w-full object-cover object-center"
              />
              <button
                onClick={handleJobNext}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-cyber-red/80 hover:text-white rounded-full p-2 z-10 transition"
              >
                &#8594;
              </button>
            </div>
            <CardHeader className="text-center pt-7 pb-2">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Briefcase className="text-cyber-red" />
                {jobs[currentJob].title}
              </CardTitle>
              <CardDescription className="mb-1">
                {jobs[currentJob].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button size="lg" className="text-base font-semibold">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Upload / Application Form */}
        <section>
          <Card className="glass shadow-2xl p-4">
            <CardHeader className="text-center">
              <CardTitle>
                <FileText className="inline text-cyber-red mr-2" />
                Submit Your Application
              </CardTitle>
              <CardDescription>
                Ready to make an impact? Upload your details and join Cyvex Lab!
              </CardDescription>
            </CardHeader>
            <form ref={formRef} className="space-y-6 px-8 pb-8 pt-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="mb-1 flex items-center gap-2">
                    <User className="inline w-4 h-4 text-cyber-red" />
                    Name
                  </Label>
                  <Input required type="text" id="name" name="name" placeholder="Your Name" />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-1 flex items-center gap-2">
                    <Mail className="inline w-4 h-4 text-cyber-red" />
                    Email
                  </Label>
                  <Input required type="email" id="email" name="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="resume" className="mb-1 flex items-center gap-2">
                  <Upload className="inline w-4 h-4 text-cyber-red" />
                  Resume (PDF)
                </Label>
                <Input
                  type="file"
                  id="resume"
                  accept="application/pdf"
                  onChange={e => {
                    if (e.target.files && e.target.files.length > 0) {
                      setUploadedFile(e.target.files[0]);
                      setUploadName(e.target.files[0].name);
                    } else {
                      setUploadedFile(null);
                      setUploadName("");
                    }
                  }}
                  required
                  className="file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyber-red/90 file:text-white hover:file:bg-cyber-red"
                />
                {uploadName && (
                  <div className="text-sm text-cyber-red mt-1">
                    Uploaded: <span className="font-medium">{uploadName}</span>
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="message" className="mb-1 flex items-center gap-2">
                  <FileText className="inline w-4 h-4 text-cyber-red" />
                  Message
                </Label>
                <Textarea id="message" name="message" placeholder="Tell us about yourself or ask a question..." rows={4} />
              </div>
              <Button type="submit" className="w-full text-base font-semibold bg-cyber-red hover:bg-cyber-red/90">
                Submit Application
              </Button>
            </form>
          </Card>
        </section>

        {/* Testimonials Section (optional) */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mt-2 mb-8 text-center">Why Join Cyvex Lab?</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {testimonials.map(testimonial => (
              <Card key={testimonial.name} className="flex-1 flex flex-col items-center p-6 shadow-lg glass">
                <img src={testimonial.image} alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-3 object-cover border-4 border-cyber-red/40"
                />
                <div className="text-lg font-medium mb-1">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground mb-2">{testimonial.designation}</div>
                <div className="text-center text-foreground/80 mb-1">"{testimonial.message}"</div>
                <div className="flex gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-cyber-red">&#9733;</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
