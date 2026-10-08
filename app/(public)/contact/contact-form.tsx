"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [draftOpened, setDraftOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Website enquiry from ${name}`;
    const body = `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message}`;

    window.location.href = `mailto:admin@imlcare.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-2.5">
        <Label htmlFor="contact-name" className="text-foreground">Full Name</Label>
        <Input id="contact-name" name="name" autoComplete="name" required maxLength={150} placeholder="Your full name" className="h-12 rounded-xl px-4 text-base" />
      </div>
      <div className="space-y-2.5">
        <Label htmlFor="contact-email" className="text-foreground">Email</Label>
        <Input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" className="h-12 rounded-xl px-4 text-base" />
      </div>
      <div className="space-y-2.5">
        <Label htmlFor="contact-phone" className="text-foreground">Phone <span className="font-normal text-muted-foreground">(optional)</span></Label>
        <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={50} placeholder="Your phone number" className="h-12 rounded-xl px-4 text-base" />
      </div>
      <div className="space-y-2.5">
        <Label htmlFor="contact-message" className="text-foreground">Message</Label>
        <Textarea id="contact-message" name="message" required maxLength={2000} rows={5} placeholder="How can we help you?" className="min-h-36 resize-y rounded-xl px-4 py-3 text-base" />
      </div>
      <p id="contact-email-note" className="text-sm leading-relaxed text-muted-foreground">
        Your email app will open with your message ready to send.
      </p>
      <Button type="submit" variant="emphasis" aria-describedby="contact-email-note" className="h-12 w-full gap-3 rounded-xl px-7 sm:w-auto">
        Send Message <ArrowRight className="size-4" aria-hidden="true" />
      </Button>
      <p role="status" className="text-sm leading-relaxed text-muted-foreground">
        {draftOpened && <>Please send your message from your email app. If it did not open, contact us at <a href="mailto:admin@imlcare.com" className="rounded-sm font-medium text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">admin@imlcare.com</a> or chat with us on WhatsApp.</>}
      </p>
    </form>
  );
}
