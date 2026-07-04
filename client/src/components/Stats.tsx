import ScrollReveal from "./ScrollReveal";

const STATS = [
  { value: "100%", label: "Real Rose Extract" },
  { value: "100%", label: "Farm-Fresh Milk" },
  { value: "0%", label: "Preservatives" },
  { value: "0%", label: "Artificial Flavors" },
];

export default function Stats() {
  return (
    <section className="relative z-10 bg-rose-ink py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} distance={20}>
              <div className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-rose mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm uppercase tracking-widest text-ivory/70">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
