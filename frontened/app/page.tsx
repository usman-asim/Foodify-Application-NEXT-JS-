import Image from "next/image";
import HeroSection from "./home-page-components/HeroSection";
import FeatureSection from "./home-page-components/FeatureSection";
import TestimonialSection from "./home-page-components/TestimonialSection";
import CtaSection from "./home-page-components/CtaSection";
import { Footer } from "@/components/Footer";
import MenuPreview from "@/components/MenuPreview";
import { Suspense } from "react";
import { MenuPreviewSkeleton } from "@/components/MenuPreviewScleton";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection></TestimonialSection>
      <Suspense fallback={<MenuPreviewSkeleton/>}>
        <MenuPreview></MenuPreview>
      </Suspense>
      <CtaSection></CtaSection>
      <Footer />
    </div>
  );
}
