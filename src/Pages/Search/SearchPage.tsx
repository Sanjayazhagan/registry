import { useLoaderData } from "react-router-dom"
import type { SearchLoaderResult } from "./SearchLoader";
import PackageList from "../../components/PackageList";

export default function SearchPage(){
    const data : SearchLoaderResult =useLoaderData();
    console.log(data.data)
    const renderedResults = data.data.map((pack) => {
        return <PackageList key={pack.name} pack={pack} />
    })
    return   <div className="max-w-screen overflow-x-hidden">
        <h1 className="text-2xl font-bold m-6">Search Results for "{data.term}"</h1>
        <div className="space-y-4 mr-4 ml-4 mt-4">{renderedResults}</div>
    </div>
}
