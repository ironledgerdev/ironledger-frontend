import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Globe, Code, Layers, Wrench, ExternalLink } from "lucide-react";

const companies = [
  {
    name: "MedMap",
    description: "A healthcare platform connecting patients with providers through intelligent mapping and scheduling.",
    status: "Live",
    color: "bg-emerald-500",
  },
  {
    name: "MyBusApp",
    description: "A transport platform designed to modernise public transit experiences for commuters.",
    status: "Coming Soon",
    color: "bg-amber-500",
  },
];

const services = [
  { icon: Globe, title: "Web Design", desc: "Beautiful, conversion-focused designs that communicate your brand." },
  { icon: Code, title: "Web Development", desc: "Robust, performant web applications built with modern technology." },
  { icon: Layers, title: "Platform Development", desc: "End-to-end SaaS and platform engineering for scalable products." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Ongoing support, monitoring, and iteration to keep you growing." },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative bg-surface-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(215_80%_48%/0.12),transparent_60%)]" />
      <div className="container mx-auto px-6 pt-32 pb-24 md:pt-44 md:pb-36 relative">
        <ScrollReveal className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-surface-dark-foreground leading-[1.05] text-balance">
            Building and Powering Digital Platforms
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={100} className="mt-6 max-w-xl">
          <p className="text-lg md:text-xl text-steel-light text-pretty">
            IronLedger Group builds, owns, and supports high-impact digital businesses.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200} className="mt-10 flex flex-wrap gap-4">
          <Button variant="hero-dark" size="lg" asChild>
            <Link to="/companies">Explore Our Companies <ArrowRight className="ml-1" size={16} /></Link>
          </Button>
          <Button variant="hero-dark-outline" size="lg" asChild>
            <Link to="/contact">Work With Us</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>

    {/* About Snapshot */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading label="Who We Are" title="A Holding Company for the Digital Age" />
        <ScrollReveal className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-pretty leading-relaxed">
            IronLedger Group is a technology holding company that builds, acquires, and supports digital platforms across industries. 
            We combine strategic vision with technical execution to create businesses that matter.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Our Companies */}
    <section className="py-24 md:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6">
        <SectionHeading label="Portfolio" title="Our Companies" description="Digital platforms designed to solve real-world problems." />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companies.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 80}>
              <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/60">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${c.color}`} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.status}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">{c.description}</p>
                <Link to="/companies" className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:underline">
                  Learn more <ExternalLink size={14} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading label="Services" title="What We Do" description="From concept to launch — and everything after." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 70}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Work */}
    <section className="py-24 md:py-32 bg-surface-dark">
      <div className="container mx-auto px-6">
        <SectionHeading label="Case Study" title="Featured Work" dark />
        <ScrollReveal className="max-w-3xl mx-auto bg-surface-dark border border-steel/20 rounded-xl p-8 md:p-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">MedMap</span>
          <h3 className="text-2xl md:text-3xl font-bold text-surface-dark-foreground mt-2">
            Connecting Healthcare, Intelligently
          </h3>
          <p className="mt-4 text-steel-light text-pretty leading-relaxed">
            MedMap is a healthcare platform built from the ground up by IronLedger Group. It connects patients with providers through intelligent search, mapping, and scheduling — making healthcare access simpler for everyone.
          </p>
          <Button variant="hero-dark" className="mt-8" asChild>
            <Link to="/companies">View Company <ArrowRight className="ml-1" size={16} /></Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Let's build something impactful together
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-pretty">
            Whether you have an idea or need a technology partner, we're ready.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start a Conversation <ArrowRight className="ml-1" size={16} /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Index;
