export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} Life Architect Sarika. All rights reserved.
      </div>
    </footer>
  );
}