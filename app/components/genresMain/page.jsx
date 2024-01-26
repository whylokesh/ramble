"use client";
import React from "react";
import Genres from "../generesCard/page";
import { CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Button, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";
const GenresMain = () => {
  
  const [deviceSize, setDeviceSize] = React.useState('sm');

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setDeviceSize('sm');
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setDeviceSize('md');
      } else {
        setDeviceSize('lg');
      }
    }

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Call it once to set the initial size
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


const route = useRouter();
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
    <div className="pt-0 flex justify-center items-center"   >
       
        <Button color="warning" className="lg:mt-14 md:mt-10 mt-8 " size="lg" onClick={()=>{route.push("/GenresSearch?categoryId=2&stateId=")
        }}>Explore More</Button>
      </div>
       
    </div>
  );
};

export default GenresMain;
