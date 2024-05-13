import { Quartzlogo } from "@/src/Assets/home";
import { clientArr } from "@/src/utils/website/home";
import React from "react";
import Image from "next/image";

export default function OurClients() {
  return (
    <section className="bg-gradient-to-r from-[#047bfe] to-[#0059bb]">
      <section className="main-container w-full center my-12 ">
        <div className="w-full h-28">
          <div className="w-full h-full flex items-center justify-between gap-2 px-5">
            {clientArr.map(
              (
                item,
                index // Add 'key' prop
              ) => (
                <Image
                  key={index} // Add 'key' prop with unique value
                  src={item.img.src}
                  alt=""
                  width={100} // Adjust as per your design
                  height={150} // Adjust as per your design
                />
              )
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
