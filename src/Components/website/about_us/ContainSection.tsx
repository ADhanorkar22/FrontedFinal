import React from "react";
import { aboutSection11, aboutSection22 } from "@/src/Assets/aboutus2";
import Image from "next/image";

export default function ContainSection() {
  return (
    <section className="w-full flex flex-col  items-center justify-between ">
      <div className="w-full flex items-start justify-between h-[30rem]">
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-start justify-start gap-6 h-full bg-[#0038C9]">
          <h2 className="text-xl lg:text-5xl font-semibold text-white">
            Our Mission
          </h2>
          <div>
            <p className="text-xl lg:text-1xl font-semibold text-white">
              Empowering everyone with a simpler, more accessible financial
              future. We leverage technology to provide seamless payments,
              investments, and insurance, putting financial control at your
              fingertips.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full overflow-hidden">
          <Image
            src={aboutSection11.src}
            alt=""
            width={500} // Specify the width here
            height={500} // Specify the height here
            className="w-full h-full object-cover bg-black"
          />
        </div>
      </div>

      <div className="w-full flex items-start flex-row-reverse justify-between h-[30rem]">
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-start justify-start gap-6 h-full bg-[#0E0067]">
          <h2 className="text-xl lg:text-5xl font-semibold text-white">
            Our Vision
          </h2>
          <div>
            <p className="text-xl lg:text-1xl font-semibold text-white">
              A world where finance is accessible to everyone. We envision a
              future where technology simplifies financial services, empowering
              individuals to achieve their goals with confidence.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full overflow-hidden">
          <Image
            src={aboutSection22.src}
            alt=""
            width={500} // Specify the width here
            height={500} // Specify the height here
            className="w-full h-full object-cover bg-black"
          />
        </div>
      </div>
    </section>
  );
}
