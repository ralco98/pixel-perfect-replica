import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact & Request Care | Elsmar Home Health Care Detroit", "Request home health services or contact Elsmar Home Health Care at 2727 2nd Ave #156, Detroit, MI. Call (313) 961-5500."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Request home health services." intro="Call our office to discuss your needs, or prepare your inquiry details below before you call." />
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-3">
          <div className="space-y-8">
            <div><h2 className="eyebrow">Phone</h2><a href={SITE.tel} className="mt-2 block font-display text-2xl font-bold text-primary">{SITE.phone}</a></div>
            <div><h2 className="eyebrow">Office</h2><address className="mt-2 not-italic text-lg">{SITE.address1}<br />{SITE.address2}</address>
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="link-arrow mt-3 inline-block">Get directions →</a></div>
            <div><h2 className="eyebrow">Hours</h2><p className="mt-2 text-lg">{SITE.hours}</p></div>
            <div><h2 className="eyebrow">Accessibility</h2><p className="mt-2 text-muted-foreground">Wheelchair-accessible entrance and parking.</p></div>
          </div>
          <div className="lg:col-span-2"><ContactForm /></div>
        </div>
      </section>
      <iframe title="Map to Elsmar Home Health Care" className="h-[420px] w-full border-0" loading="lazy" src="https://www.google.com/maps?q=2727+2nd+Ave+%23156+Detroit+MI+48201&output=embed" />
    </>
  );
}
