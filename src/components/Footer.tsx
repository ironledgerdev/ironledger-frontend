import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="relative border-t border-border bg-background">
    <div className="glow-line" />
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logo} alt="IronLedger Group" className="h-10 w-auto mb-4 opacity-80" />
          <p className="text-steel-light text-sm max-w-md text-pretty leading-relaxed">
            Building, owning, and supporting high-impact digital platforms. We turn bold ideas into scalable technology businesses.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-live" />
            <span className="text-xs font-mono text-steel">Systems Operational</span>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold mb-4 uppercase tracking-[0.2em] text-steel">Navigate</h4>
          <div className="flex flex-col gap-2">
            {[["About", "/about"], ["Companies", "/companies"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, to]) => (
              <Link key={to} to={to} className="text-sm text-steel-light hover:text-primary transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold mb-4 uppercase tracking-[0.2em] text-steel">Connect</h4>
          <a href="mailto:hello@ironledgergroup.com" className="text-sm text-steel-light hover:text-primary transition-colors font-mono">
            hello@ironledgergroup.com
          </a>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-xs text-steel font-mono">&copy; {new Date().getFullYear()} IronLedger Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
