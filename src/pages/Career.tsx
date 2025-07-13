import { useRef, useState } from "react";
import { Briefcase, FileText, Upload, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";

const jobs = [
  {
    id: 1,
    title: "Cybersecurity Consultant",
    description:
      "Join our expert team to help organizations safeguard digital assets and develop robust security protocols.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    id: 2,
    title: "IT Staffing Specialist",
    description:
      "Connect top tech talent with leading employers and help build the workforce of tomorrow.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
  },
  {
    id: 3,
    title: "Healthcare Recruiter",
    description:
      "Support healthcare partners by recruiting talented professionals for critical roles nationwide.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
];

export default function Career() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadName, setUploadName] = useState("");
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-cyber-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
            <div className="w-24 h-1 bg-cyber-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive cybersecurity, staffing, and technology solutions to
              protect and grow your business.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding min-h-screen bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {jobs.map((job) => (
              <Card key={job.id} className="shadow-lg flex flex-col">
                <img
                  src={job.image}
                  alt={job.title}
                  className="h-40 w-full object-cover"
                />
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Briefcase className="text-cyber-red" />
                    {job.title}
                  </CardTitle>
                  <CardDescription>{job.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pb-6 text-center">
                  <Button
                    size="lg"
                    className="text-base font-semibold"
                    onClick={() => {
                      setSelectedJob(job.title);
                      setTimeout(() => {
                        document
                          .getElementById("application-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedJob && (
            <section id="application-form" className="mt-10 scroll-mt-20">
              <Card className="glass shadow-2xl p-4">
                <CardHeader className="text-center">
                  <CardTitle>
                    <FileText className="inline text-cyber-red mr-2" />
                    Apply for:{" "}
                    <span className="text-cyber-red">{selectedJob}</span>
                  </CardTitle>
                  <CardDescription>
                    Ready to make an impact? Upload your details and join Cyvex
                    Lab!
                  </CardDescription>
                </CardHeader>
                <form
                  ref={formRef}
                  className="space-y-6 px-8 pb-8 pt-2"
                  method="POST"
                  action="https://formsubmit.co/083d0934cd146857e5629c94a358b6a1"
                  encType="multipart/form-data"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="Job Title"
                    value={selectedJob || ""}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="mb-1 flex items-center gap-2"
                      >
                        <User className="inline w-4 h-4 text-cyber-red" />
                        Name
                      </Label>
                      <Input
                        required
                        type="text"
                        id="name"
                        name="Name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="mb-1 flex items-center gap-2"
                      >
                        <Mail className="inline w-4 h-4 text-cyber-red" />
                        Email
                      </Label>
                      <Input
                        required
                        type="email"
                        id="email"
                        name="Email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="resume"
                      className="mb-1 flex items-center gap-2"
                    >
                      <Upload className="inline w-4 h-4 text-cyber-red" />
                      Resume (PDF)
                    </Label>
                    <Input
                      type="file"
                      id="resume"
                      name="Resume"
                      accept="application/pdf"
                      onChange={(e) => {
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
                        Uploaded:{" "}
                        <span className="font-medium">{uploadName}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="message"
                      className="mb-1 flex items-center gap-2"
                    >
                      <FileText className="inline w-4 h-4 text-cyber-red" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="Query"
                      placeholder="Tell us about yourself or ask a question..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-base font-semibold bg-cyber-red hover:bg-cyber-red/90"
                  >
                    Submit Application
                  </Button>
                </form>
              </Card>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}
