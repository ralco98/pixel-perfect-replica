import { createFileRoute } from "@tanstack/react-router";
import { ClientNote, FAQList, FinalCTA, PageHero, SectionHead, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/insurance")({
  head: () => meta("Medicare & Insurance for Home Health | Elsmar Home Health Care", "Learn how Medicare and insurance coverage for home health care may work, and contact Elsmar to discuss your options."),
  component: Insurance,
});

function Insurance() {
  return (
    <>
      <PageHero eyebrow="Medicare & Insurance" title="Understanding coverage for home health care." intro="Coverage questions are common. We're happy to help you understand your options before care begins." />
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <SectionHead title="Medicare and home health" />
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Medicare may cover home health services for eligible patients. Eligibility generally depends on factors such as being under the care of a physician, having a plan of care, needing skilled services, and being considered homebound.</p>
            <p>Every situation is different. Contact our office and we'll help you understand what may apply to you.</p>
            <ClientNote>List of accepted insurance plans to be confirmed and supplied by Elsmar.</ClientNote>
          </div>
        </div>
        <div className="container-x mt-20">
          <FAQList items={[
            { q: "What does 'homebound' mean?", a: "Generally, it means leaving home requires considerable effort or assistance. Your physician determines whether this applies." },
            { q: "Will I have out-of-pocket costs?", a: "This depends on your coverage. We'll discuss any potential costs with you before services start." },
            { q: "Can you check my insurance?", a: "Yes — call our office and we'll help review your coverage." },
          ]} />
        </div>
      </section>
      <FinalCTA title="Have a coverage question?" />
    </>
  );
}
