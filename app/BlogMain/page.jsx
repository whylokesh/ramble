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
import Contact from "../components/Form/page";

const CreateAndEarnInfoCard = () => {
  const [blogData, setBlogData] = React.useState(null);
  React.useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const BlogID = urlSearchParams.get("id")
    console.log(BlogID);
    fetch(`http://3.7.191.31:3009/blog?id=${BlogID}`)
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
      <section class="text-gray-400 bg-black body-font" >
        <div class="container mx-auto flex px-5 lg:py-20 md:py-15 py-10 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 select-none">
            <img class="object-cover object-center rounded-lg" alt="hero" src={blogData?.image_url} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <Typography variant="h4" color="white">{blogData?.title}
            </Typography>
            <Typography color="white" className="font-normal text-justify">{blogData?.description}</Typography>
          </div>
        </div>
      </section >
      <Contact />
    </>
  );
};
export default CreateAndEarnInfoCard;
