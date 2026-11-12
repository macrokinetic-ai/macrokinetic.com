// Privacy notice for macrokinetic.com (UK GDPR / Data Protection Act 2018 / PECR).
// Drafted 12 Nov 2026; revised after a second ChatGPT review (cookie settings, transfers, partner roles, complaints procedure). Not legal advice — update when
// processors, retention or tools change.
export const PRIVACY_UPDATED = "12 November 2026";

export type PrivacySection = { heading: string; intro?: string[]; items?: string[]; paras?: string[] };

export const privacySections: PrivacySection[] = [
  {
    heading: "Who we are",
    paras: [
      "This website, www.macrokinetic.com, is run by MacroKinetic MediaTech Limited, a company registered in England and Wales (company number 16420643), registered office 128 City Road, London EC1V 2NX. We are the controller of the personal data described in this notice.",
      "For any privacy question or request, email enquiry@macrokinetic.com.",
    ],
  },
  {
    heading: "What we collect",
    items: [
      "Enquiry form: your name, email address and message (required), and your company name (optional).",
      "Emails you send us, for example to accounts@macrokinetic.com, enquiry@macrokinetic.com or marketing@ponyabc.co.uk.",
      "Webinar and event registration (when we run one): your name, email address, organisation and role.",
      "Technical data: your IP address, browser and device details, processed to deliver the website securely. Our security service on the enquiry form (Cloudflare Turnstile) may process technical information such as your IP address and browser characteristics to identify and prevent automated misuse.",
      "Analytics data, only if you accept analytics cookies: pages visited, approximate location, device type and how you found the site.",
    ],
  },
  {
    heading: "How we use it and our lawful basis",
    items: [
      "To respond to business enquiries and manage our communications with you, including about Trevo hotel self check-in and PonyABC — legitimate interests, or steps you have asked us to take before entering into a contract, where that applies.",
      "To organise webinars and events you register for, and send the related event communications (reminders and the recording) — legitimate interests.",
      "To protect our website and enquiry form against spam and misuse — legitimate interests.",
      "To measure how the website is used through Google Analytics 4 — your consent, which you can withdraw at any time.",
    ],
    paras: [
      "Our legitimate interests are responding to prospective customers, running business events and protecting our website.",
      "We do not sell your personal data. We do not automatically subscribe enquiry or webinar contacts to promotional mailing lists. Where we send marketing communications, we follow UK GDPR and PECR and give you a way to opt out.",
      "We do not use personal data collected through this website to make solely automated decisions that have legal or similarly significant effects on you.",
    ],
  },
  {
    heading: "Cookies",
    intro: [
      "We use essential cookies to run the website and to remember your cookie choice for up to 12 months. Google Analytics 4 runs only if you accept optional analytics cookies.",
      "You can reject optional cookies, or change your choice at any time, using the \"Cookie settings\" link in the website footer. Withdrawing consent stops future analytics tracking and removes the Google Analytics cookies from your browser.",
    ],
    items: [
      "cookie_consent (MacroKinetic, essential): remembers your cookie choice; 12 months.",
      "_ga and _ga_<ID> (Google Analytics, optional, only with your consent): distinguish visitors and sessions to measure website use; up to 2 years.",
      "Cloudflare Turnstile (security, enquiry form only): runs a security check to tell people from automated bots and may use technical signals from your browser while it runs.",
    ],
  },
  {
    heading: "Who we share it with",
    intro: ["We use trusted service providers who process data on our behalf:"],
    items: [
      "Vercel — website hosting.",
      "Google (Google Workspace and Google Analytics) — email and, with your consent, analytics.",
      "Cloudflare (Turnstile) — spam protection on the enquiry form.",
      "Zoom — when you register for one of our webinars.",
    ],
  },
  {
    heading: "Within our group and partners",
    paras: [
      "Where necessary to respond to your enquiry or provide services you have asked for, we may share relevant contact details and enquiry information with MacroKinetic Technology Consulting Limited (our Hong Kong group company), Trevo (our hotel self check-in product partner), or Horion Marketing Ltd, our UK sales and marketing agency.",
      "We share only the information reasonably necessary for that purpose. Depending on the arrangement, these organisations may act as independent controllers or process information on our instructions.",
    ],
  },
  {
    heading: "International transfers",
    paras: [
      "Personal data may be transferred outside the United Kingdom, including to our Hong Kong group company and to countries where our service providers operate.",
      "Where a valid UK adequacy regulation applies, we may rely on it. Otherwise, where required, we use appropriate safeguards such as the UK International Data Transfer Agreement or the UK Addendum, and carry out the applicable data protection test. Email enquiry@macrokinetic.com for more information about the safeguards we use.",
    ],
  },
  {
    heading: "How long we keep it",
    items: [
      "Enquiries and related emails: up to 24 months after our last contact, unless we start working together.",
      "Webinar registrations: up to 12 months after the event.",
      "Google Analytics: event-level and user-level data is kept for up to 14 months, under our retention setting. Aggregated reports may remain available for longer.",
      "Customer and supplier records: as long as needed for the contract and for legal and accounting requirements.",
    ],
  },
  {
    heading: "Your rights",
    paras: [
      "You have the right to access your personal data, to have it corrected or deleted, to restrict or object to how we use it, to data portability, and to withdraw consent at any time. To use any of these rights, email enquiry@macrokinetic.com. We will reply within one month.",
      "You have the right to object at any time to the use of your personal data for direct marketing. If you do, we will stop.",
      "If you have concerns about how we use your personal data, you can complain to us at enquiry@macrokinetic.com. We will acknowledge your complaint within 30 days, investigate it without undue delay and tell you the outcome.",
      "You can also complain to the Information Commissioner's Office (ICO): https://ico.org.uk/make-a-complaint/.",
    ],
  },
  {
    heading: "Other websites",
    paras: [
      "Our pages link to other websites, such as trevo.ai, ponyabc.co.uk, LinkedIn and YouTube. Their own privacy notices apply when you visit them.",
    ],
  },
];
