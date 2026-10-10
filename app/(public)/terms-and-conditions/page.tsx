import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../shared/legal-page";

export const metadata: Metadata = { title: "Terms & Conditions | Impact Lives Care", description: "Clear expectations for using our website, making enquiries and taking the next step toward care." };
const sections: LegalSection[] = [
  {
    "id": "about-terms",
    "title": "1. About these terms",
    "paragraphs": [
      "These terms apply to your use of the Impact Lives Care Ltd website and its enquiry and preview features. Please read them alongside our Privacy Policy. If you do not agree, please stop using the website. These website terms do not replace an individual care agreement, clinical consent or your rights under applicable law."
    ]
  },
  {
    "id": "information-care",
    "title": "2. Website information and emergencies",
    "paragraphs": [
      "The website explains our services and provides general information. It does not provide an individual diagnosis, treatment recommendation or emergency response service. Decisions about care require an appropriate assessment and advice from a qualified healthcare professional.",
      "If someone may be in immediate danger or experiencing a medical emergency, seek urgent help from local emergency services or the nearest appropriate healthcare facility. Do not wait for a reply to a website enquiry, email or WhatsApp message."
    ]
  },
  {
    "id": "enquiries-bookings",
    "title": "3. Enquiries and care arrangements",
    "paragraphs": [
      "Sending an enquiry does not confirm an appointment, create a care agreement or guarantee that a particular professional or service is available. Our team must confirm suitability, availability, scope of care, location, timing and any required consent before a service begins.",
      "The online care assessment is a preview only. Completing it does not send a care request or reserve a service. The contact form opens an email draft, which you must send yourself. Contact our team directly to arrange care.",
      "Any confirmed services will be governed by a separate agreement that explains the care plan, responsibilities, fees, payment arrangements, cancellation and refund terms. We do not set cancellation fees or refund conditions through these website terms. Applicable consumer rights continue to apply."
    ]
  },
  {
    "id": "responsibilities",
    "title": "4. Your responsibilities",
    "paragraphs": [
      "Provide accurate information when contacting us and tell us about relevant changes when arranging care. Do not impersonate another person, submit information without authority, or share someone else?s confidential information without permission or another lawful basis.",
      "When making arrangements for a child or another person, you must have the appropriate authority. Care depends on the patient?s consent or another applicable lawful basis, and professional assessment; an enquiry alone is not consent to treatment."
    ]
  },
  {
    "id": "acceptable-use",
    "title": "5. Acceptable use",
    "paragraphs": [
      "Use the website for lawful purposes. Do not attempt unauthorized access, introduce malicious code, disrupt services, send abusive or fraudulent messages, or collect personal information about others without authorization. We may restrict access where reasonably necessary to protect the website, its users or our team."
    ]
  },
  {
    "id": "content",
    "title": "6. Content and intellectual property",
    "paragraphs": [
      "Website text, branding, designs and other content belong to Impact Lives Care Ltd or their respective owners and licensors. You may read and share links to the website for personal, non-commercial purposes. Copying, selling or republishing protected content requires permission unless otherwise permitted by law.",
      "Photographs and illustrations describe the nature of our services. They do not promise that a pictured individual will provide your care or represent a particular patient outcome."
    ]
  },
  {
    "id": "availability-links",
    "title": "7. Availability and third-party links",
    "paragraphs": [
      "We aim to keep the website useful and accurate, but content and availability may change, and errors or interruptions may occur. We may update or suspend website features when needed. Please confirm important service information with our team.",
      "Links to email, WhatsApp, Instagram and other external services are provided for convenience. Those services have their own terms and privacy policies, and we do not control their operation or content."
    ]
  },
  {
    "id": "liability",
    "title": "8. Responsibility and your legal rights",
    "paragraphs": [
      "To the extent permitted by applicable law, we are not responsible for losses arising from reliance on general website information, interruptions outside our reasonable control, or the actions of independent third-party websites. Responsibility for confirmed care services is addressed in the applicable care agreement and relevant law.",
      "Nothing in these terms excludes responsibility for fraud, death or personal injury caused by negligence, or any liability or consumer right that cannot lawfully be excluded or limited."
    ]
  },
  {
    "id": "law-disputes",
    "title": "9. Applicable law and concerns",
    "paragraphs": [
      "These terms are governed by the laws of the Federal Republic of Nigeria, subject to any mandatory protections that apply to you. If you have a concern, contact admin@imlcare.com so we can try to resolve it. This does not prevent you from contacting an appropriate regulator or seeking a remedy through a court with jurisdiction."
    ]
  },
  {
    "id": "terms-changes",
    "title": "10. Changes to these terms",
    "paragraphs": [
      "We may revise these website terms and update the date shown above. Changes apply to future website use and do not automatically alter a care agreement already in place. Any change to a confirmed service arrangement will be handled under that agreement and applicable law."
    ]
  }
];

export default function Page() {
  return <LegalPage title="Terms & Conditions" description="Clear expectations for using our website, making enquiries and taking the next step toward care." sections={sections} related={{"href":"/privacy-policy","label":"Read our Privacy Policy"}} />;
}
