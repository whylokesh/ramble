"use client"
import { Typography } from "@material-tailwind/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import WusCard from "../workwithusCard/CardForWorkWithUs";



const WorkWus = () => {
    return (
      <>
     <Card
      className="flex lg:h-[16rem] md:h-[17rem] h-[9rem]  justify-center flex-wrap  bg-black opacity-80"
      variant="gradient"
      shadow="sm"
    >
      <CardBody className="flex flex-col justify-center items-center">
      <Typography
          
          variant="h3"
          color="blue-gray"
          className="mb-2 lg:mt-0 md:mt-0 mt-12  text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-[#F5A524] to-[#FF705B]  bg-clip-text text-transparent "
        >
          Work With Us
        </Typography>
        <Typography className="lg:text-[1.4rem]  md:text-base  text-sm mt-2  text-white">
    They Loved to be a Part of Ramble Agency
        </Typography>
        
      </CardBody>
    
    </Card>
    <WusCard />
   
      </>
    );
  };
  export default WorkWus;