"use client"
import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { Typography } from "@material-tailwind/react";
const ImagesCardBlog =()=> {
  return (
    <div className="lg:px-[6rem] md:px-[6rem] px-12 lg:p-12 md:p-8 p-6  ">
         <div className=" flex flex-row items-center justify-start flex-nowrap gap-2 md:gap-4 lg:gap-6 overflow-x-scroll lg:px-[3.5rem] md:px-[4rem] px-5 scrollbar-hide  overflow-y-hidden scrollbar-none overflow:-webkit-scrollbar:none">
         <Image
      className="lg:max-w-[18.5rem] md:max-w-[15rem] max-w-[9rem]"
      alt="NextUI hero Image"
      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
      isBlurred 
    />
     <Image
      className="lg:max-w-[18.5rem] md:max-w-[15rem] max-w-[9rem]"
      alt="NextUI hero Image"
      src="https://images.pexels.com/photos/3009793/pexels-photo-3009793.jpeg?auto=compress&cs=tinysrgb&w=600"
     
      
    />
     <Image
      className="lg:max-w-[18.5rem] md:max-w-[15rem] max-w-[9rem]"
      alt="NextUI hero Image"
      src="https://images.pexels.com/photos/13450796/pexels-photo-13450796.jpeg?auto=compress&cs=tinysrgb&w=600"
   
      
    />
     <Image
      className="lg:max-w-[18.5rem] md:max-w-[15rem] max-w-[8rem]"
      alt="NextUI hero Image"
      src="https://images.pexels.com/photos/5710791/pexels-photo-5710791.jpeg?auto=compress&cs=tinysrgb&w=600"
      
    />
     <Image
      className="lg:max-w-[18.5rem] md:max-w-[15rem] max-w-[8rem]"
      alt="NextUI hero Image"
      src="https://images.pexels.com/photos/8191969/pexels-photo-8191969.jpeg?auto=compress&cs=tinysrgb&w=600"
      isBlurred 
    />
     <Image
      className="lg:max-w-[18.5rem] md:max-w-[15rem] max-w-[8rem]"
      alt="NextUI hero Image"
      src="https://images.pexels.com/photos/7654179/pexels-photo-7654179.jpeg?auto=compress&cs=tinysrgb&w=600"
    />
     <Image
      className="lg:max-w-[18.5rem] md:max-w-[15rem] max-w-[8rem]"
      alt="NextUI hero Image"
      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
     
    />
     <Image
      className="lg:max-w-[18.5rem] md:max-w-[15rem] max-w-[8rem]"
      alt="NextUI hero Image"
      src="https://images.pexels.com/photos/5409657/pexels-photo-5409657.jpeg?auto=compress&cs=tinysrgb&w=600"
    />
    </div>
    </div>
  );
}
export default ImagesCardBlog;