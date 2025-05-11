import Image from "next/image";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import WhySection from "./components/WhySection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import TechnicalStatusSection from "./components/TechnicalStatusSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
export default function Home() {
  return (
    <div className="bg-[#F5EEE7]">
      <HeroSection/>
      <AboutSection/>
      <WhySection/>
      <KeyFeaturesSection/>
      <TechnicalStatusSection/>
      <FAQSection/>
      <ContactSection/>
    </div>
  );
}
