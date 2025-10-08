import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      role: "Founder & CEO",
      content: "Working with Chethu was an absolute pleasure. The landing page he created for our SaaS product exceeded our expectations. The conversion rate improved by 45% within the first month!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Urban Homes Realty",
      role: "Marketing Director",
      content: "Our real estate portal needed a complete overhaul. Chethu delivered a stunning, user-friendly platform that our clients love. The attention to detail and professionalism were outstanding.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "EduLearn Academy",
      role: "Co-founder",
      content: "Chethu built our learning management system from scratch. The result is a robust, scalable platform that handles thousands of students. Communication was excellent throughout the project.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      company: "Fashion Forward",
      role: "Owner",
      content: "My e-commerce store looks amazing and works flawlessly. Chethu integrated everything we needed - payments, inventory management, and a beautiful admin panel. Highly recommended!",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      company: "Digital Marketing Pro",
      role: "Founder",
      content: "The SEO optimization service was worth every rupee. Our website now ranks on the first page for multiple keywords, and organic traffic has tripled. Professional work with measurable results.",
      rating: 5,
    },
    {
      name: "Ananya Iyer",
      company: "Creative Studio",
      role: "Creative Director",
      content: "Chethu transformed my portfolio website into a work of art. The design is stunning, performance is lightning-fast, and I've received so many compliments from clients. Thank you!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Client Testimonials
              </h1>
              <p className="text-lg text-muted-foreground">
                Don't just take my word for it – here's what my clients have to say about working with me.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-sm opacity-90">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40+</div>
                <p className="text-sm opacity-90">Happy Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5★</div>
                <p className="text-sm opacity-90">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-sm opacity-90">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
