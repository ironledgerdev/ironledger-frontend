import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const companies = [
  {
    name: "MedMap",
    description: "A healthcare platform that connects patients with providers through intelligent search, mapping, and scheduling. MedMap simplifies healthcare access by bringing everything into one intuitive experience.",
    status: "Live",
    statusColor: "bg-emerald-500",
    tag: "Healthcare",
    techs: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "MyBusApp",
    description: "A transport platform designed to modernise public transit. MyBusApp will help commuters navigate routes, track buses in real time, and plan their journeys effortlessly.",
    status: "Coming Soon",
    statusColor: "bg-amber-500",
    tag: "Transport",
    techs: ["React Native", "Cloud", "Maps"],
  },
];

const Companies = () => (
  <main className="relative">
    <img src={logo} alt="" className="watermark top-[20%] left-1/2 -translate-x-1/2 w-[700px]" aria-hidden="true" />

    <section className="relative min-h-[60vh] flex items-end bg-grid overflow-hidden">
      <div className="scan-line" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(210_100%_56%/0.08),transparent_50%)]" />
      <div className="container mx-auto px-6 pb-20 pt-40 relative z-10">
        <ScrollReveal>
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// portfolio</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 text-balance">
            Our <span className="text-gradient">Companies</span>
          </h1>
          <p className="mt-6 text-lg text-steel-light max-w-xl text-pretty">
            Digital platforms solving real-world problems across industries.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <div className="glow-line" />

    <section className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                <p className="mt-3 text-sm text-steel-light text-pretty flex-1 leading-relaxed">{c.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {c.techs.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-steel border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-primary">
                  {c.status === "Live" ? <><ExternalLink size={14} /> Visit Platform</> : "Launching soon"}
                </span>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={200}>
            <div className="rounded-xl p-8 border border-dashed border-border h-full flex flex-col items-center justify-center text-center min-h-[300px] hover-lift transition-all duration-300 hover:border-primary/30">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 border border-border">
                <Plus size={22} className="text-steel" />
              </div>
              <h3 className="font-semibold text-steel">More Coming</h3>
              <p className="mt-2 text-xs text-steel font-mono">We're always building what's next.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <div className="glow-line" />

    <section className="py-24 relative">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Have a platform idea? <span className="text-gradient">Let's talk.</span>
          </h2>
          <Button className="mt-8 glow-blue active:scale-[0.97]" size="lg" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="ml-1" size={16} /></Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Companies;
