import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, Plus } from "lucide-react";

const companies = [
  {
    name: "MedMap",
    description: "A healthcare platform that connects patients with providers through intelligent search, mapping, and scheduling. MedMap simplifies healthcare access by bringing everything into one intuitive experience.",
    status: "Live",
    color: "bg-emerald-500",
  },
  {
    name: "MyBusApp",
    description: "A transport platform designed to modernise public transit. MyBusApp will help commuters navigate routes, track buses in real time, and plan their journeys effortlessly.",
    status: "Coming Soon",
    color: "bg-amber-500",
  },
];

const Companies = () => (
  <main>
    <section className="bg-surface-dark pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-bold text-surface-dark-foreground text-balance">Our Companies</h1>
          <p className="mt-6 text-lg text-steel-light max-w-xl text-pretty">
            Digital platforms solving real-world problems across industries.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {companies.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 80}>
              <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/60 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${c.color}`} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.status}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{c.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground text-pretty flex-1">{c.description}</p>
                <span className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-primary">
                  {c.status === "Live" ? <>Visit <ExternalLink size={14} /></> : "Launching soon"}
                </span>
              </div>
            </ScrollReveal>
          ))}

          {/* Future placeholder */}
          <ScrollReveal delay={160}>
            <div className="rounded-xl p-8 border-2 border-dashed border-border h-full flex flex-col items-center justify-center text-center min-h-[240px]">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <Plus size={20} className="text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-muted-foreground">More Coming</h3>
              <p className="mt-2 text-xs text-muted-foreground">We're always building what's next.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
);

export default Companies;
