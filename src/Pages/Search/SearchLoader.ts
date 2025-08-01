import { searchPackages } from "../../api/queries/SeachPackage"
import type { PackageSummary } from "../../api/types/PackageSummary";
export interface SearchLoaderResult{
    data:PackageSummary[];
    term:string
}
export async function searchLoader({request}:{request: Request}){
    const {searchParams}=new URL(request.url);
    const term= searchParams.get('term')
    if (!term){
        throw new Error('Search Term must be provide')
    }
    const data=await searchPackages(term)
    return {
        data,
        term,}
}