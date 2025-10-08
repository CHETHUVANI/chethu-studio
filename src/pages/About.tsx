import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Code2, Laptop, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About Chethu Studio
              </h1>
              <p className="text-lg text-muted-foreground">
                Hi, I'm Chethu – a passionate freelance web developer based in Bengaluru, India, 
                specializing in creating beautiful, high-performance websites for small businesses and founders.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
              <p>
                With over 5 years of experience in web development, I've helped numerous businesses 
                establish their online presence and achieve their digital goals. My journey began with 
                a simple passion for creating beautiful, functional websites that solve real business problems.
              </p>
              <p>
                I believe that every business, regardless of size, deserves a professional online presence. 
                That's why I focus on delivering high-quality, custom solutions that are not only visually 
                stunning but also optimized for performance and conversions.
              </p>
              <p>
                Based in the tech hub of Bengaluru, I understand the unique needs of Indian businesses 
                and startups. I work closely with my clients to understand their vision and turn it into 
                reality through clean code, modern design, and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              What I Believe In
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 text-center">
                <Code2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, scalable code that stands the test of time
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Client First</h3>
                <p className="text-sm text-muted-foreground">
                  Your success is my success. I'm here to help you grow
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Always learning and using the latest technologies
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Laptop className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Fast, optimized websites that deliver results
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "React", "TypeScript", "Node.js", "HTML/CSS",
                  "Tailwind CSS", "REST APIs", "PostgreSQL", "Git",
                  "Responsive Design", "SEO", "Performance Optimization", "UI/UX Design"
                ].map((skill) => (
                  <Card key={skill} className="p-4 text-center hover:shadow-lg transition-shadow">
                    <p className="font-medium">{skill}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
