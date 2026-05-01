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
    logo: "https://cdn.builder.io/api/v1/image/assets%2Faf68e484decf46379ccbfc0f4be45e74%2F35b00f08674a45308869d5f3a08c0ee7?format=webp&width=200",
    url: "https://medmap.co.za",
  },
  {
    name: "MyBusApp",
    description: "A transport platform designed to modernise public transit. MyBusApp will help commuters navigate routes, track buses in real time, and plan their journeys effortlessly.",
    status: "Coming Soon",
    statusColor: "bg-primary",
    tag: "Transport",
    techs: ["React Native", "Cloud", "Maps"],
    logo: "https://cdn.builder.io/api/v1/image/assets%2Faf68e484decf46379ccbfc0f4be45e74%2Ff1b0c80ac4af4996976f433d172e5b5e?format=webp&width=800&height=1200",
    url: "",
  },
  {
    name: "Snathi's Way Kitchen",
    description: "Premium catering services for corporate events and functions. Bringing authentic flavors and professional service to your business gatherings. From intimate meetings to large-scale corporate events, we deliver excellence.",
    status: "Live",
    statusColor: "bg-emerald-500",
    tag: "Food & Beverage",
    techs: ["React", "Node.js", "Stripe"],
    logo: "https://cdn.builder.io/api/v1/image/assets%2F4beb1a65c59a4717bcf4ed8127e58cae%2Fca2f9711b86142548261422127b3b91e?format=webp&width=400&height=300",
    url: "https://snathiswaykitchen.co.za",
  },
  {
    name: "GTK People Partners",
    description: "A leading HR and recruitment solutions provider specializing in talent acquisition and workforce management. Connecting businesses with top talent across industries.",
    status: "Live",
    statusColor: "bg-emerald-500",
    tag: "HR & Recruitment",
    techs: ["React", "Node.js", "PostgreSQL"],
    logo: "https://cdn.builder.io/api/v1/image/assets%2Faf68e484decf46379ccbfc0f4be45e74%2Fb6e0e84606394ae4926dc19e95311903?format=webp&width=100",
    url: "https://gtkpeoplepartners.co.za",
  },
  {
    name: "Onus Tempest",
    description: "Custom corporate website with bold brand storytelling and a conversion-focused layout that elevates the company's online presence.",
    status: "Coming Soon",
    statusColor: "bg-primary",
    tag: "Brand & Identity",
    techs: ["React", "Tailwind", "Vite"],
    logo: "",
    url: "",
  },
  {
    name: "K and K Pty Ltd",
    description: "Professional business website built for credibility, lead generation, and growth. A polished digital presence tailored to their brand.",
    status: "Coming Soon",
    statusColor: "bg-primary",
    tag: "Business Services",
    techs: ["React", "Tailwind", "Vite"],
    logo: "",
    url: "",
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
            Our <span className="text-gradient">Clients</span>
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
          {companies.map((c, i) => {
            const isLive = c.status === "Live";
            return (
              <ScrollReveal key={c.name} delay={i * 100}>
                <div
                  className={`glass-card rounded-xl p-8 hover-lift transition-all duration-300 h-full flex flex-col gradient-border ${
                    !isLive ? "ring-1 ring-primary/40 bg-primary/[0.04]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-steel uppercase tracking-wider px-3 py-1 rounded-full bg-secondary">
                      {c.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${c.statusColor} pulse-live`} />
                      <span className={`text-xs font-mono ${isLive ? "text-steel" : "text-primary"}`}>{c.status}</span>
                    </div>
                  </div>
                  {c.logo && (
                    <div className="mb-4 h-12 flex items-center">
                      <img src={c.logo} alt={c.name} className="h-full w-auto object-contain" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground">{c.name}</h3>
                  <p className="mt-3 text-sm text-steel-light text-pretty flex-1 leading-relaxed">{c.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {c.techs.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-steel border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {isLive && c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} /> Visit Site
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 mt-6 text-sm font-mono text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Launching soon
                    </span>
                  )}
                </div>
              </ScrollReveal>
            );
          })}

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
