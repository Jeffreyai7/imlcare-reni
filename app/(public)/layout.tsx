import Header from "./shared/header";
import Footer from "./shared/footer";
import WhatsAppButton from "./shared/whatsapp-button";
import ViewportReveals from "./shared/viewport-reveals";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <ViewportReveals>{children}</ViewportReveals>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
