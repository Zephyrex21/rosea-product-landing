import ScrollReveal from "./ScrollReveal";

const NUTRIENTS = [
  { label: "Total Fat 6g", dv: "8%", bold: true },
  { label: "Saturated Fat 3.5g", dv: "18%", indent: true },
  { label: "Cholesterol 20mg", dv: "7%", bold: true },
  { label: "Sodium 105mg", dv: "5%", bold: true },
  { label: "Total Carbohydrate 24g", dv: "9%", bold: true },
  { label: "Dietary Fiber 0g", dv: "0%", indent: true },
  { label: "Total Sugars 22g", dv: null, indent: true },
  { label: "Includes 14g Added Sugars", dv: "28%", indent: true, small: true },
  { label: "Protein 7g", dv: null, bold: true },
];

const MINOR_NUTRIENTS = [
  { label: "Vitamin D 2mcg", dv: "10%" },
  { label: "Calcium 250mg", dv: "20%" },
  { label: "Iron 0.2mg", dv: "1%" },
  { label: "Potassium 320mg", dv: "7%" },
];

export default function NutritionFacts() {
  return (
    <section className="relative z-10 py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-bold text-rose-primary tracking-widest uppercase mb-3">
            The Fine Print
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-rose-ink">
            Nutrition &amp; Ingredients
          </h3>
        </ScrollReveal>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          style={{ perspective: "1000px" }}
        >
          <ScrollReveal direction="left" tilt3d>
            {/* Classic nutrition label styling */}
            <div className="bg-surface border-2 border-rose-ink rounded-lg p-5 font-sans max-w-sm mx-auto md:mx-0">
              <h4 className="text-3xl font-black text-rose-ink border-b-8 border-rose-ink pb-1 mb-1">
                Nutrition Facts
              </h4>
              <p className="text-sm text-rose-ink pb-1 border-b border-rose-ink">
                Serving Size 1 bottle (250ml)
              </p>
              <p className="text-xs text-rose-ink pt-1">Amount Per Serving</p>
              <div className="flex items-baseline justify-between border-b-4 border-rose-ink pb-1 mb-1">
                <span className="text-xl font-bold text-rose-ink">Calories</span>
                <span className="text-2xl font-black text-rose-ink">180</span>
              </div>
              <p className="text-right text-xs font-semibold text-rose-ink border-b border-rose-ink pb-1 mb-1">
                % Daily Value*
              </p>
              {NUTRIENTS.map((n) => (
                <div
                  key={n.label}
                  className={`flex items-center justify-between border-b border-rose-ink/30 py-1 text-sm text-rose-ink ${
                    n.indent ? "pl-4" : ""
                  } ${n.small ? "text-xs" : ""}`}
                >
                  <span className={n.bold ? "font-bold" : ""}>{n.label}</span>
                  {n.dv && <span className="font-bold">{n.dv}</span>}
                </div>
              ))}
              {MINOR_NUTRIENTS.map((n) => (
                <div
                  key={n.label}
                  className="flex items-center justify-between border-b border-rose-ink/30 py-1 text-sm text-rose-ink"
                >
                  <span>{n.label}</span>
                  <span className="font-bold">{n.dv}</span>
                </div>
              ))}
              <p className="text-[10px] text-muted pt-2 leading-snug">
                *The % Daily Value tells you how much a nutrient in a
                serving of food contributes to a daily diet. Values are
                illustrative for this product concept.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="space-y-8">
            <div>
              <h4 className="text-xl font-bold font-display mb-3 text-rose-ink">
                Ingredients
              </h4>
              <p className="text-muted leading-relaxed">
                Milk, Sugar, Rose Extract, Rose Water, Natural Rose Flavor,
                Stabilizer (Pectin).
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold font-display mb-3 text-rose-ink">
                Allergen Information
              </h4>
              <p className="text-muted leading-relaxed">
                Contains milk. Made in a facility that also processes tree
                nuts.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {["No Preservatives", "No Artificial Flavors", "Gluten-Free"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-rose-primary/10 text-rose-primary text-xs font-semibold uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
