export type CaseStudyType = {
    id: number;
    author: string;
    image_url: string;
    title: string;
    when_written: string;
    content: {
      description: string;
      heading: string;
    }[];   
  };
  