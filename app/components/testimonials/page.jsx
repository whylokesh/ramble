"use client"
import { Typography } from "@material-tailwind/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import Testimonialscard from "../testimonialsCard/page";


const Testimonial = () => {
  return (
    <>
      <Card
        className="flex lg:h-[16rem] md:h-[17rem] h-[9rem]  justify-center flex-wrap  bg-black opacity-80 overflow-x-hidden"
        variant="gradient"
        shadow="sm"
      >
        <CardBody className="flex flex-col justify-center items-center">

          <Typography

            variant="h3"
            color="blue-gray"
            className="mb-2 lg:mt-0 md:mt-0 mt-12  text-3xl md:text-4xl lg:text-6xl text-white "
          >
            Explore your City
          </Typography>
          <Typography className="lg:text-[1.4rem]  md:text-base font-bold text-sm mt-2 px-6 bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
            Explore some of the best business from around the
            world from our partners and friends.
          </Typography>

        </CardBody>

      </Card>
      <Testimonialscard />

    </>
  );
};
export default Testimonial;
