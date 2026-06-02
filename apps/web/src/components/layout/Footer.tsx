export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <h3 className="text-lg font-semibold text-foreground">
          Life Architect Sarika
        </h3>

        <p className="mt-2 text-sm text-[var(--muted)]">
          Guidance through Numerology, Tarot & Reiki Healing
        </p>

        <p className="mt-6 text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Life Architect Sarika. All rights reserved.
        </p>
      </div>
    </footer>
  );
}