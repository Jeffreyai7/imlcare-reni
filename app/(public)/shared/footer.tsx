import Link from "next/link";
import { Camera, Mail, MapPin, MessageCircle } from "lucide-react";
import BrandLogo from "./brand-logo";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Request Care", href: "/request-care" },
];

const services = ["Home Care", "Nursing", "Physiotherapy", "Live-in Care"];
const contactLinks = [
  { label: "admin@imlcare.com", icon: Mail, href: "mailto:admin@imlcare.com" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/2348113677288" },
  { label: "Instagram", icon: Camera, href: "https://www.instagram.com/imlcare_/" },
];

const linkClassName = "inline-flex items-center gap-2 rounded-sm text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300";

export default function Footer() {
  return (
    <footer className="artwork-dark relative isolate border-t border-white/10 bg-brand-purple-dark text-white">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-6 sm:pt-16">
        <Link href="/" aria-label="Impact Lives Care home" className="mb-8 inline-flex items-center gap-2.5 rounded-md text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300">
          <BrandLogo className="size-28 lg:size-28" />
        </Link>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <p className="max-w-xs text-2xl leading-snug font-medium tracking-tight text-white">Caring to Make Life<br />Healthier and Happier.</p>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/80"><MapPin className="size-4 text-purple-200" aria-hidden="true" />Lagos &amp; Ogun State</p>
          </div>

          <nav aria-labelledby="footer-company">
            <h2 id="footer-company" className="mb-5 text-xs font-semibold tracking-[0.16em] text-white">COMPANY</h2>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => <li key={label}><Link href={href} className={linkClassName}>{label}</Link></li>)}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="mb-5 text-xs font-semibold tracking-[0.16em] text-white">SERVICES</h2>
            <ul className="space-y-3">
              {services.map((service) => <li key={service}><Link href="/services" className={linkClassName}>{service}</Link></li>)}
            </ul>
          </nav>

          <nav aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="mb-5 text-xs font-semibold tracking-[0.16em] text-white">CONTACT</h2>
            <ul className="space-y-3">
              {contactLinks.map(({ label, icon: Icon, href }) => <li key={label}><a href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noopener noreferrer" : undefined} className={linkClassName}><Icon className="size-4 shrink-0 text-purple-200" aria-hidden="true" />{label}</a></li>)}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Impact Lives Care Ltd.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/privacy-policy" className={linkClassName}>Privacy Policy</Link>
            <Link href="/terms-and-conditions" className={linkClassName}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
