"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import NavbarG from "../GenresSearch/GenresComponents/navbarGenres/page";
import Nav from "../navbar/page";
import React from "react";

const  CreateAndEarnInfoCard = () => {
  const [blogData, setBlogData] = React.useState(null);
  React.useEffect(()=>{
    const urlSearchParams = new URLSearchParams(window.location.search);
    const BlogID=urlSearchParams.get("id")
    console.log(BlogID);
    fetch(`http://localhost:3009/blog?id=${BlogID}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setBlogData(data.data);
      } else {
        console.error("API call failed:", data.message);
      }
    })
    .catch((error) => console.error("API call error:", error));
}, []);

  return (
    <>
    <Nav />
    <div className="lg:px-12 md:px-6 px-2 py-2">
        <Card className="mt-10 w-full h-full bg-black">
          <CardHeader color="blue-gray" className="relative h-fit">
            <img
              src={`${blogData?.image_url}`}
              alt={blogData?.title}
              className="h-full w-full rounded-lg"
            />
          
          </CardHeader>
          <CardBody className="bg-black">
            <div className="">
              <Timeline>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      {/* <BellIcon className="h-4 w-4" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                      </svg>
                    </TimelineIcon>
                    <Typography variant="h5" color="white">
                      {blogData?.title}
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography color="white" className="font-normal">
                      {blogData?.description}
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </div>
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
      </div>  
    </>
  );
};
export default CreateAndEarnInfoCard;
