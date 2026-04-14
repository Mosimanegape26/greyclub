import Layout from "@/components/Layout";
import { ShieldCheck, Scale, Layers } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Governance", desc: "Establishing proper governance structures that align with best practices and regulatory requirements." },
  { icon: Scale, title: "Compliance", desc: "Ensuring companies meet their statutory obligations consistently and on time." },
  { icon: Layers, title: "Structure", desc: "Building organisational frameworks that support sustainable growth and accountability." },
];

const About = () => (
  <Layout>
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          About Greyfields Advisory Services
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
          Greyfields Advisory Services (Pty) Ltd is a corporate governance and compliance advisory practice based in Botswana.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          The firm assists companies in establishing proper governance structures and maintaining compliance with statutory obligations. The Corporate Compliance Club provides structured compliance support to companies across Botswana.
        </p>
      </div>
    </section>

    <section className="py-20 bg-muted px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Our Three Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card p-8 rounded-2xl card-shadow text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 mx-auto">
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
