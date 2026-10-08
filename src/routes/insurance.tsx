import { createFileRoute } from "@tanstack/react-router";
import { FAQList, FinalCTA, PageHero, SectionHead, meta } from "@/components/site/blocks";

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
            <p className="border-l-2 border-gold pl-5 text-base">Please call to confirm whether your specific plan is accepted. Coverage and eligibility must be reviewed individually; this page is not a guarantee of benefits.</p>
          </div>
        </div>
        <div className="container-x mt-20">
          <h2 className="mb-6 text-2xl font-bold">Before you call</h2>
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground">Have the name of your insurance plan, your referring provider, and a general description of your care needs ready. Share policy numbers and personal medical information directly with our office, not through the website.</p>
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
