import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ScrollReveal from "@/components/ScrollReveal";
import { Globe, Code, Layers, Wrench, ArrowRight, CheckCircle, Megaphone } from "lucide-react";
import logo from "@/assets/logo.png";

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  details: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Beautiful, user-centred designs that communicate your brand clearly and drive action. From wireframes to pixel-perfect mockups.",
    features: ["UI/UX Design", "Prototyping", "Design Systems", "Brand Identity"],
    details: "A great user experience is the foundation of growth. We create designs that don't just look stunning—they convert visitors into customers. Our design process focuses on understanding your audience, creating intuitive interfaces, and building consistent brand identity that strengthens customer loyalty and drives higher engagement rates.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, performant web applications built with the latest technologies. Clean, maintainable code that scales with your business.",
    features: ["React / Next.js", "TypeScript", "API Development", "Performance"],
    details: "Your technology is your competitive advantage. We build fast, scalable, secure applications that grow with your business. From real-time performance to seamless user experiences, we ensure your platform can handle millions of users while maintaining exceptional speed. This drives higher retention, better SEO rankings, and more revenue.",
  },
  {
    icon: Layers,
    title: "SaaS & Platform Engineering",
    description: "End-to-end product development for SaaS and platform businesses. Architecture, infrastructure, and feature development.",
    features: ["System Architecture", "Cloud Infrastructure", "Multi-tenancy", "Analytics"],
    details: "Building a SaaS product requires expertise across the entire stack. We architect systems designed for scale, security, and reliability from day one. Our approach ensures you can acquire customers confidently, reduce operational costs, and iterate quickly based on user feedback. The result: faster time to market and sustained competitive advantage.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing technical support, monitoring, and iterative improvements. Keep your platform secure, fast, and evolving.",
    features: ["24/7 Monitoring", "Security Patches", "Performance Tuning", "Feature Updates"],
    details: "Your product doesn't stop growing once it launches—it needs continuous care to thrive. We provide proactive monitoring, security updates, and performance optimization to keep your platform running at peak efficiency. This reduces downtime, prevents costly issues, and frees your team to focus on building new features that delight users.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Build and amplify your brand across digital channels. From strategy to execution, we help you reach and engage your audience.",
    features: ["Social Media Strategy", "Content Creation", "Brand Presence", "Business Cards & Collateral"],
    details: "Being found is just the first step—building trust and engagement is what converts. We develop comprehensive digital marketing strategies across LinkedIn, X, Facebook, Instagram, and TikTok, combined with professional branding and compelling content. Our approach builds authentic connections with your audience, increases brand awareness, and creates multiple touchpoints for customer acquisition.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <main className="relative">
      <img src={logo} alt="" className="watermark top-[25%] left-1/2 -translate-x-1/2 w-[700px]" aria-hidden="true" />

      <section className="relative min-h-[60vh] flex items-end bg-grid overflow-hidden">
        <div className="scan-line" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(190_95%_50%/0.06),transparent_50%)]" />
        <div className="container mx-auto px-6 pb-20 pt-40 relative z-10">
          <ScrollReveal>
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// services</span>
            <h1 className="text-5xl md:text-7xl font-black mt-4 text-balance">
              What We <span className="text-gradient">Build</span>
            </h1>
            <p className="mt-6 text-lg text-steel-light max-w-xl text-pretty">
              From concept to launch — and everything after. We partner with ambitious teams to bring technology products to life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="glow-line" />

      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <button
                  onClick={() => setSelectedService(s)}
                  className="w-full text-left glass-card rounded-xl p-8 md:p-10 gradient-border hover-lift transition-all duration-300 cursor-pointer hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <s.icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground">{s.title}</h3>
                      <p className="mt-3 text-steel-light text-pretty leading-relaxed">{s.description}</p>
                      <div className="grid grid-cols-2 gap-2 mt-6">
                        {s.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-steel-light">
                            <CheckCircle size={14} className="text-primary shrink-0" />
                            <span className="font-mono text-xs">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-2xl">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <selectedService.icon size={24} className="text-primary" />
                  </div>
                  <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
                </div>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-steel-light leading-relaxed">{selectedService.details}</p>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <h4 className="font-semibold text-foreground mb-3">How we help you grow:</h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        <span className="text-steel-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full glow-blue" size="lg" asChild>
                  <Link to="/contact">Learn More About {selectedService.title}</Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <div className="glow-line" />

      <section className="py-28 md:py-36 relative bg-grid-fine">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(210_100%_56%/0.05),transparent_60%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black text-balance">
              Ready to start a <span className="text-gradient">project</span>?
            </h2>
            <p className="mt-4 text-steel-light max-w-md mx-auto text-pretty">
              Let's discuss how we can help bring your vision to life.
            </p>
            <Button className="mt-8 glow-blue active:scale-[0.97]" size="lg" asChild>
              <Link to="/contact">Get in Touch <ArrowRight className="ml-1" size={16} /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Services;
