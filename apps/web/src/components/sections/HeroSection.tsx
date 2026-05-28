export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--secondary)] blur-3xl" />

      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[var(--primary)]">
          Life Architect Sarika
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Find Clarity Through Numerology, Tarot & Energy Healing
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
          A calm space for guidance, self-awareness, and meaningful direction through intuitive
          consultation and healing practices.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)]"
          >
            Start Your Journey
          </a>

          <a
            href="#services"
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold text-foreground transition hover:border-[var(--primary)]"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
