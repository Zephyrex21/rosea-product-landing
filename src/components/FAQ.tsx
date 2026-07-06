import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Icon from "./Icon";

const FAQS = [
  {
    q: "What does Roséa taste like?",
    a: "A light, floral rose sweetness balanced with creamy milk — closer to a delicate rose lassi than a heavy syrup. It's meant to be gentle, not overpowering.",
  },
  {
    q: "Is Roséa vegan?",
    a: "No — Roséa is made with real dairy milk, so it isn't suitable for a vegan diet.",
  },
  {
    q: "Does it contain caffeine?",
    a: "No. Roséa is a milk-based drink with no coffee or tea extract, so it's naturally caffeine-free.",
  },
  {
    q: "How should I store it, and how long does it last?",
    a: "Keep it refrigerated at all times. Unopened, it's best enjoyed within the date printed on the cap. Once opened, we recommend finishing it within 2 days.",
  },
  {
    q: "Is it suitable for kids?",
    a: "Yes, as a dairy-based drink it's generally fine for kids — though as always, check with a pediatrician if your child has a milk allergy or specific dietary needs.",
  },
  {
    q: "Where can I buy Roséa?",
    a: "Check the Store Locator section above for supermarkets and boutique cafés carrying Roséa near you, or order through our delivery partners.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative z-10 py-24 bg-blush-lighter scroll-mt-24"
      id="faq"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-sm font-bold text-rose-primary tracking-widest uppercase mb-3">
            Good to Know
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-rose-ink">
            Frequently Asked Questions
          </h3>
        </ScrollReveal>

        <div className="space-y-3" style={{ perspective: "900px" }}>
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={item.q} delay={i * 0.06} distance={16} tilt3d>
                <div className="bg-surface rounded-2xl border border-rose-primary/10 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="font-semibold text-rose-ink">{item.q}</span>
                    <Icon
                      name="expand_more"
                      className={`text-rose-primary flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden={true}
                    />
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-muted leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
