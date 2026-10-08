import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import hero from "@/assets/hero.jpg";
import therapy from "@/assets/therapy.jpg";
import family from "@/assets/family.jpg";
import { SERVICES, SITE } from "@/lib/site";
import { FinalCTA, PageHero, meta } from "@/components/site/blocks";

const IMAGES: Record<string, string> = { "skilled-nursing": hero, "physical-therapy": therapy, "occupational-therapy": therapy, "speech-therapy": family, "medical-social-services": family, "home-health-aide": family };

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    loaderData ? meta(`${loaderData.service.name} at Home in Detroit | Elsmar Home Health Care`, loaderData.service.short) : meta("Service | Elsmar", "Home health services in Detroit."),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  return (
    <>
      <PageHero eyebrow="Home health services" title={service.name} intro={service.intro} image={IMAGES[service.slug] ?? hero} />
      <div className="container-x flex flex-wrap items-center justify-between gap-5 border-b py-6">
        <Link to="/services" className="link-arrow">← All services</Link>
        <div className="flex flex-wrap gap-3"><Link to="/contact" className="btn btn-primary">Request Care</Link><a href={SITE.tel} className="btn btn-outline">Call {SITE.phone}</a></div>
      </div>
      <section className="py-24">
        <div className="container-x grid gap-16 md:grid-cols-2">
          <List title="Who it may help" items={service.helps} />
          <List title="What it may include" items={service.includes} />
        </div>
        <p className="container-x mt-14 text-sm text-muted-foreground">Services are provided according to each patient's individual plan of care and physician orders.</p>
      </section>
      <section className="bg-mist py-20">
        <div className="container-x">
          <h2 className="text-2xl font-bold">Related services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="bg-background p-6 font-display font-bold hover:text-primary">{s.name} →</Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <ul className="mt-8 space-y-4">
        {items.map((i) => (
          <li key={i} className="flex gap-3 border-b pb-4 text-lg"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" />{i}</li>
        ))}
      </ul>
    </div>
  );
}
