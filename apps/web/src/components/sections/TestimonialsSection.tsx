const testimonials = [
  {
    name: "Diksha Sharma",
    text: "The session gave me clarity and helped me understand my situation with a calmer mind.",
  },
  {
    name: "Anurag Sharma",
    text: "The guidance felt personal, thoughtful, and genuinely supportive.",
  },
  {
    name: "Kanchan Sharma",
    text: "A peaceful and insightful experience that helped me feel more balanced.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[var(--section-background)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Experiences Shared by Clients
          </h2>

          <p className="mt-4 text-[var(--muted)]">
            A few words from people who have experienced guidance, clarity, and healing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm leading-6 text-[var(--muted)]">“{testimonial.text}”</p>

              <p className="mt-5 text-sm font-semibold text-foreground">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
