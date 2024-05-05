
import { onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { lawServicesRef } from '../firebase/firebaseconfig';
import { LawService } from '@/types/LawService';

const FirmLawServices = () => {
  const [lawServices, setLawServices] = useState<LawService[]>([]);

  useEffect(() => {
    const fetchData = () => {
      onValue(lawServicesRef, (snapshot) => {
        const lawServiceData = snapshot.val();
        if (lawServiceData) {
          const lawServiceArray: LawService[] = Object.keys(lawServiceData).map((key, index) => ({
            id: key,
            index: index,
            ...lawServiceData[key],
          }));
          setLawServices(lawServiceArray);
        }
      });
    };

    fetchData();
  }, []);

  return lawServices;
};

export default FirmLawServices;
