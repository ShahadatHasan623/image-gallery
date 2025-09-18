"use client";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "./icons";
import { useRouter } from "next/navigation";

export default function Header() {
  const [searchData, setSearchData] = useState("");
  const router = useRouter();
  useEffect(()=>{
    if(searchData){
      router.push(`/?search=${searchData}`)
    }
  },[searchData,router])
  return (
    <div className="flex justify-between items-center gap-3">
      <div className="flex w-full max-w-xl justify-center items-center ">
        <input
          onChange={(e) => setSearchData(e.target.value)}
          type="text"
          placeholder="Search..."
          className="inline-block w-full py-2 px-4 bg-slate-100 border-2 border-slate-400 focus:outline-none text-slate-500 rounded pr-8"
        />
        <button className="w-8 -ml-8">
          {" "}
          <SearchIcon />{" "}
        </button>
      </div>
      <button className="px-8 bg-slate-800 text-white text-base uppercase py-4 rounded-xl cursor-pointer hover:bg-slate-700 active:translate-y-0.5 ">
        Upload
      </button>
    </div>
  );
}
