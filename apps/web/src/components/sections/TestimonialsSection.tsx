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
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Experiences Shared by Clients
          </h2>

          <p className="mt-4 text-gray-600">
            A few words from people who have experienced guidance, clarity, and healing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-6 text-gray-600">“{testimonial.text}”</p>

              <p className="mt-5 text-sm font-semibold text-gray-900">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
