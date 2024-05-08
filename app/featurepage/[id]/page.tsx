"use client";
import FirmlawServices from "@/data/LawServicesData";
import { useState, useEffect } from "react";
import FeatureDetail from "@/components/FeatureDetail";
import FeatureDetailMore from "@/components/FeatureDetailMore";
import type { LawServiceType } from "@/types/LawService";
import fetchLawService from "@/app/services/FetchLawService";


export default function FeaturePage({ params }: { params: { id: string } }) {

  const [lawService, setLawService] = useState<LawServiceType>();
  useEffect(() => {
    const fetchData = async () => {
      const lawServiceData = await fetchLawService(params.id);
      setLawService(lawServiceData);
    };
    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array to run effect only once

  if (!lawService) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <FeatureDetail
        heading={lawService.title}
        description={lawService.description}
      />
      <FeatureDetailMore
        features={lawService.details.subDetails}
        heading={lawService.details.heading}
      />

      <FeatureDetailMore
        features={lawService.whyChooseUs.subDetails}
        heading={lawService.whyChooseUs.heading}
      />
    </div>
  );
  }
