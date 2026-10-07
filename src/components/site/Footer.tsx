import { Link } from "@tanstack/react-router";
import { SERVICES, SITE } from "@/lib/site";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="bg-primary pb-24 text-primary-foreground lg:pb-0">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Professional home health care, right where you need it. Care at home, and confidence for the whole family.
          </p>
          <address className="mt-6 text-sm not-italic leading-relaxed text-primary-foreground/90">
            {SITE.address1}<br />{SITE.address2}<br />
            <a href={SITE.tel} className="mt-2 inline-block font-semibold underline-offset-4 hover:underline">{SITE.phone}</a>
          </address>
        </div>
        <FooterCol title="Services" className="lg:col-span-3">
          {SERVICES.map((s) => (
            <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }}>{s.name}</Link></li>
          ))}
        </FooterCol>
        <FooterCol title="Getting Care" className="lg:col-span-2">
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/insurance">Medicare & Insurance</Link></li>
          <li><Link to="/who-we-serve">Who We Serve</Link></li>
          <li><Link to="/service-area">Service Area</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </FooterCol>
        <FooterCol title="Elsmar" className="lg:col-span-3">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/referrals">Make a Referral</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="pt-3 text-primary-foreground/60">Office hours: {SITE.hours}</li>
        </FooterCol>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Information on this site is general and not a substitute for medical advice. In an emergency, call 911.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-gold">{title}</h3>
      <ul className="space-y-3 text-sm text-primary-foreground/85 [&_a:hover]:text-primary-foreground [&_a:hover]:underline">{children}</ul>
    </div>
  );
}
