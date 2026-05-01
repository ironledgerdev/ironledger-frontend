import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Send, ArrowRight, Terminal, Phone, MessageCircle, Star } from "lucide-react";
import logo from "@/assets/logo.png";

const reviews = [
  {
    name: "Sarah Mkhize",
    company: "HealthTech Solutions",
    text: "IronLedger Group transformed our vision into a scalable platform. Their technical expertise and attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "David Chen",
    company: "Global Transport Co.",
    text: "From concept to launch, the team was responsive and professional. They truly understand building products at scale.",
    rating: 5,
  },
  {
    name: "Emma Johnson",
    company: "Corporate Catering Ltd",
    text: "Outstanding service and delivery. The platform has streamlined our operations and increased our client bookings significantly.",
    rating: 5,
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/27660859217?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
                          <Input
                            name="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-secondary border-border focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-steel mb-1.5 block uppercase tracking-wider">Email</label>
                          <Input
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-secondary border-border focus:border-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-mono text-steel mb-1.5 block uppercase tracking-wider">Subject</label>
                        <Input
                          name="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-steel mb-1.5 block uppercase tracking-wider">Message</label>
                        <Textarea
                          name="message"
                          placeholder="Tell us about your project…"
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-secondary border-border focus:border-primary resize-none"
                        />
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
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <MessageCircle size={16} className="text-primary" /> WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/27660859217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button size="sm" className="w-full glow-blue active:scale-[0.97]">
                        Chat on WhatsApp <MessageCircle className="ml-1" size={14} />
                      </Button>
                    </a>
                  </div>

                  <div className="glass-card rounded-xl p-6 gradient-border">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Phone size={16} className="text-primary" /> Call Us
                    </h3>
                    <a href="tel:+27101020298" className="inline-block">
                      <Button size="sm" variant="outline" className="w-full border-border hover:border-primary/50 hover:bg-primary/5 active:scale-[0.97]">
                        +27 10 102 0298 <Phone className="ml-1" size={14} />
                      </Button>
                    </a>
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

      <div className="glow-line" />

      <section className="py-28 md:py-36 relative bg-grid-fine">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
              // testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-balance">
              What Our <span className="text-gradient">Clients Have to Say</span>
            </h2>
            <p className="mt-4 text-steel-light max-w-lg mx-auto text-pretty">
              Trusted by companies across industries to deliver exceptional results.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 100}>
                <div className="glass-card rounded-xl p-8 gradient-border h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-steel-light text-pretty leading-relaxed flex-1 mb-6">
                    "{review.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-steel-light font-mono">{review.company}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
