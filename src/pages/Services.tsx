import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Globe, Code, Layers, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "We create beautiful, user-centred designs that communicate your brand clearly and drive action. From wireframes to pixel-perfect mockups, our design process prioritises usability and aesthetics.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, performant web applications built with the latest technologies. We deliver clean, maintainable code that scales with your business — from marketing sites to complex web apps.",
  },
  {
    icon: Layers,
    title: "SaaS & Platform Engineering",
    description: "End-to-end product development for SaaS and platform businesses. We handle architecture, infrastructure, and feature development so you can focus on growth.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing technical support, monitoring, and iterative improvements. We keep your platform secure, fast, and evolving with your users' needs.",
  },
];

const Services = () => (
  <main>
    <section className="bg-surface-dark pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-bold text-surface-dark-foreground text-balance">Services</h1>
          <p className="mt-6 text-lg text-steel-light max-w-xl text-pretty">
            From concept to launch — and everything after. We partner with ambitious teams to bring technology products to life.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-16">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 60}>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground text-pretty leading-relaxed">{s.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Ready to start a project?</h2>
          <p className="mt-4 text-muted-foreground">Let's discuss how we can help bring your vision to life.</p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="ml-1" size={16} /></Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Services;
