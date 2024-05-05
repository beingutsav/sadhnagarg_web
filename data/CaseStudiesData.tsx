
import { onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { caseStudiesRef } from '../firebase/firebaseconfig';
import { CaseStudyType } from '@/types/CaseStudy';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudyType[]>([]);

  useEffect(() => {
    const fetchData = () => {
      onValue(caseStudiesRef, (snapshot) => {
        const caseStudyData = snapshot.val();
        if (caseStudyData) {
          const caseStudyArray: CaseStudyType[] = Object.keys(caseStudyData).map((key) => ({

            ...caseStudyData[key],
          }));
          setCaseStudies(caseStudyArray);
        }
      });
    };

    fetchData();
  }, []);

  return caseStudies;
};

export default CaseStudies;
