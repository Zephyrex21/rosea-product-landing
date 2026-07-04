const FEATURES = [
  {
    icon: "local_florist",
    title: "Real Rose Extract",
    description:
      "Infused with the delicate, authentic essence of real roses, offering a floral sweetness that lingers with every sip.",
    accent: "primary" as const,
  },
  {
    icon: "water_drop",
    title: "Pure Milk Craft",
    description:
      "Made from the finest quality milk, delivering a rich, creamy texture with essential nutrients in every bottle.",
    accent: "gold" as const,
    ribbon: "No Preservatives",
  },
  {
    icon: "spa",
    title: "No Artificial Flavors",
    description:
      "No shortcuts, no synthetic notes. Just the honest taste of rose and milk, exactly as nature intended.",
    accent: "primary" as const,
  },
];

export default function Features() {
  return (
    <section
      className="relative z-10 py-24 bg-ivory transition-colors duration-300 scroll-mt-24"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-rose-primary tracking-widest uppercase mb-3">
            Why Choose Roséa
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-rose-ink">
            A Symphony of Taste and Elegance
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="relative overflow-hidden bg-surface p-8 rounded-2xl border border-rose-primary/10 hover:border-rose-primary/30 transition-all duration-300 group hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-rose-primary/5 text-center"
            >
              {feature.ribbon && (
                <div className="absolute top-0 right-0 bg-rose-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {feature.ribbon}
                </div>
              )}
              <div
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  feature.accent === "gold" ? "bg-rose-gold/10" : "bg-blush-light"
                }`}
              >
                <span
                  className={`material-icons text-3xl ${
                    feature.accent === "gold" ? "text-rose-gold" : "text-rose-primary"
                  }`}
                >
                  {feature.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-4 font-display">
                {feature.title}
              </h4>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
