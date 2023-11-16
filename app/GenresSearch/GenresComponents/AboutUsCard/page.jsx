"use client";
import { CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Button, Card } from "@nextui-org/react";
import React from 'react';

const AboutCard = () => {

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
    <div className="p-6 overflow-x-hidden">
      <Card
        className="flex lg:h-[20rem] md:h-[17rem] h-[20rem]  justify-center flex-wrap bg-gradient-to-tr from-[#F5A524] to-[#FF705B] to-danger opacity-80"
        variant="gradient"
        shadow="sm"
      >
        <CardBody className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="mb-4 h-12 w-12 text-gray-900"
          >
            <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z" />
          </svg>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-2 text-lg md:text-xl lg:text-4xl text-black"
          >
            Why Do You Need Marketing ?
          </Typography>
          <Typography className=" font-bold text-sm md:text-sm lg:text-lg text-black">
            Because it&apos;s about motivating the doers. Because I&apos;m here to
            follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-center items-center">
          <a href="#" className="inline-block">
            <Button 
            size={deviceSize}
              variant="ghost" className="m-auto gap-2 text-black">
              Learn More
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
        </CardFooter>
      </Card>
    </div>
  );
};
export default AboutCard;
