import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";

const Services = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("popular", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const getIcon = (iconName: string | null) => {
    if (!iconName) return LucideIcons.Code;
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.Code;
    return Icon;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Services I Offer
              </h1>
              <p className="text-lg text-muted-foreground">
                Professional web development services tailored to help your business succeed online
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-8 animate-pulse">
                    <div className="h-12 w-12 bg-muted rounded mb-4"></div>
                    <div className="h-6 bg-muted rounded mb-4"></div>
                    <div className="h-20 bg-muted rounded"></div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services?.map((service) => {
                  const Icon = getIcon(service.icon);
                  return (
                    <Card key={service.id} className="p-8 hover:shadow-lg transition-shadow relative">
                      {service.popular && (
                        <Badge className="absolute top-4 right-4">Popular</Badge>
                      )}
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      {service.price_starting && (
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-foreground">
                            ₹{service.price_starting.toLocaleString('en-IN')}
                          </span>
                          <span className="text-muted-foreground"> onwards</span>
                        </div>
                      )}

                      {service.features && service.features.length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <Link to="/contact">
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need Something Custom?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              I offer tailored solutions for unique requirements. Let's discuss your project.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Me
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
