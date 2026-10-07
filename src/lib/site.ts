export const SITE = {
  name: "Elsmar Home Health Care",
  phone: "(313) 961-5500",
  tel: "tel:+13139615500",
  address1: "2727 2nd Ave #156",
  address2: "Detroit, MI 48201",
  hours: "Monday–Friday, 9:00 AM – 5:00 PM",
  rating: "4.8",
  reviews: 5,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=2727+2nd+Ave+%23156+Detroit+MI+48201",
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  helps: string[];
  includes: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "skilled-nursing",
    name: "Skilled Nursing",
    short: "Licensed nursing care at home, guided by each patient's physician-ordered plan of care.",
    intro:
      "Skilled nursing brings clinical care into the home, helping patients manage health needs and recover with the support of a professional care team.",
    helps: ["Recovering after a hospital stay or surgery", "Managing a chronic condition", "Learning about new medications or treatments", "Needing wound or post-surgical care"],
    includes: ["Health assessments and monitoring", "Medication management and education", "Wound care", "Patient and caregiver education", "Coordination with the patient's physician"],
  },
  {
    slug: "physical-therapy",
    name: "Physical Therapy",
    short: "Helping patients rebuild strength, balance, and mobility in the place they live.",
    intro:
      "In-home physical therapy focuses on movement, strength, and safety, so patients can work toward their goals in their everyday surroundings.",
    helps: ["Regaining mobility after surgery or illness", "Improving balance and reducing fall risk", "Building strength and endurance", "Learning to use mobility aids safely"],
    includes: ["Mobility and gait training", "Strength and balance exercises", "Home safety recommendations", "Individualized exercise programs"],
  },
  {
    slug: "occupational-therapy",
    name: "Occupational Therapy",
    short: "Support with the daily activities that make independence at home possible.",
    intro:
      "Occupational therapy helps patients perform everyday tasks — dressing, bathing, cooking — with greater confidence and safety.",
    helps: ["Difficulty with daily routines", "Adjusting after an injury or illness", "Needing adaptive equipment", "Wanting to remain independent at home"],
    includes: ["Activities of daily living training", "Adaptive equipment guidance", "Energy-conservation techniques", "Home environment recommendations"],
  },
  {
    slug: "speech-therapy",
    name: "Speech Therapy",
    short: "Care for communication, cognition, and swallowing needs at home.",
    intro:
      "Speech-language therapy at home supports patients with communication, swallowing, and cognitive-communication challenges.",
    helps: ["Speech or language changes after a stroke", "Swallowing difficulties", "Memory or cognitive-communication concerns", "Voice changes"],
    includes: ["Speech and language exercises", "Swallowing evaluation and strategies", "Cognitive-communication support", "Family and caregiver education"],
  },
  {
    slug: "medical-social-services",
    name: "Medical Social Services",
    short: "Guidance connecting patients and families with resources and support.",
    intro:
      "Medical social workers help patients and families navigate the emotional, social, and practical aspects of care at home.",
    helps: ["Understanding community resources", "Planning for long-term needs", "Coping with a new diagnosis", "Coordinating additional support"],
    includes: ["Resource and referral guidance", "Care-planning support", "Counseling on adjusting to illness", "Help understanding available programs"],
  },
  {
    slug: "home-health-aide",
    name: "Home Health Aide",
    short: "Personal care support as part of the patient's home health plan of care.",
    intro:
      "Home health aides assist with personal care under the direction of the clinical team, as part of each patient's plan of care.",
    helps: ["Needing help with bathing or grooming", "Support with personal care during recovery", "Assistance while regaining strength"],
    includes: ["Bathing and personal hygiene assistance", "Grooming and dressing support", "Assistance as directed by the care team"],
  },
];

export const NAV = [
  { to: "/services", label: "Services" },
  { to: "/who-we-serve", label: "Who We Serve" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
] as const;

export const FAQS = [
  { q: "What is home health care?", a: "Home health care is skilled, short-term clinical care — such as nursing and therapy — provided in the patient's home under a plan of care ordered by a physician." },
  { q: "How do I get started?", a: `Call us at ${SITE.phone} or submit a care request online. Our team will talk with you about your needs and explain the next steps, including any physician orders that may be required.` },
  { q: "Do I need a doctor's referral?", a: "Home health services generally require orders from a physician or qualified provider. If you don't have a referral yet, we can explain how the process typically works." },
  { q: "Does Medicare cover home health care?", a: "Medicare may cover home health services for eligible patients who meet certain criteria. Coverage depends on your individual situation — contact us and we'll help you understand your options." },
  { q: "What insurance do you accept?", a: "Please contact our office to confirm whether your specific insurance plan is accepted. We'll help you understand your coverage before services begin." },
  { q: "What areas do you serve?", a: "We're based in Detroit and serve patients in the Detroit area. Call us to confirm whether we can provide care at your address." },
  { q: "What are your office hours?", a: `Our office is open ${SITE.hours}. You can submit a request online at any time and we'll respond during business hours.` },
  { q: "Can family members be involved in care?", a: "Yes. With the patient's permission, we encourage family members and caregivers to stay informed and involved in the plan of care." },
];
