export function CTASection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-[var(--primary)] px-6 py-14 text-center text-white md:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/80">
          Ready for Guidance?
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
          Take the First Step Towards Clarity, Balance, and Self-Awareness
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-white/80">
          Whether you are seeking direction, emotional balance, or deeper insight, Life Architect
          Sarika is here to guide you with compassion and care.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--secondary)]"
        >
          Book Your Consultation
        </a>
      </div>
    </section>
  );
}
