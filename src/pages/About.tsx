import ScrollReveal from "@/components/ScrollReveal";
import logo from "@/assets/logo.png";

const values = [
  { label: "Vision", text: "Building a portfolio of impactful digital companies that solve real problems and create meaningful value." },
  { label: "Mission", text: "To design, build, and scale technology-driven platforms that transform industries. We bring together product thinking, engineering excellence, and business strategy." },
  { label: "Structure", text: "IronLedger Group operates as a holding company — we own and support multiple technology businesses. Each company operates independently while benefitting from shared resources and strategic guidance." },
];

const About = () => (
  <main className="relative">
    <img src={logo} alt="" className="watermark top-[30%] left-1/2 -translate-x-1/2 w-[700px]" aria-hidden="true" />

    <section className="relative min-h-[60vh] flex items-end bg-grid overflow-hidden">
      <div className="scan-line" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(210_100%_56%/0.08),transparent_50%)]" />
      <div className="container mx-auto px-6 pb-20 pt-40 relative z-10">
        <ScrollReveal>
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">// about</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 text-balance max-w-4xl">
            About <span className="text-gradient">IronLedger Group</span>
          </h1>
          <p className="mt-6 text-lg text-steel-light max-w-xl text-pretty">
            A technology holding company focused on building and scaling impactful digital businesses.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <div className="glow-line" />

    <section className="py-28 md:py-36">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <p className="text-xl md:text-2xl text-steel-light text-pretty leading-relaxed max-w-3xl">
            IronLedger Group is a premium technology holding company. We build, own, and support digital platforms across multiple industries — from healthcare to transport. Our approach combines strategic thinking with deep technical capability to create businesses that deliver lasting value.
          </p>
        </ScrollReveal>

        <div className="mt-20 space-y-12">
          {values.map((v, i) => (
            <ScrollReveal key={v.label} delay={i * 80}>
              <div className="glass-card rounded-xl p-8 gradient-border hover-lift transition-all duration-300">
                <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
                  // {v.label.toLowerCase()}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-3">{v.label}</h3>
                <p className="mt-3 text-steel-light text-pretty leading-relaxed">{v.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
