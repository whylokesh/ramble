"use client"
import { Typography } from "@material-tailwind/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import ImagesCard from "../BlogImageCard/page";


const Blogmain = () => {
    return (
      <>
      <div className="py-7">
   <Card
      className="flex lg:h-[16rem] md:h-[17rem] h-[9rem]  justify-center flex-wrap  bg-black opacity-80 overflow-x-hidden"
      variant="gradient"
      shadow="sm"
    >
      <CardBody className="flex flex-col justify-center items-center">
       
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-2  lg:mt-0 md:mt-0 mt-7 text-2xl md:text-2xl lg:text-[3rem] text-white "
        >
          Blog Section
        </Typography>
        <Typography className="lg:text-[1.4rem]  md:text-base font-bold text-sm mt-2  bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
    They Loved to be a Part of Ramble Agency
        </Typography>
        
      </CardBody>
    
    </Card>
   <ImagesCard />
   </div>
      </>
    );
  };
  export default Blogmain;
  