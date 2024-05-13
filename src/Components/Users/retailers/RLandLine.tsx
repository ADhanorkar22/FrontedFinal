import { Button, TextField } from "@mui/material";
import React from 'react'

export default function RLandLine() {
    return (
        <section className="">
          <form className="main-container">
            <p className="text-3xl font-bold text-white ">Retailer Services</p>
            <div className="flex mt-4">
              <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10  mb-2 ">
                <p className="font-bold text-5xl text-[#0B12B7]">
                Effortless Landline Bill Settlement
                </p>
    
                <p className="mt-8 text-2xl ">
                Streamline Your Communications with Landline Bill Payment.                </p>
              </span>
              <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-[#ddf1f5] ml-2 rounded-md">
                <p className="text-[#0B12B7] text-3xl font-bold">Online Landline Bill Payment</p>
                
                <div className="flex flex-col mt-4">
                  <p className="text-[#0B12B7] font-medium text-md">Operater</p>
                  <select
                    name=""
                    id=""
                    className="w-3/4 bg-white rounded-md mt-2 h-10"
                  >
                    {/* <option value="">Select Operator</option> */}
                    <option value="">Airtel Landline</option>
                    <option value="">BSNL Landline - Corporate</option>
                    <option value="">BSNL Landline - Individual</option>
                    <option value="">MTNL Delhi</option>
                    <option value="">MTNL Mumbai</option>
                    <option value="">MTNL Mumbai Lease Circuit</option>
                    <option value="">Tata TeleServices (CDMA)</option>
                  </select>
                </div>

                <div className="flex flex-col mt-4">
                  <p className="text-[#0B12B7] font-medium text-md">
                  Landline Number with STD Code (without 0)
                  </p>
                  <TextField
                    type="number"
                    placeholder="Landline Number with STD Code (without 0)"
                    className="w-3/4 bg-white rounded-md mt-2"
                    inputProps={{
                      style: {
                        height: "5px",
                      },
                    }}
                  />
                </div>
               
                <div className="flex flex-col mt-6">
                  <button className="w-3/4 bg-themeColor text-white px-4 py-3 rounded-md hover:bg-green-500 hover:text-white">
                    Confirm
                  </button>
                </div>
              </span>
            </div>
          </form>
        </section>
      );
}
