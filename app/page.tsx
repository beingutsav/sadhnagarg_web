"use client";

import Herosectionvideo from "@/components/HeroSectionTypewriter";
import { useEffect, useState } from "react"; // Import useEffect and useState
import FeatureSection from "@/components/FeatureSection";
import Statistics from '@/components/Statistics';
import Testimonial from '@/components/Testimonial';
import type { TestimonialType } from "@/types/TestimonialModel";
import type { LawServiceType } from "@/types/LawService";
import HeroSectionTypewriter from "@/components/HeroSectionTypewriter";

const messages = [
  "Are Legal Troubles Haunting You?",
  "Seeking a Beacon in the Legal Maze?",
  "Yearning for Justice and Legal Clarity?",
  "Feeling Lost in Legal Limbo?",
  "Need a Warrior in Your Legal Battle?",
  "Struggling Against Legal Odds?",
  "Searching for a Legal Lifeline?",
  "Facing a Legal Storm?",
  "Yearning for Justice's Swift Sword?",
  "Dreaming of Legal Victory?"
];

const fetchTestimonials = async () => {
  try {
    console.log('calling backend service for testimonials');
    const data = await fetch('/api/testimonials', { cache: 'force-cache' });
    const dataJson = await data.json();
    console.log('data = ', dataJson['testimonials']);
    return dataJson['testimonials'] as TestimonialType[];
  } catch (error) {
    console.error('Error fetching case testimonials:', error);
    return []; // Return empty array in case of error
  }
}


const fetchFeatures = async () => {
  try {
    console.log('calling backend service for featurepage');
    const data = await fetch('/api/featurepage', { cache: 'force-cache' });
    const dataJson = await data.json();
    console.log('data = ', dataJson['features']);
    return dataJson['features'] as LawServiceType[];
  } catch (error) {
    console.error('Error fetching case lawService:', error);
    return []; // Return empty array in case of error
  }
}

export default function Home() {

  const [lawServices, setLawServices] = useState<LawServiceType[]>([]); // State to store case lawService
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]); // State to store case lawService

  useEffect(() => {
    const fetchData = async () => {
      const testimonialData = await fetchTestimonials();
      setTestimonials(testimonialData);
    };
    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array to run effect only once


  useEffect(() => {
    const fetchData = async () => {
      const lawServiceData = await fetchFeatures();
      setLawServices(lawServiceData);
    };
    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array to run effect only once


  return (
    
    <div>
      <HeroSectionTypewriter typewritertexts={messages}/>
      <FeatureSection features = {lawServices}/>
      <Statistics/>
      <Testimonial testimonials={testimonials}/>
    </div>
  );
}
