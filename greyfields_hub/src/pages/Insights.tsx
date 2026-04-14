import Layout from "@/components/Layout";

const articles = [
  { category: "Compliance", title: "Understanding Annual Returns Requirements", preview: "A guide to staying compliant with the Companies and Intellectual Property Authority (CIPA)." },
  { category: "Governance", title: "The Importance of Company Constitutions", preview: "Why a generic constitution might be putting your business at risk." },
  { category: "Advisory", title: "When Companies Should Consider Shareholder Agreements", preview: "Key moments when a shareholder agreement becomes essential for business protection." },
  { category: "SME Growth", title: "Common Corporate Compliance Mistakes by SMEs", preview: "Avoid these common pitfalls that could lead to penalties or deregistration." },
  { category: "Strategy", title: "The Role of Corporate Governance in Growing Businesses", preview: "How good governance structures support sustainable business growth in Botswana." },
];

const Insights = () => (
  <Layout>
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Corporate Governance Insights</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert perspectives on compliance for Botswana businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article key={a.title} className="bg-card rounded-2xl overflow-hidden card-shadow hover:-translate-y-1 transition-all">
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4 block">
                  {a.category}
                </span>
                <h3 className="text-xl font-bold mb-3 leading-tight text-card-foreground">{a.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{a.preview}</p>
                <button className="text-foreground font-bold text-sm hover:text-accent transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Insights;
