import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/referrals")({
  head: () => meta("Make a Referral | Elsmar Home Health Care", "Physicians, hospitals, and care teams: refer patients to Elsmar Home Health Care in Detroit. Call (313) 961-5500."),
  component: Referrals,
});

function Referrals() {
  return (
    <>
      <PageHero eyebrow="For healthcare providers" title="Make a referral." intro="We partner with physicians, discharge planners, and care teams to support patients at home." />
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">Fastest way to refer</h2>
            <p className="mt-4 text-muted-foreground">Call our office during business hours to speak with our team.</p>
            <a href={SITE.tel} className="btn btn-primary mt-6">Call {SITE.phone}</a>
            <p className="mt-6 text-sm text-muted-foreground">{SITE.hours}</p>
            <p className="mt-6 text-sm text-muted-foreground">Please don't submit protected health information through this website form. Our team will follow up to arrange secure transfer.</p>
          </div>
          <div className="lg:col-span-2"><ContactForm variant="referral" /></div>
        </div>
      </section>
    </>
  );
}
