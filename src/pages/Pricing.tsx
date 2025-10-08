import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "15,000",
      description: "Perfect for small businesses getting started online",
      features: [
        "Single page website",
        "Responsive design",
        "Basic SEO",
        "Contact form",
        "1 week delivery",
        "2 revisions",
      ],
    },
    {
      name: "Professional",
      price: "35,000",
      description: "Ideal for growing businesses",
      popular: true,
      features: [
        "Up to 5 pages",
        "Custom design",
        "Advanced SEO",
        "Contact & lead forms",
        "2 weeks delivery",
        "4 revisions",
        "Performance optimization",
      ],
    },
    {
      name: "Enterprise",
      price: "75,000",
      description: "For businesses needing full-featured solutions",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Premium SEO package",
        "Database integration",
        "4 weeks delivery",
        "Unlimited revisions",
        "Performance optimization",
        "3 months support",
      ],
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
                Transparent Pricing
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose a package that fits your needs. All prices in Indian Rupees (INR).
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`p-8 relative ${
                    pkg.popular ? "border-2 border-primary shadow-xl" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-foreground">₹{pkg.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Quote */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
              <p className="text-muted-foreground mb-8">
                Every project is unique. If none of these packages fit your needs, 
                let's discuss a custom solution tailored to your requirements.
              </p>
              <Link to="/contact">
                <Button size="lg">Request Custom Quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
