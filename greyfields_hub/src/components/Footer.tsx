import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-muted-foreground py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-background rounded flex items-center justify-center">
          <span className="text-foreground font-bold text-[10px]">GA</span>
        </div>
        <span className="text-primary-foreground font-bold tracking-tight uppercase text-xs">
          Greyfields Advisory
        </span>
      </div>
      <div className="text-xs text-center">
        © {new Date().getFullYear()} Greyfields Advisory Services (Pty) Ltd. All rights reserved.
      </div>
      <div className="flex gap-6 text-xs font-medium">
        <Link to="/about" className="hover:text-primary-foreground transition-colors">
          About
        </Link>
        <Link to="/contact" className="hover:text-primary-foreground transition-colors">
          Contact
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
