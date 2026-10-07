import { createFileRoute } from "@tanstack/react-router";
import { FAQS } from "@/lib/site";
import { FAQList, FinalCTA, PageHero, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/faq")({
  head: () => meta("Home Health Care FAQ | Elsmar Home Health Care", "Answers to common questions about home health care, referrals, Medicare, and getting started with Elsmar in Detroit."),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions." />
      <section className="py-24"><div className="container-x max-w-4xl"><FAQList items={FAQS} /></div></section>
      <FinalCTA title="Still have questions?" />
    </>
  );
}
