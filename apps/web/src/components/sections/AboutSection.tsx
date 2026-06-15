import { aboutContent } from "@/content/about";
import Image from "next/image";
export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
            {aboutContent.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            {aboutContent.heading}
          </h2>

          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 leading-7 text-[var(--muted)]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-3xl bg-[var(--section-background)] p-8">
          <div className="rounded-2xl bg-[var(--card)] p-6 shadow-sm">
            <div className="mx-auto max-w-xs overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--section-background)] p-2 shadow-sm">
              <Image
                src="/images/sarika-profile.jpg"
                alt="Sarika"
                width={400}
                height={500}
                className="h-80 w-full rounded-2xl object-cover object-top"
              />
            </div>

            <h3 className="mt-6 text-center text-xl font-semibold text-foreground">
              {aboutContent.profile.name}
            </h3>

            <p className="mt-2 text-center text-sm text-[var(--muted)]">
              {aboutContent.profile.expertise}
            </p>

            <div className="mt-6 border-t border-[var(--border)] pt-6">
              <ul className="space-y-4 text-sm leading-6 text-[var(--muted)]">
                {aboutContent.profile.approach.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
