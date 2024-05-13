import React from "react";
import { serviceInsuarance } from "@/src/Assets/services";
import Image from "next/image";

export default function InsuaranceServices() {
  return (
    <section className="w-full main-container flex  bg-[#E0E8FF]">
      <div className="w-full flex items-center justify-start">
        <Image
          src={serviceInsuarance.src}
          alt=""
          width={500} // Adjust width as needed
          height={350} // Adjust height as needed
          className="h-[35em] w-auto mb-4  !duration-500 !ease-in-out hover:scale-105 active:scale-95"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-6 mt-12 ml-4">
        <p className="text-lg lg:text-2xl font-bold text-black logoWarper_one">
          Insuarance for all your needs
        </p>

        <p className="text-xl lg:text-1xl gap-2 lg:leading-10 font-semibold logoWarper_one">
          Get the insurance you need, simplified. We leverage tech to offer
          customized coverage, instant quotes, and seamless claims. Protect your
          future with a faster, more convenient insurance experience.
        </p>
      </div>
    </section>
  );
}
