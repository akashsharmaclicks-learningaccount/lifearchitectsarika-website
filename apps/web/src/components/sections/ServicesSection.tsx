import { Gem, Sparkles, WandSparkles } from "lucide-react";

const services = [
  {
    title: "Numerology",
    description:
      "Gain meaningful insights through numbers connected with your name, birth date, and life path.",
    icon: Gem,
  },
  {
    title: "Tarot",
    description:
      "Receive intuitive guidance and clarity for personal, emotional, and life-related questions.",
    icon: Sparkles,
  },
  {
    title: "Reiki Healing",
    description:
      "Experience calming energy healing sessions focused on balance, relaxation, and inner peace.",
    icon: WandSparkles,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[var(--section-background)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Guidance for Every Phase of Life
          </h2>

          <p className="mt-4 text-[var(--muted)]">
            Explore personalized spiritual and numerology-based services designed to bring clarity,
            healing, and direction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-[var(--secondary)] p-3 text-[var(--primary)]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>

                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
