import React from "react";
import { commingsoonimg, commingsoonimg1 } from "../Assets/login";
import MainLayout from "../layouts/MainLayout";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <MainLayout>
      <section className="w-full h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-red-700 to-blue-700 overflow-hidden">
        <Image
          src={commingsoonimg1.src}
          alt=""
          width={500} // Set your desired width
          height={500}
          className="h-auto w-full"
        />
      </section>
    </MainLayout>
  );
}
