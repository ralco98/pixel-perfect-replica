import { createFileRoute, Link } from "@tanstack/react-router";
import therapy from "@/assets/therapy.jpg";
import { SERVICES } from "@/lib/site";
import { FinalCTA, PageHero, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/services/")({
  head: () => meta("Home Health Services | Elsmar Home Health Care", "Skilled nursing, physical, occupational and speech therapy, medical social services, and home health aide support in Detroit."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Home health services designed around your needs." intro="Our services support patients at home while helping families stay informed and involved — all guided by each patient's plan of care." image={therapy} />
      <section className="py-24">
        <div className="container-x divide-y border-y">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group grid gap-4 py-10 md:grid-cols-12 md:items-center">
              <span className="font-display text-sm font-bold text-gold md:col-span-1">0{i + 1}</span>
              <h2 className="text-3xl font-bold group-hover:text-primary md:col-span-4">{s.name}</h2>
              <p className="text-lg text-muted-foreground md:col-span-5">{s.short}</p>
              <span className="link-arrow justify-self-start md:col-span-2 md:justify-self-end">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
