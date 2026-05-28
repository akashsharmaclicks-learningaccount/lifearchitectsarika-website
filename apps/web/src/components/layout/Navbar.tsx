import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
          Life Architect Sarika
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <a href="#services" className="hover:text-gray-900">
            Services
          </a>
          <a href="#about" className="hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="hover:text-gray-900">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
