import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro?: string; image?: string }) {
  return (
    <section className={`relative overflow-hidden ${image ? "bg-photo-overlay text-primary-foreground" : "bg-warm"}`}>
      {image && <><img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" width={1200} height={900} /><div className="photo-shade absolute inset-0" /></>}
      <div className={`container-x relative py-14 md:py-20 ${image ? "flex min-h-[460px] items-center" : ""}`}>
        <div className="fade-up max-w-2xl">
          <p className={`eyebrow ${image ? "text-primary-foreground" : ""}`}>{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.12] md:text-5xl">{title}</h1>
          {intro && <p className={`mt-6 max-w-xl text-lg leading-relaxed ${image ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{intro}</p>}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function FinalCTA({ title = "Let's talk about care at home.", text = "Our team is here to answer your questions and help you understand the next step." }: { title?: string; text?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-x py-20 text-center md:py-28">
        <p className="eyebrow text-gold">Elsmar Home Health Care</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">{text}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-light">Request Home Health Services</Link>
          <a href={SITE.tel} className="btn border border-primary-foreground/40 hover:bg-primary-foreground/10">Call {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y border-y">
      {items.map((f) => (
        <details key={f.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold">
            {f.q}
            <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ClientNote({ children }: { children: React.ReactNode }) {
  return <p className="border-l-2 border-gold bg-warm px-5 py-4 text-sm text-muted-foreground">{children}</p>;
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
