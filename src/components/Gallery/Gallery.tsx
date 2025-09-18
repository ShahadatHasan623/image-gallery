"use client"
import React from "react";
import { data } from "@/lib/db";
import { Card } from "./Card";
import { useSearchParams } from "next/navigation";

export const Gallery = () => {
  const params =useSearchParams()
  const category =params.get("category")
  const images =data.filter((item)=>category && item.category === category)
  return (
    <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      {images.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
