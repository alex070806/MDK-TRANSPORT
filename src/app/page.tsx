"use client";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import FloatingPhone from "@/components/FloatingPhone";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <HowWeWork />
        <WhyUs />
        <Team />
        <Stats />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
      <PrivacyModal />
      <FloatingPhone />
    </LanguageProvider>
  );
}
