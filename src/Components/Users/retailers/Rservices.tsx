import React from "react";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from "@mui/icons-material/History";
import { mobilerecharge } from "@/src/Assets/retailer";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { CreditCard } from "@mui/icons-material";
import { Lightbulb } from "@mui/icons-material";
import { SystemSecurityUpdateGood } from "@mui/icons-material";
import { WaterDrop } from "@mui/icons-material";
import { BroadcastOnHome } from "@mui/icons-material";
import { CellTower } from "@mui/icons-material";
import { ElectricCar } from "@mui/icons-material";
import { PropaneTank } from "@mui/icons-material";
import { Fax } from "@mui/icons-material";
import { HomeWork } from "@mui/icons-material";
import { CreditScore } from "@mui/icons-material";
import { GasMeter } from "@mui/icons-material";
import { Paid } from "@mui/icons-material";
import { HealthAndSafety } from "@mui/icons-material";
import { AssuredWorkload } from "@mui/icons-material";
import { FireTruck } from "@mui/icons-material";
import { Diversity1 } from "@mui/icons-material";
import { School } from "@mui/icons-material";

export default function Rservices() {
  const router = useRouter();
  return (
    <section>
      <section  className="main-container w-full flex flex-col  h-35 shadow-2xl bg-[#9D9FD7] rounded-xl border-solid border-2 border-black ">
        <div className="w-full flex flex-col mt-4">
          <span>
            <p className="font-bold text-lg mt-4">Manage Your Money</p>
          </span>
          <span className="flex mt-4 mb-6">
            <button className="text-white">
              <AddIcon className="mr-2" />
              Add Money
            </button>
            <button className="text-white ml-8">
              <HistoryIcon className="mr-2" />
              Transaction History
            </button>
          </span>
        </div>
      </section>
      <section className="" style={{marginRight: "1%", marginLeft:"1%"}}>
        <div style={{width:"100%"}} className="main-container w-full  px-10 py-10 shadow-2xl mb-2 bg-[#6633cc] mt-4  rounded-3xl ">
          <span>
            <div className=" flex  w-full mt-4 ">
              <p className="text-white font-bold text-lg">
                Utilities Payment By BBPS
              </p> 
            </div>
            <p className="text-white"> Recharge Payment</p>

            <div style={{display:"flex", flexDirection:"row"}}  className="">

              <div
                className=" mt-4 flex flex-col items-start justify-start items-center"
                onClick={() => {
                  router.push("/retailerrecharge");
                }}
              >
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456] hover:cursor-pointer">
                <InstallMobileIcon className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-200" />
                </div>
                <div className="pt-1 flex flex-col items-center hover:cursor-pointer">
                  <p className="text-white font-semibold">Mobile</p>
                  <p className="text-white font-semibold">Recharge</p>
                </div>
              </div>


              <div 
              style={{paddingLeft: "6%"}}
              className="mt-4 flex flex-col items-start justify-start items-center" 
              onClick={() => {
                router.push("/dthrecharge");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
                  <CellTower className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250 hover:cursor-pointer" />
                </div>
                <div className="pt-1 ml-2 flex flex-col items-center hover:cursor-pointer">
                  <p className="text-white font-semibold pt-1">DTH</p>
                </div>
              </div>


              <div style={{paddingLeft: "7%"}}
               className="mt-4 flex flex-col items-start justify-start items-center" 
              onClick={() => {
                router.push("/fastagrecharge");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
                  <ElectricCar className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />
                </div>
                <div className="pt-1 flex flex-col items-center">
                  <p className="text-white font-semibold">FASTag </p>
                  <p className="text-white font-semibold"> Recharge</p>
                </div>
              </div>


              <div style={{paddingLeft: "7%"}}
              className="mt-4 flex flex-col items-start justify-start items-center"
               onClick={() => {
                router.push("/retailercreditcard");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">  
                  <CreditCard className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />
                </div>
                <div
                  className="pt-1 flex flex-col items-center">
                  <p className="text-white font-semibold">Credit Card</p>
                </div>
              </div>
            </div>
            </span>
            </div>
                


            {/* Utilities payment */}
            <div style={{width:"100%"}} className="main-container w-full  px-10 py-10 shadow-2xl mb-2 bg-[#6633cc] mt-4  rounded-3xl ">
              <span>
            <div className="w-full mt-4 ">
              <p className="text-white font-bold text-lg">Utilities Payment</p>
            </div>
            
            <div style={{display:"flex", flexDirection:"row"}} className="flex space-x-0 display: block;">
              <div className="mt-4 flex flex-col items-start justify-start items-center" 
              onClick={() => {
                router.push("/rpostpaidrecharge");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
                  <SystemSecurityUpdateGood className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />
                </div>
                <div className="ml-2 flex flex-col items-center ">
                  <p className="text-white font-semibold">Mobile Postpaid</p>
                  <p className="text-white font-semibold">Recharge</p>
                </div>
              </div>


              <div style={{paddingLeft: "4%"}}
              className="mt-4 flex flex-col items-start justify-start items-center" 
              onClick={() => {
                router.push("/retailerelectricity");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
                  <Lightbulb className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />
                </div>
                <div className="ml-2 flex flex-col items-center">
                  <p className="text-white font-semibold">Electricity</p>
                </div>
              </div>


              <div style={{paddingLeft: "2%"}}
              className="w-full mt-4 flex flex-col items-start justify-start items-center"
              onClick={() => {
                router.push("/retailerwater");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">  
                <WaterDrop className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />
                </div>
                <div className="ml-2 flex flex-col items-center">
                  <p className="text-white font-semibold">Water </p>
                </div>
              </div>


              <div
              className="w-full mt-4 flex flex-col items-start justify-start items-center"
              onClick={() => {
                router.push("/rgascylinder");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">  
                  <PropaneTank className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />
                </div>
                <div className="ml-2 flex flex-col items-center">
                  <p className="text-white font-semibold">Book a</p>
                  <p className="text-white font-semibold"> Cylinder</p>
                </div>
              </div>
              <div>
            </div>


              <div
              className="w-full mt-4 flex flex-col items-start justify-start items-center"
              onClick={() => {
                router.push("/rbroadband");
              }}>
                <div style={{display:"flex",flexDirection:"column"}}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
                 
                  <BroadcastOnHome className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />

                </div>
                </div>
                <div className="ml-2 flex flex-col items-center">
                  <p className="text-white font-semibold">Broadband</p>
                </div>
              </div>
              <div 
              style={{paddingLeft: "0%"}}
              className="w-full mt-4 flex flex-col items-start justify-start items-center"
               onClick={() => {
                router.push("/rlandline");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
                 
                  <Fax className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />     

                </div>
                <div className="ml-2 flex flex-col items-center">
                  <p className="text-white font-semibold">Landline </p>
                </div>
              </div>
              <div style={{paddingLeft: "0%"}} 
              className="w-full mt-4 flex flex-col items-start justify-start items-center"
              onClick={() => {
                router.push("/rhouserent");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
                 
                  <HomeWork className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />

                </div>
                <div className="ml-2 flex flex-col items-center">
                  <p className="text-white font-semibold">Rent</p>
                </div>
              </div>

              <div style={{paddingLeft: "0%"}} 
              className="w-full mt-4 flex flex-col items-start justify-start items-center"
              onClick={() => {
                router.push("/rgasbilling");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]"> 
                   <GasMeter className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />
                </div>
                <div className="ml-2 flex flex-col items-center">
                  <p className="text-white font-semibold">Piped </p>
                  <p className="text-white font-semibold ml-2">Gas</p>
                </div>
              </div>
            </div>
            </span>
            </div>


            {/* Financial Services */}
            <div style={{width:"100%"}} className="main-container w-full  px-10 py-10 shadow-2xl mb-2 bg-[#6633cc] mt-4  rounded-3xl ">
              <span>
            <div className="w-full mt-4 items-center">
              <p className="text-white font-bold text-lg">Financial Services</p>
            </div>

            <div style={{paddingRight: "48%"}} className="flex">
              <div className="w-full mt-4 flex flex-col items-start justify-start items-center"
              onClick={() => {
                router.push("/rcreditcardpayment");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]"> 
                  <CreditScore className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />
                </div>
                <div className="ml-2 flex flex-col items-center">
                  <p className="text-white font-semibold">Credit Card</p>
                  <p className="text-white font-semibold">Payment</p>
                </div>
              </div>

              
              <div
              className="w-full mt-4 flex flex-col items-start justify-start items-center"
              onClick={() => {
                router.push("/rloanemipayment");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
                 
                  <Paid className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />

                </div>
                <div className="flex flex-col items-center">
                  <p className="text-white font-semibold ml-2">Loan Payment</p>
                </div>
              </div>
              <div style={{paddingRight: "1%"}} 
              className="w-full mt-4 flex flex-col items-start justify-start items-center"
              onClick={() => {
                router.push("/rinsurance");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
                  
                   <HealthAndSafety className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />

                </div>
                <div className="ml-2 flex flex-col items-center">
                  <p className="text-white font-semibold">Insurance</p>
                </div>
              </div>
              <div className="w-full mt-4 flex flex-col items-start justify-start items-center"
               onClick={() => {
                router.push("/rmunicipaltax");
              }}>
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
               
                   <AssuredWorkload className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />

                </div>
                <div className="ml-2 flex flex-col items-center">
                  <p className="text-white font-semibold">Municipal</p>
                  <p className="text-white font-semibold ml-2">Taxes</p>
                </div>
              </div>
            </div>
          </span>
        </div>



            {/* Other Services */}

          <div style={{width:"100%"}} className="main-container w-full  px-10 py-10 shadow-2xl mb-2 bg-[#6633cc] mt-4  rounded-3xl ">
              <span>
            <div className="w-full mt-4 items-center">
              <p className="text-white font-bold text-lg">Other Services</p>
            </div>
            <div style={{paddingRight: "65%"}} className="flex">
              <div
              className="w-full mt-4 flex flex-col items-start justify-start items-center">
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
                  
                  <FireTruck className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />

                </div>
                <div className="ml-1 flex flex-col items-center">
                  {" "}
                  {/* Decreased margin */}
                  <p className="text-white font-semibold">Municipal</p>
                  <p className="text-white font-semibold">Services</p>
                </div>
              </div>
              <div style={{paddingLeft: "1%"}}
              className="w-full mt-4 flex flex-col items-start justify-start items-center">
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">

                  <Diversity1 className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />

                </div>
                <div className="ml-1 flex flex-col items-center">
                  <p className="text-white font-semibold ml-2">Clubs &</p>
                  <p className="text-white font-semibold ml-2">Association</p>
                </div>
              </div>
              <div className="w-full mt-4 flex flex-col items-start justify-start items-center">
                <div className="rounded-full bg-[#55f5ff] w-12 h-12 flex items-center justify-center hover:bg-[#302456]">
            
                  <School className="h-5 w-5 text-[#000000] hover:scale-125 transition-transform duration-250" />

                </div>
                <div className="ml-1 flex flex-col items-center">
                  <p className="text-white font-semibold">Education</p>
                  <p className="text-white font-semibold">Fees</p>
                </div>
              </div>
            </div>
            </span>
        </div>
          
        
        <div className="main-container w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 "></div>
      </section>
    </section>
  );
}
