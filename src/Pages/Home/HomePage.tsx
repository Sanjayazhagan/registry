import { useLoaderData } from "react-router-dom"
import type { HomeLoaderResult } from "./HomeLoader"
import { Link } from "react-router-dom";
export default function HomePage(){
    const { featured_package } = useLoaderData<HomeLoaderResult>();
    const renderedPackages = featured_package.map((pkg) => {
        return <div key={pkg.name} className="flex flex-col justify-between gap-3 border rounded shadow p-4">
            <div className="flex flex-col gap-1 border-bottom border-gray-400">
                <div className="font-bold text-center">{pkg.name}</div>
                <div className="text-sm text-gray-500">{pkg.description}</div>
                <div className="text-sm text-gray-500">{pkg.maintainers.length} Maintainers</div>
                <Link to={`/packages/${pkg.name}`} className="border rounded border-gray-900 text-center">View</Link>
            </div>
        </div>
    });
    return (
        <div className="container py-12 space-y-8">
            <div className="space-y-6 text-center">
            <h1 className="text-3xl font-bold my-4">The NPM Registry</h1>
            <p className="mx-auto max-w-[600px] text-gray-500">Discover and explore the vast world of open-source packages.</p>
            </div>
            <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
                {renderedPackages}
            </div>
        </div>
    );
}
