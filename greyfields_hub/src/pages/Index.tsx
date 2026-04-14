import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Building2, CalendarCheck, FileText, Users, RefreshCw, Receipt, ArrowRight } from "lucide-react";

const services = [
  { icon: Building2, title: "Company Registration", desc: "Seamless incorporation and setup of new corporate entities." },
  { icon: CalendarCheck, title: "Annual Returns", desc: "Timely filing and compliance monitoring to keep your status active." },
  { icon: FileText, title: "Company Constitutions", desc: "Drafting robust company constitutions tailored to your business." },
  { icon: Users, title: "Shareholder Agreements", desc: "Protecting stakeholder interests with clear, enforceable agreements." },
  { icon: RefreshCw, title: "Corporate Restructuring", desc: "Strategic restructuring advisory for evolving business needs." },
  { icon: Receipt, title: "Tax Compliance Coordination", desc: "Coordinating tax obligations alongside corporate governance." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-bold tracking-widest uppercase mb-6">
            Governance • Compliance • Structure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Corporate Governance{" "}
            <span className="text-accent">Made Simple.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Greyfields Advisory Services assists companies with corporate governance and statutory compliance support. Through our Corporate Compliance Club programme, we help companies maintain proper corporate records, meet statutory obligations and establish sound governance structures.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/compliance-club"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-lg transition-all active:scale-95"
            >
              Explore the Compliance Club
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-background text-foreground font-semibold rounded-xl border border-border hover:bg-secondary transition-all"
            >
              Contact Advisory
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Core Advisory Services</h2>
            <p className="text-muted-foreground">Comprehensive support for Botswana's evolving corporate landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card p-8 rounded-2xl card-shadow group hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to simplify your compliance?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Join the Corporate Compliance Club and let us handle the governance complexity so you can focus on growing your business.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-lg transition-all active:scale-95"
          >
            View Membership Options <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
