import { createFileRoute } from "@tanstack/react-router";
import family from "@/assets/family.jpg";
import { FinalCTA, PageHero, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/who-we-serve")({
  head: () => meta("Who We Serve | Elsmar Home Health Care Detroit", "Home health care for adults recovering from surgery or illness, managing chronic conditions, and the families who support them."),
  component: Who,
});

const GROUPS = [
  ["Patients recovering at home", "After a hospital stay, surgery, or illness, home health can support a safer transition home."],
  ["Adults managing chronic conditions", "Skilled monitoring and education to help patients manage ongoing health needs."],
  ["Older adults who want to stay home", "Care that supports safety and independence in familiar surroundings."],
  ["Families & caregivers", "Guidance, education, and communication so you can support your loved one with confidence."],
  ["Physicians & care teams", "A home health partner for patients who need care after discharge or between visits."],
];

function Who() {
  return (
    <>
      <PageHero eyebrow="Who we serve" title="Care for patients — and support for the people who love them." image={family} />
      <section className="py-24">
        <div className="container-x grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map(([t, d]) => (
            <div key={t} className="bg-background p-10"><h2 className="text-2xl font-bold">{t}</h2><p className="mt-4 text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
