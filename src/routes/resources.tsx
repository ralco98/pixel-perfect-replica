import { createFileRoute, Link } from "@tanstack/react-router";
import { FinalCTA, PageHero, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/resources")({
  head: () => meta("Home Health Resources for Families | Elsmar Home Health Care", "Helpful guides for patients and families navigating home health care in Detroit."),
  component: Resources,
});

const GUIDES = [
  { tag: "Getting started", title: "What is home health care?", text: "The difference between home health and other in-home support.", to: "/faq" },
  { tag: "Coverage", title: "Medicare and home health basics", text: "General information about eligibility and coverage.", to: "/insurance" },
  { tag: "Process", title: "What to expect at the first visit", text: "How a plan of care is created with you.", to: "/how-it-works" },
  { tag: "Families", title: "Supporting a loved one at home", text: "How families can stay involved in care.", to: "/who-we-serve" },
  { tag: "Providers", title: "Referring a patient", text: "How physicians and care teams can refer.", to: "/referrals" },
  { tag: "Questions", title: "Frequently asked questions", text: "Answers to the questions we hear most.", to: "/faq" },
] as const;

function Resources() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Helpful information for patients and families." />
      <section className="py-24">
        <div className="container-x grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g) => (
            <Link key={g.title} to={g.to} className="group border-t-2 border-primary pt-6">
              <p className="eyebrow text-gold">{g.tag}</p>
              <h2 className="mt-3 text-2xl font-bold group-hover:text-primary">{g.title}</h2>
              <p className="mt-3 text-muted-foreground">{g.text}</p>
              <span className="link-arrow mt-5 inline-block">Read →</span>
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
