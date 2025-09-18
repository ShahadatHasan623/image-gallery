import React from "react";
import { data } from "@/lib/db";
import { Card } from "./Card";

export const Gallery = () => {
  return (
    <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
