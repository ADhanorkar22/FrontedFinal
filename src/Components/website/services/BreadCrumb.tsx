import React from "react";
import { servicesbreadcrumb } from "@/src/Assets/services";
import Image from "next/image";

export default function BreadCrumb() {
  return (
    <section className="w-full main-container flex md:flex-row items-center justify-between gap-6 my-12 ">
      <div className="w-full flex flex-col items-start justify-start gap-6 ">
        <p className="text-xl lg:text-5xl font-bold text-[#0E0067] logoWarper_one">
          We Are Here To
        </p>
        <p className="text-xl lg:text-5xl font-bold text-[#0E0067] logoWarper_one">
          Serve You
        </p>
        <p className="text-xl lg:text-1xl lg:leading-10  font-semibold logoWarper_one">
          We leverage technology to empower your finances. Manage your money
          effortlessly with our innovative tools for payments, investments, and
          more. Experience a faster, simpler, and more accessible financial
          journey with us.
        </p>
      </div>
      <div className="w-full flex items-center justify-end">
        <Image
          src={servicesbreadcrumb.src}
          alt=""
          width={500} // Adjust width as needed
          height={350} // Adjust height as needed
          className="h-[35em] w-auto  !duration-500 !ease-in-out hover:scale-105 active:scale-95"
        />
      </div>
    </section>
  );
}
