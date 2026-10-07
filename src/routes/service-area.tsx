import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { ClientNote, FinalCTA, PageHero, meta } from "@/components/site/blocks";

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
          <ClientNote>Confirmed list of served cities and neighborhoods to be supplied by Elsmar.</ClientNote>
          <a href={SITE.tel} className="btn btn-primary">Call {SITE.phone} to confirm</a>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
