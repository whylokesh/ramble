"use client";
import { Typography } from "@material-tailwind/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import Mapjsx from "../mapcode/page";



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
            className="mb-2 md:text-[1.75rem] lg:px-[6rem] md:px-[6rem] px-14 lg:mt-0 md:mt-0 mt-12  text-[1.7rem] lg:text-[3rem] bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent "
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
