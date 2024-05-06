import { NextResponse } from "next/server";
import { onValue } from 'firebase/database';
import { lawServicesRef } from '@/firebase/firebaseconfig';
import { LawServiceType } from '@/types/LawService';

let lawServices: LawServiceType[] = [];

const CaseStudies = async () => {
  const fetchData = async () => {
      return new Promise<void>((resolve, reject) => {
          onValue(lawServicesRef, (snapshot) => {
              const featuresData = snapshot.val();
              if (featuresData) {
                  const featuresArray: LawServiceType[] = Object.keys(featuresData).map((key) => ({
                      ...featuresData[key],
                  }));
                  lawServices = featuresArray;
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
    await CaseStudies();
    console.log("case studies downloaded sent:", lawServices);
    console.log(lawServices[0]);
    return NextResponse.json(
      {
        message: `Successfully sent email!`,
        success: true,
        features: lawServices
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ data: error }, { status: 500 });
  }

}
