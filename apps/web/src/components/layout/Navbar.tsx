import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          Life Architect Sarika
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] md:flex">
          <a href="#services" className="transition hover:text-foreground">
            Services
          </a>
          <a href="#about" className="transition hover:text-foreground">
            About
          </a>
          <a href="#contact" className="transition hover:text-foreground">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
