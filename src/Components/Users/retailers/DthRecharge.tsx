import { Button, TextField } from '@mui/material';
import React from 'react'

export default function DthRecharge() {
  return (
    <section className="">
    <form className="main-container">
      <p className="text-3xl font-bold text-white ">Retailer Services</p>
      <div className="flex mt-4">
        <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-9 py-10  mb-2 ">
          <p className="font-bold text-4xl text-[#0B12B7]">
            DTH Recharge: Uninterrupted Entertainment!
          </p>

          <p className="mt-8 text-2xl ">
          Elevate your entertainment with hassle- free DTH recharges that put you in control of your TV experience          </p>
        </span>
        <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-[#ddf1f5] ml-2 rounded-md">
          <p className="text-[#0B12B7] text-3xl font-bold">DTH Recharge</p>
          <div className="flex flex-col mt-4">
            <p className="text-[#0B12B7] font-medium text-md">Operater</p>
            <select
              name=""
              id=""
              className="w-3/4 bg-white rounded-md mt-2 h-10"
            >
              <option value="">Select Operator</option>
              <option value="">Airtel Digital TV</option>
              <option value="">Videocon D2H</option>
              <option value="">Tata Play (Formerly Tata Sky)</option>
              <option value="">Sun Direct</option>
              <option value="">Dish TV</option>
              <option value="">Reliance Digital TV</option>
              <option value="">Jio Fiber</option>
            </select>
          </div>

          <div className="flex flex-col mt-4">
            <p className="text-[#0B12B7] font-medium text-md">
              Mobile Number / Customer Id
            </p>
            <TextField
              type="number"
              placeholder="Mobile Number / Customer Id"
              className="w-3/4 bg-white rounded-md mt-2"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>

          {/* <div className="flex flex-col mt-4">
            <p className="text-[#0B12B7] font-medium text-md">Circle</p>
            <select
              name=""
              id=""
              className="w-3/4 bg-white rounded-md mt-2 h-10"
            >
              <option value="">Select </option>
              <option value="">Maharashtra</option>
              <option value="">Kerala</option>
              <option value="">Punjab</option>
              <option value="">Rajasthan</option>
            </select>
          </div> */}

          <div className="flex flex-col mt-4">
            <p className="text-[#0B12B7] font-medium text-md">Amount</p>
            <TextField
              type="number"
              placeholder="₹ Amount"
              className="w-3/4 bg-white rounded-md mt-2"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>
          <div className="flex flex-col mt-6">
            <button className="w-3/4 bg-themeColor text-white px-4 py-3 rounded-md">
              Confirm
            </button>
          </div>
        </span>
      </div>
    </form>
  </section>
  );
}
