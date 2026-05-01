import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export const clients = [
  {
    name: "Onus Tempest",
    industry: "Brand & Identity",
    description: "Custom corporate website with bold brand storytelling and conversion-focused layout.",
    url: "#",
    accent: "from-violet-500/20 to-blue-500/10",
    initials: "OT",
  },
  {
    name: "K and K Pty Ltd",
    industry: "Business Services",
    description: "Professional business website built for credibility, lead generation, and growth.",
    url: "#",
    accent: "from-blue-500/20 to-cyan-500/10",
    initials: "KK",
  },
  {
    name: "Snathi's Way Kitchen",
    industry: "Hospitality",
    description: "Vibrant food brand presence at snathiswaykitchen.co.za with menu and ordering UX.",
    url: "https://snathiswaykitchen.co.za",
    accent: "from-amber-500/20 to-rose-500/10",
    initials: "SW",
  },
];

const ClientsSection = () => {
  return (
    <section className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(260_90%_66%/0.06),transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
            // our_clients
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-balance">
            Websites We've <span className="text-gradient">Built</span>
          </h2>
          <p className="mt-4 text-steel-light max-w-xl mx-auto text-pretty">
            Trusted by ambitious brands to deliver beautiful, performant digital experiences.
          </p>
        </ScrollReveal>

        {/* Marquee logo strip */}
        <ScrollReveal delay={80} className="mb-14 marquee-mask">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...clients, ...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-steel-light/70 hover:text-foreground transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 border border-border flex items-center justify-center font-mono text-xs font-bold text-foreground">
                  {c.initials}
                </div>
                <span className="font-semibold tracking-wide">{c.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {clients.map((client, i) => (
            <ScrollReveal key={client.name} delay={i * 100}>
              <a
                href={client.url}
                target={client.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block group relative h-full"
              >
                <div className="glass-card rounded-2xl p-7 h-full flex flex-col hover-lift gradient-border transition-all duration-300 group-hover:border-primary/40 relative overflow-hidden">
                  <div
                    className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${client.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold font-mono text-sm shadow-lg">
                        {client.initials}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-steel px-2.5 py-1 rounded-full bg-secondary border border-border">
                        {client.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                      {client.name}
                    </h3>
                    <p className="mt-3 text-sm text-steel-light text-pretty flex-1 leading-relaxed">
                      {client.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                      Visit site
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
