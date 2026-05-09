// app/page.js
import Navbar from "./components/Navbar";
import PartnerHero from "./components/PartnerHero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Earnings from "./components/Earnings";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function PartnerHome() {
  return (
    <div className="pt-20 bg-surface-secondary min-h-screen">
      <Navbar />

      <main>
        <div className="bg-white">
          <PartnerHero />
        </div>

        <div className="bg-surface-secondary py-16">
          <Benefits />
        </div>

        <div className="bg-white py-16">
          <HowItWorks />
        </div>

        <div className="bg-surface-secondary py-16">
          <Earnings />
        </div>

        <div className="bg-white py-16">
          <Testimonials />
        </div>
      </main>

      <Footer />
    </div>
  );
}