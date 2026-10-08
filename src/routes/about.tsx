import { createFileRoute } from "@tanstack/react-router";
import team from "@/assets/team.jpg";
import { FinalCTA, PageHero, SectionHead, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/about")({
  head: () => meta("About Elsmar Home Health Care | Detroit, MI", "Learn about Elsmar Home Health Care, a Detroit-based home health agency focused on professional, compassionate care at home."),
  component: About,
});

const VALUES = [
  ["Compassion", "We treat every patient with dignity, patience, and respect."],
  ["Clinical excellence", "Care is guided by each patient's plan of care and delivered professionally."],
  ["Communication", "We keep patients, families, and physicians informed and involved."],
  ["Community", "We're proud to be part of the Detroit community we serve."],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Elsmar" title="Care that feels like it belongs at home." intro="Elsmar Home Health Care is a Detroit-based home health care agency providing professional services in the comfort of patients' homes." image={team} />
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <SectionHead eyebrow="Our mission" title="Professional home health care, right where you need it." />
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>We believe people often heal best in familiar surroundings. Our role is to bring skilled clinical care into the home and to support the families who care for the people they love.</p>
            <p>Each patient's needs are different. Care is coordinated with the patient's physician, with attention to practical goals, clear communication, and the routines of everyday life.</p>
          </div>
        </div>
      </section>
      <section className="bg-mist py-24">
        <div className="container-x">
          <SectionHead eyebrow="What guides us" title="Our values" />
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(([t, d]) => (
              <div key={t} className="bg-background p-8"><h3 className="text-xl font-bold">{t}</h3><p className="mt-3 text-muted-foreground">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
