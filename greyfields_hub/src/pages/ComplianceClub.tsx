import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Building2, CalendarCheck, FileText, Users, RefreshCw, Receipt, ArrowRight, ShieldCheck } from "lucide-react";

const features = [
  { icon: Building2, title: "Company Registration", desc: "Full incorporation support and entity setup." },
  { icon: CalendarCheck, title: "Annual Returns", desc: "Timely filing to maintain good standing." },
  { icon: FileText, title: "Company Constitutions", desc: "Tailored constitutions for your business structure." },
  { icon: Users, title: "Shareholder Agreements", desc: "Clear agreements to protect all stakeholders." },
  { icon: RefreshCw, title: "Corporate Restructuring", desc: "Strategic guidance for organisational changes." },
  { icon: Receipt, title: "Tax Compliance Coordination", desc: "Aligned tax and governance compliance." },
];

const ComplianceClub = () => (
  <Layout>
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-bold tracking-widest uppercase mb-6">
          <ShieldCheck className="w-3 h-3" /> Membership Programme
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Corporate Compliance Club
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
          The Corporate Compliance Club is a structured compliance support programme administered by Greyfields Advisory Services.
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The programme assists companies with maintaining proper corporate records and meeting statutory compliance obligations while benefiting from organised corporate governance support.
        </p>
      </div>
    </section>

    <section className="py-20 bg-muted px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Programme Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-card p-8 rounded-2xl card-shadow group hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Additional Value</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Members benefit from structured compliance monitoring and guidance to avoid missing important corporate obligations.
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

export default ComplianceClub;
