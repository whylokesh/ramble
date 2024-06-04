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
    fetch(`/api/blog?id=${BlogID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBlogData(data.data[0]);
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
        <div class="container mx-auto flex px-5 py-10 flex-col items-center">
          <div class="w-full mb-10 select-none">
            <img class="object-cover w-full object-center rounded-lg" alt="hero" src={blogData?.image_url} />
          </div>
          <div class="w-full flex flex-col flex-wrap">
            <Typography variant="h2" className="mb-5" color="white">{blogData?.title}
            </Typography>
            <div className="flex flex-wrap w-full">
              <pre className="w-full overflow-x-auto break-all whitespace-pre-wrap text-white font-sans flex items-center">
                {blogData?.description}
              </pre>
            </div>
          </div>
        </div>
      </section >
      <Contact />
    </>
  );
};
export default CreateAndEarnInfoCard;
