
import { Calendar, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "The Future of Cybersecurity in a Post-Pandemic World",
    excerpt: "Exploring emerging threats and defense mechanisms as remote work becomes the new normal for enterprise organizations.",
    date: "April 15, 2025",
    author: "Sarah Johnson",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80"
  },
  {
    title: "Why Healthcare IT Staffing Requires Specialized Expertise",
    excerpt: "The unique challenges of recruiting for healthcare IT positions and strategies for building effective teams.",
    date: "April 10, 2025",
    author: "Michael Chen",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80"
  },
  {
    title: "Implementing Zero Trust Security for Government Agencies",
    excerpt: "A comprehensive approach to securing sensitive government information in an increasingly complex threat landscape.",
    date: "April 5, 2025",
    author: "David Wilson",
    category: "Government",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=80"
  },
  {
    title: "The Most In-Demand Tech Skills for 2025",
    excerpt: "Analysis of hiring trends and the technical skills that will command premium salaries in the coming year.",
    date: "March 28, 2025",
    author: "Jennifer Lee",
    category: "Staffing",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=700&q=80"
  },
  {
    title: "Securing the Modern API Ecosystem",
    excerpt: "Best practices for implementing robust API security in your organization's software development lifecycle.",
    date: "March 20, 2025",
    author: "Robert Kumar",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=700&q=80"
  },
  {
    title: "Building Resilient Security Operations Centers",
    excerpt: "Key considerations for establishing and managing effective SOCs that can adapt to evolving threat landscapes.",
    date: "March 15, 2025",
    author: "Lisa Thompson",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&q=80"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, thought leadership, and industry trends from our experts in cybersecurity, healthcare IT, staffing, and software development.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="overflow-hidden lg:flex">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80" 
                alt="Featured blog post" 
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-4">
                Featured
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Convergence of AI and Cybersecurity: Opportunities and Risks
              </h2>
              <p className="text-muted-foreground mb-6">
                An in-depth analysis of how artificial intelligence is transforming cybersecurity practices, creating both new defensive capabilities and potential vulnerabilities.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-4">Alex Rivera</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span>April 21, 2025</span>
              </div>
              <Button className="w-fit">
                Read Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                  {post.category}
                </span>
                <CardTitle className="text-xl mt-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  Read <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
