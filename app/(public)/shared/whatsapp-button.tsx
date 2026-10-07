import { MessageCircle, Phone } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348113677288"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Impact Lives Care on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 left-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#128c4a] text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 hover:bg-[#0d753d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:bottom-6 sm:left-6 motion-reduce:transition-none"
    >
      <span className="relative flex items-center justify-center" aria-hidden="true">
        <MessageCircle className="size-8" strokeWidth={1.8} />
        <Phone className="absolute size-3.5 fill-current" strokeWidth={1.5} />
      </span>
    </a>
  );
}
