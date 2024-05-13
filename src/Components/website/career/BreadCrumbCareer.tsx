import React from "react";
import Image from "next/image";
import { careerimg2 } from "@/src/Assets/career";

export default function BreadCrumbCareer() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 my-12">
      <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 rounded-md group">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#392d95] uppercase text-center">
              Welcome to iPaisa -
            </h2>
            <p className="text-2xl font-bold text-[#392d95] uppercase text-center">
              Where Finance Meets Innovation
            </p>
          </div>
          <div>
            <p className="text-1xl font-bold text-[#333535] uppercase mt-3 ml-8">
              At iPaisa, we&apos;re dedicated to revolutionizing the way people
              manage their finances. Our commitment to innovation, coupled with
              a passion for empowering individuals to achieve financial freedom,
              drives everything we do. Join us on our journey to redefine the
              future of finance with iPaisa.
            </p>
          </div>
        </div>
        <div className="w-full center">
          <Image
            src={careerimg2.src}
            alt=""
            width={450}
            height={450}
            className="group-hover:scale-110 transition-all duration-700 ease-in-out mb-4"
          />
        </div>
      </section>
    </section>
  );
}
