import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import Icon from "./Icon";

const FEATURES: {
  icon: "local_florist" | "water_drop" | "spa";
  title: string;
  description: string;
  accent: "primary" | "gold";
  ribbon?: string;
}[] = [
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
      className="relative z-10 py-24 bg-ivory transition-colors duration-300 scroll-mt-24 overflow-hidden"
      id="features"
    >
      {/* soft ambient glow, purely decorative, drifts slowly */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blush/20 rounded-full blur-3xl animate-[float-blob_14s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-gold/10 rounded-full blur-3xl animate-[float-blob_18s_ease-in-out_infinite_reverse]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-rose-primary tracking-widest uppercase mb-3">
            Why Choose Roséa
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gradient-rose">
            A Symphony of Taste and Elegance
          </h3>
          <svg
            className="w-16 h-4 mx-auto mt-4 text-rose-primary/50"
            viewBox="0 0 64 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0" y1="8" x2="26" y2="8" stroke="currentColor" strokeWidth="1" />
            <circle cx="32" cy="8" r="3" fill="currentColor" />
            <line x1="38" y1="8" x2="64" y2="8" stroke="currentColor" strokeWidth="1" />
          </svg>
        </ScrollReveal>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          style={{ perspective: "1200px" }}
        >
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.15} tilt3d>
              <TiltCard className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-rose-primary/0 via-rose-gold/0 to-rose-primary/0 hover:from-rose-primary/60 hover:via-rose-gold/40 hover:to-rose-primary/60 transition-colors duration-500 h-full">
                <div className="relative overflow-hidden bg-surface p-8 rounded-2xl border border-rose-primary/10 group-hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-rose-primary/15 text-center h-full">
                  {feature.ribbon && (
                    <div className="absolute top-0 right-0 bg-rose-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                      {feature.ribbon}
                    </div>
                  )}

                  {/* corner petal accent, fades in on hover */}
                  <svg
                    className="absolute -bottom-2 -left-2 w-16 h-16 text-rose-primary/0 group-hover:text-rose-primary/10 transition-all duration-500 rotate-12 group-hover:rotate-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2c4 3 6 7 6 10a6 6 0 1 1-12 0c0-3 2-7 6-10z" />
                  </svg>

                  <div
                    className={`relative w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ${
                      feature.accent === "gold" ? "bg-rose-gold/10" : "bg-blush-light"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${
                        feature.accent === "gold" ? "bg-rose-gold/40" : "bg-rose-primary/30"
                      }`}
                    />
                    <Icon
                      name={feature.icon}
                      size={28}
                      className={`relative ${
                        feature.accent === "gold" ? "text-rose-gold" : "text-rose-primary"
                      }`}
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-4 font-display relative">
                    {feature.title}
                  </h4>
                  <p className="text-muted leading-relaxed relative">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
