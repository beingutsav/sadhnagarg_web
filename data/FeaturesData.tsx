
import { onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { featuresRef } from '../firebase/firebaseconfig';
import { Feature } from '@/types/Feature';

const FirmFeatures = () => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    const fetchData = () => {
      onValue(featuresRef, (snapshot) => {
        const featuresData = snapshot.val();
        if (featuresData) {
          const featuresArray: Feature[] = Object.keys(featuresData).map((key, index) => ({
            id: key,
            index: index,
            ...featuresData[key],
          }));
          setFeatures(featuresArray);
        }
      });
    };

    fetchData();
  }, []);

  return features;
};

export default FirmFeatures;
