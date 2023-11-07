"use client";
import React from "react";
import {Card, CardHeader, CardFooter, Image, Button, Slider} from "@nextui-org/react";

const Genres =()=> {
  const [liked, setLiked] = React.useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-between lg:px-12 md:px-6 px-4 lg:mt-0 md:mt-0 mt-7 overflow-x-hidden">
        <Card isFooterBlurred className="lg:w-[45%] md:w-[45%] w-full h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
            <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/89699/pexels-photo-89699.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night's sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">Get App</Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="lg:w-[45%] md:w-[45%] w-full h-[300px] lg:mt-0 md:mt-0 mt-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Your day your day</p>
            <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://images.pexels.com/photos/931881/pexels-photo-931881.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night's sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">Get App</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex flex-wrap justify-between lg:px-12 md:px-6 px-4 mt-10">
        <Card isFooterBlurred className="lg:w-[45%] md:w-[45%] w-full h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
            <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/1089441/pexels-photo-1089441.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://images.pexels.com/photos/802599/pexels-photo-802599.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night's sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">Get App</Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="lg:w-[45%] md:w-[45%] w-full h-[300px] lg:mt-0 md:mt-0 mt-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
            <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/258205/pexels-photo-258205.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://images.pexels.com/photos/894359/pexels-photo-894359.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night's sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">Get App</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Genres;
