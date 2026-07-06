import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

const STATS = [
  { value: "100%", label: "Real Rose Extract" },
  { value: "100%", label: "Farm-Fresh Milk" },
  { value: "0%", label: "Preservatives" },
  { value: "0%", label: "Artificial Flavors" },
];

export default function Stats() {
  return (
    <section className="relative z-10 bg-rose-ink py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
          style={{ perspective: "900px" }}
        >
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} distance={20} tilt3d>
              <div className="glass-card text-center py-6 px-3 rounded-2xl">
                <CountUp
                  value={stat.value}
                  className="font-display text-4xl md:text-5xl font-bold text-gradient-rose mb-2"
                />
                <p className="text-xs md:text-sm uppercase tracking-widest text-ivory/70">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full text-blush-lighter"
        viewBox="0 0 1440 40"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: "40px" }}
      >
        <path
          d="M0 40C240 10 480 0 720 0C960 0 1200 10 1440 40H0Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
