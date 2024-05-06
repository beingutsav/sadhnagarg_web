import { NextResponse } from "next/server";
import { onValue } from 'firebase/database';
import { testimonialsRef } from '@/firebase/firebaseconfig';
import { TestimonialType } from '@/types/TestimonialModel';

let testimonials: TestimonialType[] = [];

const fetchTestimonials = async () => {
  const fetchData = async () => {
      return new Promise<void>((resolve, reject) => {
          onValue(testimonialsRef, (snapshot) => {
              const testimonialData = snapshot.val();
              if (testimonialData) {
                  const testimonialArray: TestimonialType[] = Object.keys(testimonialData).map((key) => ({
                      ...testimonialData[key],
                  }));
                  testimonials = testimonialArray;
                  resolve();
              } else {
                  reject(new Error("No data available"));
              }
          });
      });
  };

  await fetchData();
};


export async function GET(req: any, res: any) {
  console.log("inside backend case study service");
  try {
    await fetchTestimonials();
    console.log("case studies downloaded sent:", testimonials);
    console.log(testimonials[0]);
    return NextResponse.json(
      {
        message: `Successfully sent email!`,
        success: true,
        testimonials: testimonials
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ data: error }, { status: 500 });
  }

}
