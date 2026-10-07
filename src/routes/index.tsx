import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MapPin, Accessibility, Stethoscope } from "lucide-react";
import hero from "@/assets/hero.jpg";
import family from "@/assets/family.jpg";
import therapy from "@/assets/therapy.jpg";
import team from "@/assets/team.jpg";
import { SERVICES, SITE, FAQS } from "@/lib/site";
import { FAQList, FinalCTA, SectionHead, meta } from "@/components/site/blocks";

export const Route = createFileRoute("/")({
  head: () =>
    meta(
      "Elsmar Home Health Care | Home Health Services in Detroit, MI",
      "Professional home health care in Detroit — skilled nursing, therapy, and home health aide services delivered in the comfort of home. Call (313) 961-5500.",
    ),
  component: Home,
});

const PATHS = [
  { title: "For Myself", text: "Learn about getting home health services and what to expect.", img: therapy, to: "/how-it-works", cta: "Getting started" },
  { title: "For a Loved One", text: "Find information and support for a family member's care at home.", img: family, to: "/who-we-serve", cta: "Family support" },
  { title: "I'm a Healthcare Provider", text: "Find referral information and connect with our intake team.", img: hero, to: "/referrals", cta: "Make a referral" },
  { title: "I'm Looking for a Career", text: "Explore opportunities to join our home health care team.", img: team, to: "/careers", cta: "Join our team" },
] as const;

const STEPS = [
  ["Reach out", "Call us or send a care request. We'll listen and answer your questions."],
  ["Confirm orders", "We coordinate with the patient's physician regarding orders for home health services."],
  ["Plan of care", "A clinician visits to assess needs and help build an individualized plan of care."],
  ["Care at home", "Our team provides services at home and keeps the patient, family, and physician informed."],
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img src={hero} alt="A home health nurse checking an older man's blood pressure in his living room" className="h-[560px] w-full object-cover md:h-[720px]" width={1920} height={1088} />
        <div className="container-x relative -mt-40 md:absolute md:inset-x-0 md:bottom-16 md:mt-0">
          <div className="fade-up max-w-2xl bg-background p-8 md:p-12">
            <p className="eyebrow">Home Health Care in Detroit</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
              Professional Home Health Care, <span className="font-serif font-medium italic text-primary">right where you need it.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Professional home health services delivered in the comfort of home, with care centered around each patient's needs and plan of care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-primary">Request Home Health Services</Link>
              <a href={SITE.tel} className="btn btn-outline">Call {SITE.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust micro strip */}
      <section className="border-b">
        <div className="container-x grid grid-cols-2 gap-6 py-8 text-sm md:grid-cols-4">
          <TrustItem icon={<Star className="h-5 w-5 fill-gold text-gold" />} title={`${SITE.rating} Google Rating`} sub={`Based on ${SITE.reviews} reviews`} />
          <TrustItem icon={<Stethoscope className="h-5 w-5 text-primary" />} title="Professional Home Health" sub="Nursing & therapy at home" />
          <TrustItem icon={<MapPin className="h-5 w-5 text-primary" />} title="Detroit-Based Care" sub={SITE.address1} />
          <TrustItem icon={<Accessibility className="h-5 w-5 text-primary" />} title="Accessible Office" sub="Wheelchair-accessible entrance" />
        </div>
      </section>

      {/* Care discovery */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="How can we help?" title="Every path to care starts with a conversation." intro="Whether you're looking for care for yourself, supporting someone you love, or coordinating a referral, we're here to help you understand the next step." />
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {PATHS.map((p) => (
              <Link key={p.title} to={p.to} className="group block">
                <div className="overflow-hidden">
                  <img src={p.img} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" width={1200} height={1504} />
                </div>
                <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
                <span className="link-arrow mt-4 inline-block">{p.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-mist py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHead eyebrow="Our services" title="Home health services designed around your needs." />
            <Link to="/services" className="link-arrow shrink-0">View all services →</Link>
          </div>
          <div className="mt-14 grid border-l border-t md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group border-b border-r bg-background p-8 transition-colors hover:bg-card md:p-10">
                <span className="font-display text-sm font-bold text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-2xl font-bold group-hover:text-primary">{s.name}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="link-arrow mt-6 inline-block">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <img src={family} alt="An adult daughter holding her mother's hands at home" loading="lazy" className="aspect-[4/5] w-full object-cover" width={1200} height={1504} />
          <div className="max-w-xl">
            <p className="eyebrow">Care at home</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Care at home. <span className="font-serif font-medium italic text-primary">Confidence</span> for the whole family.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Home is where people feel most like themselves. Home health care brings professional clinical support into that familiar place — so recovery can happen surrounded by the people, routines, and comforts that matter.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We work alongside patients, families, and physicians, keeping everyone informed and focused on the goals in each plan of care.
            </p>
            <Link to="/about" className="link-arrow mt-8 inline-block">About Elsmar →</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-warm py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="How care works" title="A clear path from first call to care at home." center />
          <ol className="mt-16 grid gap-10 md:grid-cols-4">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t-2 border-primary pt-6">
                <span className="font-serif text-5xl italic text-gold">{i + 1}</span>
                <h3 className="mt-3 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 text-center"><Link to="/how-it-works" className="btn btn-outline">See how it works</Link></div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">What families say</p>
            <div className="mt-6 flex items-end gap-4">
              <span className="font-display text-7xl font-extrabold text-primary md:text-8xl">{SITE.rating}</span>
              <div className="pb-3">
                <div className="flex gap-1">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}</div>
                <p className="mt-1 text-sm text-muted-foreground">Google rating · {SITE.reviews} reviews</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">We're grateful to the patients and families who have shared their experience with Elsmar.</p>
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="link-arrow mt-8 inline-block">Read reviews on Google →</a>
          </div>
          <blockquote className="border-l-2 border-gold bg-warm p-10 md:p-14">
            <p className="font-serif text-3xl italic leading-snug md:text-4xl">“Patient stories will appear here once approved by the families who share them.”</p>
            <footer className="mt-6 text-sm text-muted-foreground">Placeholder — verified testimonials to be supplied by Elsmar.</footer>
          </blockquote>
        </div>
      </section>

      {/* Local */}
      <section className="bg-mist py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="Rooted in Detroit" title="Local care from a Detroit-based team." intro="Our office is located in Midtown Detroit. Call us to confirm whether we can provide services at your address." />
          <div className="bg-background p-10">
            <h3 className="text-xl font-bold">Visit or call our office</h3>
            <address className="mt-4 not-italic leading-relaxed text-muted-foreground">{SITE.address1}<br />{SITE.address2}</address>
            <p className="mt-4 text-muted-foreground">{SITE.hours}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={SITE.tel} className="btn btn-primary">Call {SITE.phone}</a>
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-outline">Get directions</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div>
            <SectionHead eyebrow="Questions" title="Common questions about home health." />
            <Link to="/faq" className="link-arrow mt-8 inline-block">All FAQs →</Link>
          </div>
          <div className="lg:col-span-2"><FAQList items={FAQS.slice(0, 5)} /></div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function TrustItem({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5">{icon}</span>
      <div>
        <p className="font-display font-bold">{title}</p>
        <p className="text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}
