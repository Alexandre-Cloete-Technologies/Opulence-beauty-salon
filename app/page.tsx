import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { PremiumCare } from "@/components/sections/premium-care";
import { OurStory } from "@/components/sections/our-story";
import { SignatureService } from "@/components/sections/signature-service";
import { OurWork } from "@/components/sections/our-work";
import { BookingSteps } from "@/components/sections/booking-steps";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { SignatureService2 } from "@/components/sections/signature-service2";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PremiumCare />
      <OurStory />
      <SignatureService />
      <OurWork />
      <SignatureService2/>
      <BookingSteps />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}