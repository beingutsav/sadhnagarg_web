export type LawServiceType = {
    index: number;
    id: number;
    title: string;
    description: string;
    details: {
      heading: {
        title: string;
        description: string;
      };
      subDetails: {
        title: string;
        description: string;
      }[];
    };
    whyChooseUs: {
      heading: {
        title: string;
        description: string;
      };
      subDetails: {
        title: string;
        description: string;
      }[];
    };
  };
  