"use client";

import Herosectionvideo from "@/components/Herosectionvideo";
import { Divider } from "@chakra-ui/react";
import FirmLawServices from "@/data/LawServicesData";
import FirmTestimonials from "@/data/TestimonialsData";
import FeatureSection from "@/components/FeatureSection";
import Statistics from '@/components/Statistics';
import Testimonial from '@/components/Testimonial';

export default function Home() {

  const firmLawServices = FirmLawServices();
  const firmTestimonials = FirmTestimonials();
  return (
    <div>
      <Herosectionvideo />
      <FeatureSection features = {firmLawServices}/>
      <Statistics/>
      <Testimonial testimonials={firmTestimonials}/>
    </div>
  );
}
