import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { FinalCTA, PageHero, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/service-area")({
  head: () => meta("Service Area | Home Health Care in Detroit, MI | Elsmar", "Elsmar Home Health Care is based in Detroit, Michigan. Call to confirm service at your address."),
  component: Area,
});

function Area() {
  return (
    <>
      <PageHero eyebrow="Service area" title="Home health care in Detroit, Michigan." intro={`Our office is at ${SITE.address1}, ${SITE.address2}. Call us to confirm whether we can provide care at your address.`} />
      <section className="py-24">
        <div className="container-x max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold">Confirm care in your neighborhood</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">Tell our team your city or ZIP code and the type of care you are looking for. We'll confirm whether services can be arranged at your address and explain the next step.</p>
            <div className="border-y py-6"><h3 className="text-lg font-bold">Our Detroit office</h3><address className="mt-3 not-italic text-muted-foreground">{SITE.address1}<br />{SITE.address2}</address><a href={SITE.mapsUrl} className="link-arrow mt-5 inline-block" target="_blank" rel="noreferrer">Get directions →</a></div>
          <a href={SITE.tel} className="btn btn-primary">Call {SITE.phone} to confirm</a>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
