import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { onValue } from 'firebase/database';
import { caseStudiesRef } from '@/firebase/firebaseconfig';
import { CaseStudyType } from '@/types/CaseStudy';

let globalCaseStudy: CaseStudyType[] = [];

const CaseStudies = async () => {
  const fetchData = async () => {
      return new Promise<void>((resolve, reject) => {
          onValue(caseStudiesRef, (snapshot) => {
              const caseStudyData = snapshot.val();
              if (caseStudyData) {
                  const caseStudyArray: CaseStudyType[] = Object.keys(caseStudyData).map((key) => ({
                      ...caseStudyData[key],
                  }));
                  globalCaseStudy = caseStudyArray;
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
    console.log("case studies downloaded sent:", globalCaseStudy);
    console.log(globalCaseStudy[0]);
    return NextResponse.json(
      {
        message: `Successfully sent email!`,
        success: true,
        caseStudies: globalCaseStudy
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ data: error }, { status: 500 });
  }

}
