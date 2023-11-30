"use clients";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function DataCard() {
  return (
    <>
      <h1 className="font-bold text-4xl px-8 mt-6 flex justify-center items-center">Dashboard</h1>
    <div className="flex flex-wrap lg:justify-between md:justify-between justify-center  items-center lg:p-12 md:p-10 p-4 ">
    <Card className="py-4 mt-4 ">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start lg:m-0 md-m-0 m-auto">
          <div className="flex justify-between items-center w-full">
            <div>
            <h4 className="font-bold text-large mb-2 w-[12rem]">Orders</h4>
              <p className="text-md uppercase mb-2 bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent font-bold">28</p>
              {/* <small className="text-default-500">12  Clients Approached</small> */}
              
            </div>
            <CardBody className="overflow-visible py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className=" text-black p-1 h-9 bg-gradient-to-r from-[#fbdfb3] to-[#5bffde] to-danger border-solid rounded-md">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>


            </CardBody>
                  
          </div>
        </CardHeader>
      </Card>
      <Card className="py-4 mt-4 ">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start lg:m-0 md-m-0 m-auto">
          <div className="flex justify-between items-center w-full">
            <div>
            <h4 className="font-bold text-large mb-2 w-[12rem]">Services</h4>
              <p className="text-md uppercase mb-2 bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent font-bold">28</p>
              {/* <small className="text-default-500">12 Sub-Services</small>
               */}
            </div>
            <CardBody className="overflow-visible py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" p-1 h-9 bg-gradient-to-r from-[#eec787] to-[#af0202] to-danger border-solid rounded-md">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
</svg>


            </CardBody>
                  
          </div>
        </CardHeader>
      </Card>
      <Card className="py-4 mt-4 ">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start lg:m-0 md-m-0 m-auto">
          <div className="flex justify-between items-center w-full">
            <div>
            <h4 className="font-bold text-large mb-2 w-[12rem]">Categories</h4>
              <p className="text-md uppercase mb-2 bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent font-bold">28</p>
              {/* <small className="text-default-500">12 Sub-Categories</small> */}
              
            </div>
            <CardBody className="overflow-visible py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" p-1 h-9 bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger border-solid rounded-md">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
</svg>

            </CardBody>
                  
          </div>
        </CardHeader>
      </Card>
    </div>
    </>
  );
}
