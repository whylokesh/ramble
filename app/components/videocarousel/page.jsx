"use client";
import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import {
  Select,
  SelectSection,
  SelectItem,
  Avatar,
  Button,
} from "@nextui-org/react";
import { animals } from "./data";
import { Input } from "@nextui-org/react";
const CarouselWithContent = () => {
  return (
    <div className="rounded-xl">
      <div className="relative lg:h-[45rem] md:h-[28rem] h-15 w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div>
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className=" w-1/2 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-4xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-sm md:text-sm lg:text-base"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="primary" variant="bordered" className="text-xs px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3">
                  Explore
                </Button>
               
              </div>
            </div>
            <div className="flex lg:w-full  md:w-[40rem] md:px-9 w-[30rem] sm:px-4 items-center justify-center lg:flex-wrap flex-nowrap md:flex-nowrap gap-4 ">
              <Input
                type="email"
                color="warning"
                label="Email"
                placeholder="Enter your email"
                defaultValue="junior@nextui.org"
                className="max-w-[220px] text-xs px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3"
              />
              <Select className="max-w-xs text-xs px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3" label="Select country">
                <SelectItem
                  key="argentina"
                  startContent={
                    <Avatar
                      alt="Argentina"
                      className="w-6 h-6"
                      src="https://flagcdn.com/ar.svg"
                    />
                  }
                >
                  Argentina
                </SelectItem>
                <SelectItem
                  key="venezuela"
                  startContent={
                    <Avatar
                      alt="Venezuela"
                      className="w-6 h-6"
                      src="https://flagcdn.com/ve.svg"
                    />
                  }
                >
                  Venezuela
                </SelectItem>
                <SelectItem
                  key="brazil"
                  startContent={
                    <Avatar
                      alt="Brazil"
                      className="w-6 h-6"
                      src="https://flagcdn.com/br.svg"
                    />
                  }
                >
                  Brazil
                </SelectItem>
                <SelectItem
                  key="switzerland"
                  startContent={
                    <Avatar
                      alt="Switzerland"
                      className="w-6 h-6"
                      src="https://flagcdn.com/ch.svg"
                    />
                  }
                >
                  Switzerland
                </SelectItem>
                <SelectItem
                  key="germany"
                  startContent={
                    <Avatar
                      alt="Germany"
                      className="w-6 h-6"
                      src="https://flagcdn.com/de.svg"
                    />
                  }
                >
                  Germany
                </SelectItem>
                <SelectItem
                  key="spain"
                  startContent={
                    <Avatar
                      alt="Spain"
                      className="w-6 h-6"
                      src="https://flagcdn.com/es.svg"
                    />
                  }
                >
                  Spain
                </SelectItem>
                <SelectItem
                  key="france"
                  startContent={
                    <Avatar
                      alt="France"
                      className="w-6 h-6"
                      src="https://flagcdn.com/fr.svg"
                    />
                  }
                >
                  France
                </SelectItem>
                <SelectItem
                  key="italy"
                  startContent={
                    <Avatar
                      alt="Italy"
                      className="w-6 h-6"
                      src="https://flagcdn.com/it.svg"
                    />
                  }
                >
                  Italy
                </SelectItem>
                <SelectItem
                  key="mexico"
                  startContent={
                    <Avatar
                      alt="Mexico"
                      className="w-6 h-6"
                      src="https://flagcdn.com/mx.svg"
                    />
                  }
                >
                  Mexico
                </SelectItem>
              </Select>
              <Button color="primary" variant="ghost" className=" h-14  w-28 text-xs px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselWithContent;
