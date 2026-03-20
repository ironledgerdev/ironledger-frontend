import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-surface-dark text-surface-dark-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold mb-3">IronLedger Group</h3>
          <p className="text-steel-light text-sm max-w-md text-pretty">
            Building, owning, and supporting high-impact digital platforms. We turn bold ideas into scalable technology businesses.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-steel-light">Navigate</h4>
          <div className="flex flex-col gap-2">
            {[["About", "/about"], ["Companies", "/companies"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, to]) => (
              <Link key={to} to={to} className="text-sm text-steel-light hover:text-primary transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-steel-light">Connect</h4>
          <p className="text-sm text-steel-light">hello@ironledgergroup.com</p>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-steel/20 text-center">
        <p className="text-xs text-steel">&copy; {new Date().getFullYear()} IronLedger Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
