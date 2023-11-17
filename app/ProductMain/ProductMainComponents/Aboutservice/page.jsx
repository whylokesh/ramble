"use client";
import { CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Button, Card } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import React from 'react';

const AboutServiceCard = () => {

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

  return (
    <div className="p-6 mt-10 overflow-x-hidden">
    
        
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
      
            <Input type="text" label="Name" className="text-white" />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
          <Input type="email" label="Email" className="text-white" />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
           
            <Textarea
      label="Description"
      variant="bordered"
      placeholder="Enter your description"
      disableAnimation
      disableAutosize
      classNames={{
        
        input: "resize-y min-h-[40px]",
      }}
      className="w-full"
    />
          </div>
        </div>
        <div class="p-2 w-full">
        <Button color="warning" variant="ghost" className=" flex m-auto "  size={deviceSize}>
        Ghost
      </Button>  
        </div> 

      </div>
    </div>
  </div>
</section>
      
    </div>
  );
};
export default AboutServiceCard;
