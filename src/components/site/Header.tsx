import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Elsmar Home Health Care — home">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="3" className={light ? "fill-primary-foreground" : "fill-primary"} />
        <path d="M10 21 20 12l10 9v9H10z" fill="none" strokeWidth="2" className={light ? "stroke-primary" : "stroke-primary-foreground"} />
        <path d="M20 19v8M16 23h8" strokeWidth="2" className="stroke-gold" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-lg font-extrabold ${light ? "text-primary-foreground" : "text-primary"}`}>Elsmar</span>
        <span className={`block whitespace-nowrap text-[10px] font-semibold uppercase ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Home Health Care</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  return (
    <>
      <div className="bg-primary text-primary-foreground">
        <div className="container-x flex items-center justify-between py-2 text-xs">
          <p className="truncate">Serving Detroit with professional home health services.</p>
          <a href={SITE.tel} className="hidden font-semibold tracking-wide sm:block">Call {SITE.phone}</a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-5 xl:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 xl:flex">
            <a href={SITE.tel} className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <Link to="/contact" className="btn btn-primary">Request Care</Link>
          </div>
          <Button ref={menuButton} variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {open && (
          <div id="mobile-menu" className="max-h-[calc(100dvh-140px)] overflow-y-auto border-t bg-background pb-16 xl:hidden">
            <nav aria-label="Mobile" className="container-x flex flex-col py-4">
              {[...NAV, { to: "/referrals", label: "Referrals" }, { to: "/contact", label: "Contact" }].map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b py-4 font-display text-lg font-semibold">
                  {n.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary mt-6">Request Home Health Services</Link>
              <a href={SITE.tel} className="btn btn-outline mt-3">Call {SITE.phone}</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t bg-background lg:hidden">
      <a href={SITE.tel} className="flex items-center justify-center gap-2 py-4 font-display text-sm font-bold uppercase tracking-wider text-primary">
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <Link to="/contact" className="flex items-center justify-center bg-primary py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground">
        Request Care
      </Link>
    </div>
  );
}
