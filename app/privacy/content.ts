// Privacy notice for macrokinetic.com (UK GDPR / Data Protection Act 2018 / PECR).
// Drafted 12 Nov 2026 with a ChatGPT review. Not legal advice — update when
// processors, retention or tools change.
export const PRIVACY_UPDATED = "12 November 2026";

export type PrivacySection = { heading: string; paras?: string[]; items?: string[] };

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
      "Enquiry form: your name, email address, company name (optional) and your message.",
      "Emails you send us, for example to accounts@macrokinetic.com, enquiry@macrokinetic.com or marketing@ponyabc.co.uk.",
      "Webinar and event registration (when we run one): your name, email address, organisation and role.",
      "Technical data: your IP address, browser and device details, processed to deliver the website securely and to stop spam on the enquiry form.",
      "Analytics data, only if you accept analytics cookies: pages visited, approximate location, device type and how you found the site.",
    ],
  },
  {
    heading: "How we use it and our lawful basis",
    items: [
      "To reply to your enquiry and discuss our products and services, including Trevo hotel self check-in and PonyABC — legitimate interests, or steps before entering into a contract.",
      "To run webinars and events you register for, and send related reminders and the recording — legitimate interests.",
      "To keep the website and enquiry form secure and free of spam — legitimate interests.",
      "To understand how the website is used and improve it (Google Analytics 4) — your consent, which you can withdraw at any time.",
    ],
    paras: [
      "We do not sell your personal data, and we do not add enquiry or webinar contacts to marketing mailing lists without your permission. Any marketing email will include a way to opt out.",
    ],
  },
  {
    heading: "Cookies",
    paras: [
      "We use one essential cookie to remember your cookie choice for one year. Google Analytics 4 cookies are set only if you click \"Accept all\" on the cookie banner. If you choose \"Only essential\", no analytics cookies are set. To change your choice, clear this site's cookies in your browser and the banner will appear again.",
    ],
  },
  {
    heading: "Who we share it with",
    paras: ["We use trusted service providers who process data on our behalf:"],
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
      "We may share an enquiry with MacroKinetic Technology Consulting Limited (our Hong Kong group company) or with a product partner such as Trevo, or with our UK sales and marketing agency, only where needed to answer your enquiry or deliver what you asked for.",
    ],
  },
  {
    heading: "International transfers",
    paras: [
      "Some of our providers, and our group company in Hong Kong, may process data outside the UK. Where they do, we rely on UK adequacy regulations or on safeguards such as the UK International Data Transfer Agreement or Addendum.",
    ],
  },
  {
    heading: "How long we keep it",
    items: [
      "Enquiries and related emails: up to 24 months after our last contact, unless we start working together.",
      "Webinar registrations: up to 12 months after the event.",
      "Analytics data: no longer than 14 months, in line with our Google Analytics retention setting.",
      "Customer and supplier records: as long as needed for the contract and for legal and accounting requirements.",
    ],
  },
  {
    heading: "Your rights",
    paras: [
      "You have the right to access your personal data, to have it corrected or deleted, to restrict or object to how we use it, to data portability, and to withdraw consent at any time. To use any of these rights, email enquiry@macrokinetic.com. We will reply within one month.",
      "If you are unhappy with how we handle your data, please contact us first. You also have the right to complain to the Information Commissioner's Office (ICO): https://ico.org.uk/make-a-complaint/.",
    ],
  },
  {
    heading: "Other websites",
    paras: [
      "Our pages link to other websites, such as trevo.ai, ponyabc.co.uk, LinkedIn and YouTube. Their own privacy notices apply when you visit them.",
    ],
  },
];
