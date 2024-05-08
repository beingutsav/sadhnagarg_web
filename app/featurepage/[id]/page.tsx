"use client";
import FirmlawServices from "@/data/LawServicesData";
import { useState, useEffect } from "react";
import FeatureDetail from "@/components/FeatureDetail";
import FeatureDetailMore from "@/components/FeatureDetailMore";
import type { LawServiceType } from "@/types/LawService";


const fetchFeatures = async ({params} : { params: { id: string } }) => {
  const featureData = await fetch(`/api/featurepage/${params.id}`
  , { cache: 'force-cache' });
  const dataJson = await featureData.json();
  const lawServiceJson = dataJson['lawService'];
  const lawServiceData = lawServiceJson as LawServiceType;
  return lawServiceData;
}

export default function FeaturePage({ params }: { params: { id: string } }) {

  const [lawService, setLawService] = useState<LawServiceType>();
  useEffect(() => {
    const fetchData = async () => {
      const lawServiceData = await fetchFeatures({params});
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
