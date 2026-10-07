import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, PageHero, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/how-it-works")({
  head: () => meta("How Home Health Care Works | Elsmar Home Health Care", "Understand the steps to starting home health care with Elsmar in Detroit — from your first call to care at home."),
  component: How,
});

const STEPS = [
  ["Contact us", "Call (313) 961-5500 or submit a request online. Tell us a little about the patient's situation and we'll answer your questions."],
  ["Physician orders", "Home health services generally require orders from a physician or qualified provider. We'll coordinate with the patient's provider as needed."],
  ["Coverage review", "We'll help you understand insurance or Medicare eligibility questions before services begin."],
  ["Initial visit", "A clinician visits the home to assess the patient's needs, home environment, and goals."],
  ["Plan of care", "An individualized plan of care is developed in coordination with the patient's physician."],
  ["Ongoing care & communication", "Our team provides scheduled visits and keeps the patient, family, and physician informed of progress."],
];

function How() {
  return (
    <>
      <PageHero eyebrow="How it works" title="A clear, simple path to care at home." intro="Starting home health care can feel overwhelming. Here's what the process typically looks like." />
      <section className="py-24">
        <ol className="container-x max-w-4xl">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="grid gap-4 border-b py-10 md:grid-cols-[120px_1fr]">
              <span className="font-serif text-6xl italic text-gold">{i + 1}</span>
              <div><h2 className="text-2xl font-bold">{t}</h2><p className="mt-3 text-lg text-muted-foreground">{d}</p></div>
            </li>
          ))}
        </ol>
      </section>
      <FinalCTA title="Ready to take the first step?" />
    </>
  );
}
