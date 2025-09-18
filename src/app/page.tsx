import { Gallery } from "@/components/Gallery/Gallery";
import Header from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex justify-center items-center min-h-screen py-20 bg-sky-200">
      <div className="w-full max-w-screen-xl mx-auto p-20 bg-slate-100 rounded-2xl shadow-lg">
        <Navbar />
        <Header />
        <Gallery></Gallery>
      </div>
    </main>
  );
}
