import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <section className="bg-surface-dark pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold text-surface-dark-foreground text-balance">Work With Us</h1>
            <p className="mt-6 text-lg text-steel-light max-w-xl text-pretty">
              Have a project in mind or want to explore a partnership? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Send size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Message Sent</h3>
                    <p className="mt-2 text-muted-foreground">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                        <Input placeholder="Your name" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                        <Input type="email" placeholder="you@company.com" required />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                      <Input placeholder="How can we help?" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                      <Textarea placeholder="Tell us about your project…" rows={6} required />
                    </div>
                    <Button variant="hero" size="lg" type="submit">
                      Send Message <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            <div className="md:col-span-2">
              <ScrollReveal delay={100}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <a href="mailto:hello@ironledgergroup.com" className="text-primary hover:underline flex items-center gap-2 text-sm">
                      <Mail size={16} /> hello@ironledgergroup.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Partnership Enquiries</h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Interested in working together or investing? Reach out and our team will be in touch.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
