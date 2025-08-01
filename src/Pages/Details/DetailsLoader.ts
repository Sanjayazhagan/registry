import type { Params } from "react-router-dom"
import { GetPackage } from "../../api/queries/GetPackage"
import type { PackageDetails } from "../../api/types/PackageDetails"

export interface LoaderResult{
    details: PackageDetails
}

interface DetailsLoaderpros {
    params:Params
}

export async function detailsLoader ({params}:DetailsLoaderpros): Promise<LoaderResult> {
    const {name} = params;
    if(!name) {
        throw new Error("Package name is required");
    }
    const details= await GetPackage(name)
    return {
        details
    }
}