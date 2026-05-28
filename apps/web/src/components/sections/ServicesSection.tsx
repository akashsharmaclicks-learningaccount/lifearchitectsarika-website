const services = [
  {
    title: "Numerology",
    description:
      "Gain meaningful insights through numbers connected with your name, birth date, and life path.",
  },
  {
    title: "Tarot",
    description:
      "Receive intuitive guidance and clarity for personal, emotional, and life-related questions.",
  },
  {
    title: "Reiki Healing",
    description:
      "Experience calming energy healing sessions focused on balance, relaxation, and inner peace.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">Services</p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Guidance for Every Phase of Life
          </h2>

          <p className="mt-4 text-gray-600">
            Explore personalized spiritual and numerology-based services designed to bring clarity,
            healing, and direction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>

              <p className="mt-4 text-sm leading-6 text-gray-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
