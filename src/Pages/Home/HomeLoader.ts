import type { PackageDetails } from "../../api/types/PackageDetails";
import { getFeaturedPackages } from "../../api/queries/GetFeaturePackages";
export interface HomeLoaderResult{
    featured_package:PackageDetails[]
}

export async function HomeLoader():Promise<HomeLoaderResult>{
    const featured_package= await getFeaturedPackages()
    return {
    featured_package
    };
}