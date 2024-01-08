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
    <div className="px-12 py-2">
        <Card className="mt-10 w-full h-full bg-black">
          <CardHeader color="blue-gray" className="relative h-fit">
            <img
              src={`http://localhost:3009${blogData?.image_url}`}
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
                      <HomeIcon className="h-4 w-4" />
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
