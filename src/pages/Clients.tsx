import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ClientsSection, { clients } from "@/components/ClientsSection";
import logo from "@/assets/logo.png";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Clients = () => {
  return (
    <main className="relative pt-24">
      <img
        src={logo}
        alt=""
        className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px]"
        aria-hidden="true"
      />

      <section className="relative py-20 overflow-hidden">
        <div className="aurora" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
              // client_work
            </span>
            <h1 className="text-5xl md:text-7xl font-black mt-4 text-balance">
              Brands We've <span className="text-gradient">Empowered</span>
            </h1>
            <p className="mt-6 text-lg text-steel-light max-w-2xl mx-auto text-pretty">
              From ambitious startups to established businesses, we craft websites that
              perform, convert, and elevate brands.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120} className="mt-10 flex flex-wrap justify-center gap-3">
            {["Custom Design", "Conversion Focused", "SEO Ready", "Lightning Fast"].map((tag) => (
              <span
                key={tag}
                className="glass-card rounded-full px-4 py-1.5 text-xs font-mono text-steel-light flex items-center gap-2"
              >
                <CheckCircle2 size={12} className="text-primary" />
                {tag}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <div className="glow-line" />

      <ClientsSection />

      <div className="glow-line" />

      {/* CTA */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(222_95%_62%/0.08),transparent_60%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-balance max-w-3xl mx-auto">
              Ready to join the <span className="text-gradient">portfolio</span>?
            </h2>
            <p className="mt-6 text-steel-light max-w-lg mx-auto text-pretty text-lg">
              We're taking on a limited number of new client projects. Let's talk.
            </p>
            <Button size="lg" className="mt-10 glow-blue active:scale-[0.97]" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-1" size={16} />
              </Link>
            </Button>
          </ScrollReveal>
          <p className="mt-8 text-xs font-mono text-steel">
            {clients.length}+ websites delivered · 100% satisfaction
          </p>
        </div>
      </section>
    </main>
  );
};

export default Clients;
