"use client";
import React from "react";
import Genres from "../generesCard/page";
import { CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Button, Card } from "@nextui-org/react";
const GenresMain = () => {
  return (
    <div className="lg:p-[6rem] md:p-[3rem] p-8 mb-0 overflow-x-hidden">
            <Card
      className="flex lg:h-[16rem] md:h-[17rem] h-[9rem]  justify-center flex-wrap  bg-black opacity-80"
      variant="gradient"
      shadow="sm"
    >
      <CardBody className="flex flex-col justify-center items-center">
       
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-2  lg:mt-0 md:mt-0 mt-7 text-2xl md:text-2xl lg:text-[3rem] text-white "
        >
          Explore Our Options
        </Typography>
        <Typography className="lg:text-[1.4rem]  md:text-base font-bold text-sm mt-2  bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
    Exactly we Provide is in Front Of Yours !! Try Out and Enjoy Our Work
        </Typography>
        
      </CardBody>
    
    </Card>
    <Genres />
    <div className="pt-0 flex justify-center items-center">
        <a href="#" className="inline-block">
          <Button size="lg" variant="ghost" color="warning" className="m-auto gap-2 p-7 lg:text-lg md:text-mds text-sm mt-12 text-white">
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
        
      </div>
       
    </div>
  );
};

export default GenresMain;
