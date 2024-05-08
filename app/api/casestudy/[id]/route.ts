// pages/api/casestudy/[id].ts

import { CaseStudyType } from '@/types/CaseStudy';
import { NextResponse } from 'next/server';

export async function GET(req: Request, context: any) {
  const { params } = context;

    const response = await fetch(`http://localhost:3000/api/casestudy`);
    const data = await response.json();
    const caseStudies: CaseStudyType[] = data['caseStudies'];

    const caseStudy = caseStudies.find((study) => study.id.toString() === params.id);
    
    //caseStudies.find(cs => cs.id === parseInt(id as string, 10));

    return NextResponse.json({ caseStudy });
}
