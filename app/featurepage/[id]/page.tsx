"use client";
import FirmlawServices from "@/data/LawServicesData";
import FeatureDetail from "@/components/FeatureDetail";
import FeatureDetailMore from "@/components/FeatureDetailMore";

export default function FeaturePage({ params }: { params: { id: string } }) {
  const lawServices = FirmlawServices();
  const index = parseInt(params.id);

  // Check if lawServices is not empty and index is within bounds
  const feature = lawServices[index];
  if (!feature) {
    return <div>Loading...</div>; // or handle loading state accordingly
  }

  return (
    <div>
      <FeatureDetail
        heading={feature.title}
        description={feature.description}
      />
      <FeatureDetailMore
        features={feature.details.subDetails}
        heading={feature.details.heading}
      />

      <FeatureDetailMore
        features={feature.whyChooseUs.subDetails}
        heading={feature.whyChooseUs.heading}
      />
    </div>
  );
}
