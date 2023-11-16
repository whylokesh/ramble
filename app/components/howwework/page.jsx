"use client";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { Text } from "@nextui-org/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Stepper, Step } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { Image } from "@nextui-org/react";
import { useEffect } from "react";
const TimelineWithIcon = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState(
    "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600"
  );
  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep((cur) => cur + 1);
      setIsFirstStep(false);
      setImageSrc(
        [
          "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/947177/pexels-photo-947177.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/258447/pexels-photo-258447.jpeg?auto=compress&cs=tinysrgb&w=600"
        ][activeStep + 1]
      );
    }
  };
  const stepTexts = [
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur."
  ];
  const stepImages = [
    "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/947177/pexels-photo-947177.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/258447/pexels-photo-258447.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeStep < stepImages.length - 1) {
        setActiveStep((cur) => cur + 1);
        setIsFirstStep(false);
        setImageSrc(stepImages[activeStep + 1]);
      } else {
        setActiveStep(0);
        setIsFirstStep(true);
        setImageSrc(stepImages[0]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeStep]);


  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <>
      <Card
        className="flex lg:h-[16rem] md:h-[17rem] h-[9rem]  justify-center flex-wrap  bg-black opacity-80  overflow-x-hidden"
        variant="gradient"
        shadow="sm"
      >
        <CardBody className="flex flex-col justify-center items-center overflow-y-hidden">
          <Typography
          
            variant="h3"
            color="blue-gray"
            className="mb-2 lg:mt-0 md:mt-0 mt-12  text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-[#F5A524] to-[#FF705B]  bg-clip-text text-transparent "
          >
            How We Work ?
          </Typography>
          <Typography className="p-4 text-base md:text-lg lg:text-xl font-bold mt-2 text-white">
            Exactly we Provide is in Front Of Yours Try Out and Enjoy Our Work
          </Typography>
        </CardBody>
      </Card>

      <div className="lg:w-[80%] md:w-[80%] w-full  lg:m-auto md:m-auto m-0  lg:px-24 md:px-24 px-10 overflow-x-hidden py-7">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <UserIcon className="h-5 w-5"  onClick={handleNext}/>
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                Step 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal invisible"
              >
                Details about yout account.
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
              onClick={handleNext}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
              />
            </svg>

            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                Step 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal invisible"
              >
                Details about yout account.
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <CogIcon className="h-5 w-5" onClick={handleNext}/>
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Step 2
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal invisible"
              >
                Details about yout account.
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(3)}>
            <BuildingLibraryIcon className="h-5 w-5" onClick={handleNext}/>
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
              >
                Step 3
              </Typography>
              <Typography
                color={activeStep === 2 ? "blue-gray" : "gray"}
                className="font-normal invisible"
              >
                Details about yout account.
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="mt-32 flex justify-between items-center flex-wrap">
          <Image
           className="w-4/5 h-full lg:m-0 md:m-auto m-auto"
            alt="NextUI hero Image"
            src={imageSrc}
          />
             <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 text-sm md:text-sm lg:text-xl lg:mt-0 md:mt-10 mt-8 lg:w-2/5 md:w-[29rem] overflow-y-hidden w-0 lg:h-auto md:h-auto h-0 lg:visible md:visible invisible"
                >
                 {stepTexts[activeStep]}
                </Typography>
        </div>
      </div>
    </>
  );
};
export default TimelineWithIcon;
