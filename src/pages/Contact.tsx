import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Send, ArrowRight, Terminal } from "lucide-react";
import logo from "@/assets/logo.png";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative">
      <img src={logo} alt="" className="watermark top-[40%] left-1/2 -translate-x-1/2 w-[600px]" aria-hidden="true" />

      <section className="relative min-h-[60vh] flex items-end bg-grid overflow-hidden">
        <div className="scan-line" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(210_100%_56%/0.08),transparent_50%)]" />
        <div className="container mx-auto px-6 pb-20 pt-40 relative z-10">
          <ScrollReveal>
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// contact</span>
            <h1 className="text-5xl md:text-7xl font-black mt-4 text-balance">
              Work <span className="text-gradient">With Us</span>
            </h1>
            <p className="mt-6 text-lg text-steel-light max-w-xl text-pretty">
              Have a project in mind or want to explore a partnership? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="glow-line" />

      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="glass-card rounded-xl p-12 text-center gradient-border">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <Send size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Message Sent</h3>
                    <p className="mt-2 text-steel-light font-mono text-sm">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <div className="glass-card rounded-xl p-8 gradient-border">
                    <div className="flex items-center gap-2 mb-6">
                      <Terminal size={16} className="text-primary" />
                      <span className="text-xs font-mono text-steel">new_inquiry.init()</span>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-mono text-steel mb-1.5 block uppercase tracking-wider">Name</label>
                          <Input placeholder="Your name" required className="bg-secondary border-border focus:border-primary" />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-steel mb-1.5 block uppercase tracking-wider">Email</label>
                          <Input type="email" placeholder="you@company.com" required className="bg-secondary border-border focus:border-primary" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-mono text-steel mb-1.5 block uppercase tracking-wider">Subject</label>
                        <Input placeholder="How can we help?" className="bg-secondary border-border focus:border-primary" />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-steel mb-1.5 block uppercase tracking-wider">Message</label>
                        <Textarea placeholder="Tell us about your project…" rows={6} required className="bg-secondary border-border focus:border-primary resize-none" />
                      </div>
                      <Button size="lg" className="w-full glow-blue active:scale-[0.97]" type="submit">
                        Send Message <ArrowRight className="ml-1" size={16} />
                      </Button>
                    </form>
                  </div>
                )}
              </ScrollReveal>
            </div>

            <div className="md:col-span-2">
              <ScrollReveal delay={100}>
                <div className="space-y-8">
                  <div className="glass-card rounded-xl p-6 gradient-border">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Mail size={16} className="text-primary" /> Email Us
                    </h3>
                    <a href="mailto:hello@ironledgergroup.com" className="text-primary hover:text-accent transition-colors text-sm font-mono">
                      hello@ironledgergroup.com
                    </a>
                  </div>

                  <div className="glass-card rounded-xl p-6 gradient-border">
                    <h3 className="font-semibold text-foreground mb-3">Partnership Enquiries</h3>
                    <p className="text-sm text-steel-light text-pretty leading-relaxed">
                      Interested in working together or investing? Reach out and our team will be in touch.
                    </p>
                  </div>

                  <div className="glass-card rounded-xl p-6 gradient-border">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-live" />
                      Response Time
                    </h3>
                    <p className="text-sm text-steel-light font-mono">
                      {"< 24 hours"}
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
