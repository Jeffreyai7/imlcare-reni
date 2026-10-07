import Header from "./shared/header";
import Footer from "./shared/footer";
import WhatsAppButton from "./shared/whatsapp-button";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 has-[section[aria-labelledby=hero-heading]]:py-0">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
