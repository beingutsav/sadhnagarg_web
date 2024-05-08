import type { LawServiceType } from "@/types/LawService";

export default async function fetchLawService(id : string) {
    
    const lawServicesData = await fetch(`/api/featurepage`);
    const lawServicesDataJson = await lawServicesData.json();
    const lawServices : LawServiceType[] = lawServicesDataJson['features'];
    const lawService =  lawServices.find((lawService) => lawService.id.toString() === id);

    return lawService;
}