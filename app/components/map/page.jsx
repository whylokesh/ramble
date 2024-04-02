"use client";
import { Typography } from "@material-tailwind/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import Mapjsx from "../mapcode/page";
import React from "react";

const Mapmain = () => {

  return (
    <>
      <div className=" mt-7 p-7 overflow-x-hidden">
        <Card
          className="flex justify-center flex-wrap  bg-black opacity-80"
          variant="gradient"
          shadow="sm"
        >
          <CardBody className="flex flex-col justify-center items-center overflow-y-hidden">
            <Typography

              variant="h3"
              color="blue-gray"
              className="mb-6 lg:mt-0 md:mt-0 mt-12  text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#F5A524] to-[#FF705B]  bg-clip-text text-transparent "
            >
              We are All Over And Everywhere
            </Typography>
          </CardBody>
        </Card>
        <Mapjsx />
      </div>
    </>
  );
};
export default Mapmain;
