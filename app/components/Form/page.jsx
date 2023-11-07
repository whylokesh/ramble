"use client"
import { Typography } from "@material-tailwind/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import ImagesCard from "../BlogImageCard/page";
import { SimpleRegistrationForm } from "../Formcard/page";

const Contact = () => {
    return (
      <>
   <Card
      className="flex lg:h-[18rem] md:h-[17rem] h-[9rem]  justify-center flex-wrap  bg-black opacity-80 overflow-x-hidden"
      variant="gradient"
      shadow="sm"
    >
      <CardBody className="flex flex-col justify-center items-center">
       
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-2  lg:mt-0 md:mt-0 mt-7 text-2xl md:text-2xl lg:text-[3rem] bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent"
        >
          Contact Us
        </Typography>
        <Typography className="lg:text-[1.4rem]  md:text-base font-bold text-sm mt-2 text-white ">
    Go High !! Show Yourself to the Whole world that you are the only existing Competitor
        </Typography>
        
      </CardBody>
    
    </Card>
<SimpleRegistrationForm />
      </>
    );
  };
  export default Contact;