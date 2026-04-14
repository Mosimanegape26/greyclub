import Layout from "@/components/Layout";
import { useState } from "react";
import { Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch shortly.");
    setForm({ name: "", company: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">Get in touch</h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to professionalize your corporate governance? Our team is standing by to assist you with the Corporate Compliance Club or bespoke advisory services.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+267 71668743</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">Gaborone, Botswana</span>
              </div>
            </div>
            <a
              href="https://wa.me/26771668743"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-whatsapp text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Company Name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:outline-none transition-all"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:outline-none transition-all"
            />
            <textarea
              rows={4}
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
