import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Services</h2>
              <p>Chethu Freelance Studio provides web development services as described on our website. All services are subject to availability and acceptance.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Payment Terms</h2>
              <p>Payment terms will be outlined in your project proposal. Typically, 50% advance payment is required before work begins, with the balance due upon completion.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Revisions</h2>
              <p>The number of revisions included depends on your chosen package. Additional revisions beyond the agreed scope may incur extra charges.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact</h2>
              <p>For questions about these Terms, contact us at hello@chethustudio.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
