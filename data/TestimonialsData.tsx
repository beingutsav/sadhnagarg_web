
import { onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { testimonialsRef } from '../firebase/firebaseconfig';
import { TestimonialType } from '@/types/TestimonialModel';

const FirmTestimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);

  useEffect(() => {
    const fetchData = () => {
      onValue(testimonialsRef, (snapshot) => {
        const testimonialData = snapshot.val();
        if (testimonialData) {
          const testimonialArray: TestimonialType[] = Object.keys(testimonialData).map((key, index) => ({
            id: key,
            index: index,
            ...testimonialData[key],
          }));
          setTestimonials(testimonialArray);
        }
      });
    };

    fetchData();
  }, []);

  return testimonials;
};

export default FirmTestimonials;
