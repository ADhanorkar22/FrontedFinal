import { adminImg } from "@/src/Assets/admin";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Breadcrumb() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const headers = {
          "Content-Type": "application/json",
          Authorization: token,
        };
        const response = await axios.get(
          "https://65.2.118.186/api/protected/balance",
          // "http://api.ipaisa.site/api/protected/balance",

          {
            headers: headers,
          }
        );

        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [data]);
  return (
    <section className="w-full main-container h-full flex flex-col items-start justify-start gap-4 mb-8">
      <div className="w-full h-[50%] flex items-center justify-between gap-4 ">
        <div className="w-full h-full rounded-3xl bg-gradient-to-r from-[#C420ED] to-[#6C45BF] shadow-[0_10px_20px_rgba(00,00,00)] flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-bold capitalize text-white ">
            API Balance
          </h1>
          <h1 className="text-2xl font-bold capitalize text-white ">
            {/* {data1?.vwbalance} &#x20B9; */}
            10000000 &#x20B9;
          </h1>
        </div>
        <div className="w-full h-full rounded-3xl bg-gradient-to-r from-[#6916F2] to-[#566BD5] shadow-[0_10px_20px_rgba(00,00,00)] flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-bold capitalize text-white ">
            Wallet Balance
          </h1>
          <h1 className="text-2xl font-bold capitalize text-white ">
            {data?.balance} &#x20B9;
          </h1>
        </div>
      </div>
      <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_10px_20px_rgba(00,00,00)]">
        <Image
          src={adminImg.src}
          alt=""
          width={500}
          height={500}
          className="w-full h-full object-fill"
        />
      </div>
    </section>
  );
}
