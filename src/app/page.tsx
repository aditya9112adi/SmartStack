import { Hero } from "@/components/home/Hero";
import { Preloader } from "@/components/ui/preloader";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Services } from "@/components/home/Services";
import { Industries } from "@/components/home/Industries";
import { WhyUs } from "@/components/home/WhyUs";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { TechStack } from "@/components/home/TechStack";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      <Hero />
      <TrustedBy />
      <Services />
      <Industries />
      <WhyUs />
      <Process />
      <Projects />
      <TechStack />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
