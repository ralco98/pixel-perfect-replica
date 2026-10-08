import { createFileRoute } from "@tanstack/react-router";
import team from "@/assets/team.jpg";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/careers")({
  head: () => meta("Careers in Home Health | Elsmar Home Health Care Detroit", "Join our care team. Explore nursing, therapy, and home health aide opportunities with Elsmar in Detroit."),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Join our care team." intro="Meaningful work, one home at a time. We're always glad to hear from caring professionals in the Detroit area." image={team} />
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-3">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Roles we often look for</h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>Registered Nurses (RN)</li><li>Licensed Practical Nurses (LPN)</li><li>Physical, Occupational & Speech Therapists</li><li>Home Health Aides</li>
            </ul>
            <p className="border-t pt-6 text-muted-foreground">Contact our office to ask about current openings, qualifications, and the application process.</p>
            <h3 className="text-lg font-bold">Care with purpose</h3>
            <p className="text-muted-foreground">Home health professionals support patients in familiar surroundings, working together with families and physicians toward each patient's care goals.</p>
          </div>
          <div className="lg:col-span-2"><ContactForm variant="career" /></div>
        </div>
      </section>
    </>
  );
}
