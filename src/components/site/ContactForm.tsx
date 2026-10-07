import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

const field = "mt-2 w-full border border-input bg-card px-4 py-3 text-base outline-none focus:border-primary";
const label = "text-sm font-semibold";

export function ContactForm({ variant = "care" }: { variant?: "care" | "referral" | "career" }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (name.length < 2 || phone.replace(/\D/g, "").length < 10) {
      setError("Please enter your name and a valid phone number.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border bg-card p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-4 text-2xl font-bold">Thank you.</h3>
        <p className="mt-3 text-muted-foreground">
          We've received your message. Our team will contact you during office hours. If you need to speak with us sooner, call{" "}
          <a href={SITE.tel} className="font-semibold text-primary">{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 border bg-card p-6 md:grid-cols-2 md:p-10" noValidate>
      <label className={label}>Full name *<input name="name" required maxLength={100} autoComplete="name" className={field} /></label>
      <label className={label}>Phone *<input name="phone" type="tel" required maxLength={20} autoComplete="tel" className={field} /></label>
      <label className={`${label} md:col-span-2`}>Email<input name="email" type="email" maxLength={255} autoComplete="email" className={field} /></label>
      {variant === "care" && (
        <label className={`${label} md:col-span-2`}>I'm reaching out for
          <select name="for" className={field}>
            <option>Myself</option><option>A loved one</option><option>Other</option>
          </select>
        </label>
      )}
      {variant === "referral" && (
        <label className={`${label} md:col-span-2`}>Organization / practice<input name="org" maxLength={150} className={field} /></label>
      )}
      {variant === "career" && (
        <label className={`${label} md:col-span-2`}>Role of interest
          <select name="role" className={field}>
            <option>Registered Nurse</option><option>LPN</option><option>Therapist (PT/OT/SLP)</option><option>Home Health Aide</option><option>Office / Other</option>
          </select>
        </label>
      )}
      <label className={`${label} md:col-span-2`}>How can we help?
        <textarea name="message" rows={5} maxLength={1000} className={field} />
      </label>
      <p className="text-xs text-muted-foreground md:col-span-2">
        Please don't include detailed medical information in this form. For emergencies, call 911.
      </p>
      {error && <p className="text-sm text-destructive md:col-span-2" role="alert">{error}</p>}
      <div className="md:col-span-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          {variant === "referral" ? "Send Referral Inquiry" : variant === "career" ? "Submit Interest" : "Request Home Health Services"}
        </button>
      </div>
    </form>
  );
}
