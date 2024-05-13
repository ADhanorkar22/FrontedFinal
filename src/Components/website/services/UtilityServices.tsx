import { servicesUtility } from "@/src/Assets/services";
import React from "react";
import Image from "next/image";

export default function UtilityServices() {
  return (
    <section className="w-full main-container flex bg-[#E0FBFF] ">
      <div className="w-full flex flex-col items-start justify-start gap-6 mt-12">
        <p className="text-lg lg:text-2xl font-bold text-black logoWarper_one">
          Utility Bill Payment
        </p>

        <p className="text-xl lg:text-1xl lg:leading-10 font-semibold logoWarper_one">
          Bharat Bill Payment System (BBPS) revolutionizes the way bills are
          paid in India, offering a unified platform for convenient, secure, and
          efficient bill payments. Bharat Bill Payment System (BBPS)
          revolutionizes the way bills are paid in India, offering a unified
          platform for convenient, secure, and efficient bill payments.
        </p>
      </div>
      <div className="w-full flex items-center justify-end mt-14 ml-8">
        <Image
          src={servicesUtility.src}
          alt=""
          width={500} // Adjust width as needed
          height={350} // Adjust height as needed
          className="h-[35em] w-auto  !duration-500 !ease-in-out hover:scale-105 active:scale-95"
        />
      </div>
    </section>
  );
}
