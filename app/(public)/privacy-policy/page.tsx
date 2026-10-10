import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../shared/legal-page";

export const metadata: Metadata = { title: "Privacy Policy | Impact Lives Care", description: "Your trust matters. Here is how Impact Lives Care handles information you share with us and the choices available to you." };
const sections: LegalSection[] = [
  {
    "id": "scope",
    "title": "1. Who we are",
    "paragraphs": [
      "Impact Lives Care Ltd provides home care and healthcare support for individuals, families and organizations in Lagos and Ogun State, Nigeria. This policy explains how we handle personal information in connection with this website and enquiries made through our contact channels. We are responsible for the information we receive and decide how to use for these purposes."
    ]
  },
  {
    "id": "information",
    "title": "2. Information you share",
    "paragraphs": [
      "When you email, call or message us, you may provide your name, email address, phone number, location, enquiry and information about the support you need. If you arrange care, additional information may be needed about the patient, emergency contacts, care requirements and scheduling. We will explain any additional collection when arranging those services.",
      "Health information is sensitive. Please share only what is necessary for your enquiry and avoid sending medical records or detailed health histories through a general enquiry. If you provide information about someone else, make sure you have their permission or appropriate legal authority. For children or people unable to consent, we will seek appropriate authority and consent where required."
    ]
  },
  {
    "id": "website-forms",
    "title": "3. How the website forms work",
    "paragraphs": [
      "The contact form prepares an email in your own email application. Completing the form does not send a message to us automatically; we receive its contents only if you choose to send that email. Your email provider also handles that message under its own privacy terms.",
      "The online care assessment is currently a preview. Its answers remain in temporary browser memory and are not submitted to our server, saved as a care request or sent to our team. Refreshing the page or finishing the preview clears the answers. Use sample information in the preview. Contact our team directly to discuss care."
    ]
  },
  {
    "id": "use",
    "title": "4. Why we use information",
    "paragraphs": [
      "We use information you send to respond to enquiries, understand requested support, communicate with you, assess and coordinate agreed services, and meet applicable legal obligations. We do not sell personal information.",
      "Depending on the purpose, processing may rely on your consent, steps you request before entering an agreement, performance of an agreement, a legal obligation, or a legitimate interest such as responding to enquiries and protecting our services, balanced against your rights. Sensitive health information requires an applicable additional legal condition; we will seek consent where required."
    ]
  },
  {
    "id": "storage",
    "title": "5. Browser storage and technical information",
    "paragraphs": [
      "The website uses local browser storage to remember your light or dark theme preference. You can remove that preference through your browser settings. We have not integrated advertising trackers or visitor analytics into the current website.",
      "Our hosting and network providers may process technical information, such as IP addresses, browser details, request times and security logs, to deliver and protect the website. If optional tracking is introduced, we will update this notice and provide any consent choices required by law."
    ]
  },
  {
    "id": "sharing",
    "title": "6. Sharing and external services",
    "paragraphs": [
      "Information may be shared with staff and care professionals who need it to respond to your enquiry or provide agreed support, with service providers acting on our behalf, or where disclosure is required by law or necessary to protect someone?s vital interests. Sharing should be limited to what is needed for the relevant purpose.",
      "Links to WhatsApp, Instagram and your email application take you to services with their own privacy practices. Messages you send there are handled by those providers as well as by us when received. Providers may process information outside Nigeria; where we arrange an international transfer, applicable legal safeguards must be used."
    ]
  },
  {
    "id": "retention",
    "title": "7. Retention and security",
    "paragraphs": [
      "We retain information only for as long as needed for the purpose for which it was received, including any applicable recordkeeping duties or legal claims. The period depends on the type of information and whether an enquiry becomes an ongoing care relationship. You can ask us about the retention period applicable to your information.",
      "We aim to apply proportionate safeguards against unauthorized access, loss and misuse, including limiting access to people who need the information. No internet transmission or storage system can be guaranteed completely secure. If a breach occurs, we will address it and make notifications required by applicable law."
    ]
  },
  {
    "id": "rights",
    "title": "8. Your choices and privacy rights",
    "paragraphs": [
      "Subject to applicable law and any lawful exceptions, you may request access to your information, correction, deletion, restriction of processing or portability, and object to certain uses. Where processing relies on consent, you can withdraw it without affecting processing already lawfully carried out.",
      "Send requests to admin@imlcare.com. We may need to verify your identity or authority before disclosing or changing information. If we cannot fulfil a request, we will explain why. You may also raise a complaint with the Nigeria Data Protection Commission at ndpc.gov.ng."
    ]
  },
  {
    "id": "changes",
    "title": "9. Updates to this policy",
    "paragraphs": [
      "We may update this policy as our website, services or legal requirements change. The date above identifies the latest version. We will provide further notice when required, including before materially different uses of information where applicable."
    ]
  }
];

export default function Page() {
  return <LegalPage title="Privacy Policy" description="Your trust matters. Here is how Impact Lives Care handles information you share with us and the choices available to you." sections={sections} related={{"href":"/terms-and-conditions","label":"Read our Terms & Conditions"}} />;
}
