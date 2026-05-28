import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-gray-100 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">Contact</p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">Start Your Consultation Journey</h2>

          <p className="mt-4 text-gray-600">
            Fill out the form below and we will reach out to you shortly.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
