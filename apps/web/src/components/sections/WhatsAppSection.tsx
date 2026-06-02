import { WHATSAPP_NUMBER } from "@/constants/contact";

export function WhatsAppSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--border)] bg-[var(--card)] p-10 text-center shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
          WhatsApp
        </p>

        <h2 className="mt-3 text-3xl font-bold text-foreground">Prefer a Direct Conversation?</h2>

        <p className="mt-4 text-[var(--muted)]">
          Reach out directly on WhatsApp for consultation inquiries and guidance.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)]"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
