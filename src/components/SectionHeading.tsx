import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
}

const SectionHeading = ({ label, title, description, dark }: SectionHeadingProps) => (
  <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
    {label && (
      <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-primary" : "text-primary"}`}>
        {label}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl font-bold mt-2 text-balance ${dark ? "text-surface-dark-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-pretty ${dark ? "text-steel-light" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </ScrollReveal>
);

export default SectionHeading;
