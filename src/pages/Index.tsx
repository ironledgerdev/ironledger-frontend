import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ClientsSection from "@/components/ClientsSection";
import useTypingEffect from "@/hooks/useTypingEffect";
import useCountUp from "@/hooks/useCountUp";
import logo from "@/assets/logo.png";
import {
  ArrowRight,
  Globe,
  Code,
  Layers,
  Wrench,
  ExternalLink,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

const companies = [
  {
    name: "MedMap",
    description:
      "A healthcare platform connecting patients with providers through intelligent mapping and scheduling.",
    status: "Live",
    statusColor: "bg-emerald-500",
    tag: "Healthcare",
  },
  {
    name: "MyBusApp",
    description:
      "A transport platform designed to modernise public transit experiences for commuters.",
    status: "Coming Soon",
    statusColor: "bg-amber-500",
    tag: "Transport",
  },
];

const services = [
  { icon: Globe, title: "Web Design", desc: "Conversion-focused designs that communicate your brand." },
  { icon: Code, title: "Web Development", desc: "Performant web applications built with modern tech." },
  { icon: Layers, title: "Platform Dev", desc: "End-to-end SaaS and platform engineering." },
  { icon: Wrench, title: "Maintenance", desc: "Ongoing support, monitoring, and iteration." },
];

const Index = () => {
  const typedText = useTypingEffect(
    ["Digital Platforms", "SaaS Products", "Tech Companies", "The Future"],
    90,
    50,
    2200
  );

  const stat1 = useCountUp(3, 1500, "+");
  const stat2 = useCountUp(12, 1800, "+");
  const stat3 = useCountUp(99, 2000, "%");

  return (
    <main className="relative">
      {/* Logo watermark */}
      <img
        src={logo}
        alt=""
        className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px]"
        aria-hidden="true"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
        <div className="aurora" />
        <div className="scan-line" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(222_95%_62%/0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(260_90%_66%/0.08),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10 py-32">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-live" />
              <span className="text-xs font-mono text-steel-light tracking-wider uppercase">
                Now Building
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-balance max-w-5xl">
              <span className="text-foreground">Building and{" "}</span>
              <br className="hidden md:block" />
              <span className="text-foreground">Powering </span>
              <span className="text-gradient typing-cursor">{typedText}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="mt-8 text-lg md:text-xl text-steel-light max-w-xl text-pretty leading-relaxed">
              IronLedger Group builds, owns, and supports high-impact digital
              businesses across industries.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={260} className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="glow-blue active:scale-[0.97]" asChild>
              <Link to="/companies">
                Explore Our Companies <ArrowRight className="ml-1" size={16} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-primary/50 hover:bg-primary/5 active:scale-[0.97]"
              asChild
            >
              <Link to="/contact">Work With Us</Link>
            </Button>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={340} className="mt-20">
            <div className="flex flex-wrap gap-12 md:gap-20">
              <div>
                <span ref={stat1.ref} className="text-4xl md:text-5xl font-black text-gradient tabular-nums">
                  {stat1.display}
                </span>
                <p className="text-xs font-mono text-steel mt-1 uppercase tracking-wider">Platforms</p>
              </div>
              <div>
                <span ref={stat2.ref} className="text-4xl md:text-5xl font-black text-gradient tabular-nums">
                  {stat2.display}
                </span>
                <p className="text-xs font-mono text-steel mt-1 uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div>
                <span ref={stat3.ref} className="text-4xl md:text-5xl font-black text-gradient tabular-nums">
                  {stat3.display}
                </span>
                <p className="text-xs font-mono text-steel mt-1 uppercase tracking-wider">Uptime</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Glow divider */}
      <div className="glow-line" />

      {/* About Snapshot */}
      <section className="py-28 md:py-36 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <ScrollReveal>
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
                // who_we_are
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 text-balance">
                A Holding Company for the{" "}
                <span className="text-gradient">Digital Age</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-steel-light text-pretty leading-relaxed text-lg">
                IronLedger Group is a technology holding company that builds,
                acquires, and supports digital platforms across industries. We
                combine strategic vision with deep technical execution to create
                businesses that scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: "Secure" },
                  { icon: Zap, label: "Fast" },
                  { icon: TrendingUp, label: "Scalable" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="glass-card rounded-lg px-4 py-2 flex items-center gap-2 text-sm text-steel-light"
                  >
                    <item.icon size={14} className="text-primary" />
                    {item.label}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* Our Companies */}
      <section className="py-28 md:py-36 relative bg-grid-fine">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
              // portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-balance">
              Our Companies
            </h2>
            <p className="mt-4 text-steel-light max-w-lg mx-auto text-pretty">
              Digital platforms solving real-world problems at scale.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {companies.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 100}>
                <div className="glass-card rounded-xl p-8 hover-lift transition-all duration-300 h-full flex flex-col gradient-border">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-steel uppercase tracking-wider px-3 py-1 rounded-full bg-secondary">
                      {c.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${c.statusColor} ${c.status === "Live" ? "pulse-live" : ""}`} />
                      <span className="text-xs font-mono text-steel">{c.status}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{c.name}</h3>
                  <p className="mt-3 text-sm text-steel-light text-pretty flex-1 leading-relaxed">
                    {c.description}
                  </p>
                  <Link
                    to="/companies"
                    className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Learn more <ExternalLink size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* Our Clients */}
      <ClientsSection />

      <div className="glow-line" />

      {/* Services */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
              // services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-balance">
              What We Build
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="glass-card rounded-xl p-6 text-center hover-lift transition-all duration-300 h-full">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-steel-light text-pretty">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* Featured Work */}
      <section className="py-28 md:py-36 relative bg-grid-fine">
        <div className="container mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-14 gradient-border">
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
                // case_study
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                MedMap
              </h3>
              <div className="glow-line my-6" />
              <p className="text-steel-light text-pretty leading-relaxed text-lg">
                MedMap is a healthcare platform built from the ground up by
                IronLedger Group. It connects patients with providers through
                intelligent search, mapping, and scheduling — making healthcare
                access simpler for everyone.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["React", "Node.js", "PostgreSQL", "Maps API"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-steel-light border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button className="mt-8 glow-blue active:scale-[0.97]" asChild>
                <Link to="/companies">
                  View Company <ArrowRight className="ml-1" size={16} />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="glow-line" />

      {/* Final CTA */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(210_100%_56%/0.06),transparent_60%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-balance max-w-3xl mx-auto">
              Let's build something{" "}
              <span className="text-gradient">impactful</span> together
            </h2>
            <p className="mt-6 text-steel-light max-w-lg mx-auto text-pretty text-lg">
              Whether you have an idea or need a technology partner, we're ready
              to make it happen.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Button size="lg" className="glow-blue active:scale-[0.97]" asChild>
                <Link to="/contact">
                  Start a Conversation <ArrowRight className="ml-1" size={16} />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
