import { NextResponse } from "next/server";
import { LawServiceType } from '@/types/LawService';

export async function GET(req : Request, context : any) {

const {params} = context;
const lawServicesData = await fetch('http://localhost:3000/api/featurepage');
const lawServicesFullJson = await lawServicesData.json();
const lawServicesJson : LawServiceType[] = lawServicesFullJson['features'];

//finding out on the id match
const lawService = lawServicesJson.find((lawService) => lawService.id.toString() === params.id);

return NextResponse.json({lawService});
}