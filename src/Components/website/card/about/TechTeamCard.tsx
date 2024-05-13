import { techTeamArrType } from "@/src/types";
import React from "react";
import Image from "next/image";

type prop = {
  item: techTeamArrType;
};
export default function TechTeamCard({ item }: prop) {
  return (
    <section className="w-full flex flex-col items-center justify-between   ">
      <div className="w-40 h-40 rounded-full  overflow-hidden">
        <Image
          src={item.img.src}
          alt=""
          width={160} // Set your desired width
          height={160} // Set your desired height
          className="w-full f-full object-cover"
        />
      </div>
      <p className="font-bold mr-4 mt-2">{item.title}</p>
    </section>
  );
}
