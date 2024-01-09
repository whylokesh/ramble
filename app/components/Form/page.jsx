"use client"
import { Typography } from "@material-tailwind/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import ImagesCard from "../BlogImageCard/page";
import { SimpleRegistrationForm } from "../Formcard/page";

const Contact = () => {
  return (
    <>
      <Card
        className="flex py-10 justify-center flex-wrap  bg-black opacity-80 overflow-x-hidden"
        variant="gradient"
        shadow="sm"
      >
        <CardBody className="flex flex-col justify-center items-center">

          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-2  lg:mt-0 md:mt-0 mt-7 text-2xl md:text-2xl lg:text-[3rem] bg-gradient-to-r p-2 from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent"
          >
            Subscribe to our Newsletter!
          </Typography>
          <Typography className="text-xs md:text-sm lg:text-base text-white px-2 ">
            Go High !! Show Yourself to the Whole world that you are the only existing Competitor
          </Typography>

        </CardBody>

      </Card>
      <SimpleRegistrationForm />
    </>
  );
};
export default Contact;