import { useState } from "react";
import { useNavigate } from "react-router-dom";     //We can use Form from that module
import {VscSearch} from "react-icons/vsc";

export default function SearchInput(){
    const [term,setTerm]=useState("");
    const navigate = useNavigate();
    const HandleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        navigate(`search?term=${term}`);
    }
    return(
        <form onSubmit={HandleSubmit}>
            <div className="relative item-center">
                <div className="absolute mt-2.5 insect-y-0 flex items-center pl-3"><VscSearch className="h-5 w-5 text-gray-500"/></div>
            <input 
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="pl-10 py-2 w-full border-0 shadow-none"
            placeholder="Search Packages"
            />
            </div>
        </form>
    )
}