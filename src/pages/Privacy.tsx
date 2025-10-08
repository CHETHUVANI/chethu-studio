import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
              <p>When you contact us through our website, we collect information such as your name, email address, phone number, and message content.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information you provide to respond to your inquiries, provide our services, and communicate with you about your project.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at hello@chethustudio.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
