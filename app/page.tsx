// app/page.tsx
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import Pediatrician from "@/components/Pediatrician";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Offerings />
      <Pediatrician />
      <ContactInfo />
      <Footer />
    </>
  );
}
