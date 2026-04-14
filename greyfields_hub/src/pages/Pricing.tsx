import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "P1,850",
    period: "/year",
    features: ["Annual Returns filing", "Compliance reminders", "Corporate Compliance Calendar"],
    featured: false,
  },
  {
    name: "Silver",
    price: "P2,500",
    period: "/year",
    prefix: "Everything in Starter, plus:",
    features: ["Maintenance of corporate records", "Preparation of director or shareholder resolutions"],
    featured: false,
  },
  {
    name: "Gold",
    price: "P4,000",
    period: "/year",
    prefix: "Everything in Silver, plus:",
    features: ["Shareholder agreement guidance", "Corporate restructuring advisory", "Priority governance support"],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Platinum",
    price: "Custom",
    period: "",
    description: "Designed for companies requiring ongoing, high-touch corporate advisory and complex governance support.",
    features: [],
    featured: false,
    cta: "Contact for Advisory",
    ctaLink: "/contact",
  },
];

const Pricing = () => (
  <Layout>
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Corporate Compliance Club</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Structured compliance monitoring and guidance to ensure you never miss a corporate obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-3xl flex flex-col ${
                tier.featured
                  ? "bg-primary text-primary-foreground shadow-2xl lg:scale-105 relative z-10"
                  : "bg-card border border-border"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {tier.badge}
                </div>
              )}
              <h3
                className={`font-bold uppercase tracking-widest text-xs mb-4 ${
                  tier.featured ? "text-primary-foreground/60" : "text-muted-foreground"
                }`}
              >
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold tracking-tight tabular-nums">{tier.price}</span>
                {tier.period && (
                  <span className={tier.featured ? "text-primary-foreground/60 text-sm" : "text-muted-foreground text-sm"}>
                    {tier.period}
                  </span>
                )}
              </div>
              {tier.description && (
                <p className={`text-sm mb-8 flex-1 leading-relaxed ${tier.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
              )}
              {tier.features.length > 0 && (
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.prefix && (
                    <li className={`text-sm font-medium ${tier.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {tier.prefix}
                    </li>
                  )}
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${tier.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      <Check className={`w-5 h-5 flex-shrink-0 ${tier.featured ? "text-accent" : "text-accent"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                to={tier.ctaLink || "/contact"}
                className={`w-full py-3 rounded-xl font-semibold transition-colors text-center block ${
                  tier.featured
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {tier.cta || "Select Plan"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
