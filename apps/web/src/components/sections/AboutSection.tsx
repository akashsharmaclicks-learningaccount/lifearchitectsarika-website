export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">About</p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Meet Sarika, Your Guide Towards Clarity and Inner Balance
          </h2>

          <p className="mt-5 leading-7 text-[var(--muted)]">
            Life Architect Sarika offers guidance through numerology, tarot, and Reiki healing to
            help individuals find clarity, emotional balance, and meaningful direction in life.
          </p>

          <p className="mt-4 leading-7 text-[var(--muted)]">
            Every session is designed with compassion, intuition, and personal attention, creating a
            safe space for people to reflect, heal, and move forward with confidence.
          </p>
        </div>

        <div className="rounded-3xl bg-[var(--section-background)] p-8">
          <div className="rounded-2xl bg-[var(--card)] p-6 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
              Approach
            </p>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted)]">
              <li>• Personalized spiritual guidance</li>
              <li>• Supportive and calm consultation experience</li>
              <li>• Focus on clarity, healing, and self-awareness</li>
              <li>• Practical insights for life decisions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
