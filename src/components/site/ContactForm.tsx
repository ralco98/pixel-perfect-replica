import { useState } from "react";
import { ClipboardCheck, Pencil, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInquiry } from "@/lib/contact-schema";

const field = "mt-2 w-full border border-input bg-card px-4 py-3 text-base outline-none focus:border-primary";
const label = "text-sm font-semibold";

export function ContactForm({ variant = "care" }: { variant?: "care" | "referral" | "career" }) {
  const [reviewed, setReviewed] = useState(false);
  const [inquiry, setInquiry] = useState<ContactInquiry>();
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInquiry, string>>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const result = contactSchema.safeParse({
      name: String(data.get("name") || ""), phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""), message: String(data.get("message") || ""),
      org: String(data.get("org") || ""),
      for: variant === "care" ? data.get("for") : undefined,
      role: variant === "career" ? data.get("role") : undefined,
    });
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      const firstField = e.currentTarget.elements.namedItem(String(result.error.issues[0]?.path[0]));
      if (firstField instanceof HTMLElement) firstField.focus();
      return;
    }
    setErrors({});
    setInquiry(result.data);
    setReviewed(true);
  }

  if (reviewed && inquiry) {
    return (
      <div className="border bg-card p-6 md:p-10" role="status" aria-live="polite">
        <ClipboardCheck className="h-9 w-9 text-primary" />
        <h3 className="mt-4 text-2xl font-bold">Your inquiry details</h3>
        <p className="mt-3 text-muted-foreground">Your inquiry has not been sent. Please call our office to discuss {variant === "career" ? "career opportunities" : variant === "referral" ? "a referral" : "care at home"}.</p>
        <dl className="mt-6 divide-y break-words">
          {[["Name", inquiry.name], ["Phone", inquiry.phone], ["Email", inquiry.email], ["Organization", inquiry.org], ["Reaching out for", inquiry.for], ["Role", inquiry.role], ["Message", inquiry.message]].filter(([, value]) => value).map(([key, value]) => <div key={key} className="py-3"><dt className="text-xs font-semibold text-muted-foreground">{key}</dt><dd className="mt-1 whitespace-pre-wrap">{value}</dd></div>)}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-auto whitespace-normal px-5 py-3"><a href={SITE.tel}><Phone />Call {SITE.phone}</a></Button>
          <Button variant="outline" className="h-auto px-5 py-3" onClick={() => setReviewed(false)}><Pencil />Edit details</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 border bg-card p-6 md:grid-cols-2 md:p-10" noValidate>
      <div className="md:col-span-2"><h2 className="text-2xl font-bold">{variant === "career" ? "Career inquiry" : variant === "referral" ? "Referral inquiry" : "Let's talk about your care needs"}</h2><p className="mt-3 text-sm text-muted-foreground">Online delivery is not available yet. You can review your details below, or call {SITE.phone} to reach our team.</p></div>
      <label className={label}>Full name *<input name="name" aria-label="Full name" required maxLength={100} defaultValue={inquiry?.name} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={field} />{errors.name && <span id="name-error" className="mt-2 block text-sm text-destructive">{errors.name}</span>}</label>
      <label className={label}>Phone *<input name="phone" aria-label="Phone" type="tel" required maxLength={20} defaultValue={inquiry?.phone} autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} className={field} />{errors.phone && <span id="phone-error" className="mt-2 block text-sm text-destructive">{errors.phone}</span>}</label>
      <label className={`${label} md:col-span-2`}>Email<input name="email" aria-label="Email" type="email" maxLength={255} defaultValue={inquiry?.email} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={field} />{errors.email && <span id="email-error" className="mt-2 block text-sm text-destructive">{errors.email}</span>}</label>
      {variant === "care" && (
        <label className={`${label} md:col-span-2`}>I'm reaching out for
          <select name="for" defaultValue={inquiry?.for} className={field}>
            <option>Myself</option><option>A loved one</option><option>Other</option>
          </select>
        </label>
      )}
      {variant === "referral" && (
        <label className={`${label} md:col-span-2`}>Organization / practice<input name="org" defaultValue={inquiry?.org} maxLength={150} className={field} /></label>
      )}
      {variant === "career" && (
        <label className={`${label} md:col-span-2`}>Role of interest
          <select name="role" defaultValue={inquiry?.role} className={field}>
            <option>Registered Nurse</option><option>LPN</option><option>Therapist (PT/OT/SLP)</option><option>Home Health Aide</option><option>Office / Other</option>
          </select>
        </label>
      )}
      <label className={`${label} md:col-span-2`}>How can we help?
        <textarea name="message" rows={5} defaultValue={inquiry?.message} maxLength={1000} className={field} />
      </label>
      <p className="text-xs text-muted-foreground md:col-span-2">
        Please don't include detailed medical information in this form. For emergencies, call 911.
      </p>
      {Object.keys(errors).length > 0 && <p className="text-sm text-destructive md:col-span-2" role="alert">Please check the highlighted fields.</p>}
      <div className="md:col-span-2">
        <Button type="submit" className="h-auto w-full px-6 py-4 sm:w-auto"><ClipboardCheck />Review inquiry</Button>
      </div>
    </form>
  );
}
