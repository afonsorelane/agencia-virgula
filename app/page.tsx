"use client";

import type React from "react";

import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/heroSection";
import { AboutSection } from "@/components/sections/aboutSection";
import { MissionVisionSection } from "@/components/sections/missionSection";
import { ValuesSection } from "@/components/sections/valuesSection";
import { ServicesSection } from "@/components/sections/servicesSection";
import { ContactSection } from "@/components/sections/contactSection";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ValuesSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
