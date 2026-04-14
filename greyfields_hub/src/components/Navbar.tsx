import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/compliance-club", label: "Compliance Club" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Corporate Compliance Club - Greyfields Advisory" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`hover:text-foreground transition-colors ${
                location.pathname === link.href ? "text-foreground" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-4 py-2 rounded-full hover:opacity-90 transition-all font-semibold"
          >
            Get Started
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
