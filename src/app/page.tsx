import { Navbar } from "@/components/Navbar";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-sky-200">
      <div className="w-full max-w-screen-xl mx-auto p-20 bg-slate-100 rounded-2xl shadow-lg">
        <Navbar/>
        <h1 className="text-2xl text-green-500 font-bold">Home page</h1>
      </div>
    </main>
  );
}
