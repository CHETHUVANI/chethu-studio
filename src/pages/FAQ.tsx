import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer comprehensive web development services including custom website development, landing pages, e-commerce stores, web applications, SEO optimization, performance audits, website maintenance, and AI chatbot integration.",
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. A simple landing page typically takes 1 week, a multi-page website takes 2-3 weeks, and complex web applications can take 4-6 weeks. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What are your payment terms?",
      answer: "I typically require a 50% advance payment to begin the project, with the remaining 50% due upon completion and before final delivery. For larger projects, we can arrange milestone-based payments.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! I offer website maintenance packages starting at ₹5,000/month, which include regular updates, security patches, backups, and priority support. Even after project completion, I'm available for any updates or questions you may have.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All websites I develop are fully responsive and optimized for all devices - mobile phones, tablets, and desktops. Mobile-first design is a standard practice in all my projects.",
    },
    {
      question: "Can you help with SEO?",
      answer: "Yes! I include basic SEO optimization in all website projects (meta tags, semantic HTML, performance optimization). I also offer comprehensive SEO packages that include keyword research, on-page optimization, technical SEO, and monthly reporting.",
    },
    {
      question: "What technologies do you use?",
      answer: "I work with modern, industry-standard technologies including React, TypeScript, Node.js, PostgreSQL, and Tailwind CSS. I choose the best tech stack based on your project requirements to ensure optimal performance and scalability.",
    },
    {
      question: "Do you work with clients outside Bengaluru?",
      answer: "Yes! While I'm based in Bengaluru, I work with clients across India and internationally. Most communication happens via video calls and email, making remote collaboration seamless and effective.",
    },
    {
      question: "How many revisions do you offer?",
      answer: "The number of revisions depends on your chosen package. Starter packages include 2 revisions, Professional packages include 4 revisions, and Enterprise packages include unlimited revisions within the project scope.",
    },
    {
      question: "What if I need changes after the project is completed?",
      answer: "Minor tweaks and bug fixes within the first month are complimentary. For larger changes or new features, I offer flexible hourly rates or can provide a custom quote based on your requirements.",
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, I'm happy to sign a Non-Disclosure Agreement (NDA) to protect your business ideas and sensitive information. Your confidentiality is important to me.",
    },
    {
      question: "How do we communicate during the project?",
      answer: "I maintain regular communication through your preferred channels - email, WhatsApp, phone calls, or video meetings. I provide weekly progress updates and am always available to address any questions or concerns.",
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
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about my services, process, and pricing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm here to help! Feel free to reach out with any questions about your project.
              </p>
              <a href="/contact" className="inline-block">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
