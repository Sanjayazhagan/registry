import type { PackageDetails } from "../types/PackageDetails";
export async function GetPackage (name:string): Promise <PackageDetails> {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    const data = await res.json();

    return data as PackageDetails;
}