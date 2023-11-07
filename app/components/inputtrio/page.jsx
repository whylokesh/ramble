"use client";
import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import { Card, CardBody } from "@nextui-org/react";
import {
  Select,
  SelectSection,
  SelectItem,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import "./trio.css";

const InputTrio = () => {
  return (
    <>
      <div className="w-full  flex justify-center lg:hidden  md:hidden rounded-xl border-orange-800 p-5 flex-nowrap overflow-x-hiddensss">
        {/* <Card className="p-4 md:w-2/3 lg:w-10/12 max-w-[50rem] flex md:hidden lg:hidden h-fit" color="warning" shadow="sm"> */}

        <div className="flex lg:w-full md:w-[40rem] w-auto  justify-center items-center lg:flex-wrap flex-nowrap overflow-x-hidden md:flex-nowrap  gap-5 ">
          <Select
            className="w-[15rem] "
            color="warning"
            variant="bordered"
            label="State "
          >
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
          <Input
            type="email"
            color="warning"
            label="Search By Name"
            variant="underlined"
            className="w-[16rem] text-xs h-[3rem]"
          />
          <div className=" rounded-2xl p-1 bg-black stroke-orange-500 fill-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        {/* </Card> */}
      </div>
    </>
  );
};
export default InputTrio;
