import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const About = () => (
  <main>
    <section className="bg-surface-dark pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-bold text-surface-dark-foreground text-balance">About IronLedger Group</h1>
          <p className="mt-6 text-lg text-steel-light max-w-xl text-pretty">
            A technology holding company focused on building and scaling impactful digital businesses.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-foreground mb-4">Company Overview</h2>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            IronLedger Group is a premium technology holding company. We build, own, and support digital platforms across multiple industries — from healthcare to transport. Our approach combines strategic thinking with deep technical capability to create businesses that deliver lasting value.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            To build a portfolio of impactful digital companies that solve real problems and create meaningful value — for users, partners, and the broader ecosystem.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            To design, build, and scale technology-driven platforms that transform industries. We bring together product thinking, engineering excellence, and business strategy under one roof.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">How We Work</h2>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            IronLedger Group operates as a holding company — we own and support multiple technology businesses. Each company in our portfolio operates with its own brand and team, while benefitting from shared resources, infrastructure, and strategic guidance from the group.
          </p>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default About;
