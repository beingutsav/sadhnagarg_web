import { CaseStudyType } from "@/types/CaseStudy";

export default async function fetchCaseStudy(id : string) {

    const caseStudiesData = await fetch(`/api/casestudy`);
    const caseStudiesJson = await caseStudiesData.json();

    const caseStudies : CaseStudyType[] = caseStudiesJson['caseStudies'];
    const study = caseStudies.find((study) => study.id.toString() === id);

    return study;
}