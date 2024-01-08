"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";


const GenresCard = () => {
  const [liked, setLiked] = React.useState(false);
  const [cardData, setCardData] = React.useState([]);
  const [deviceSize, setDeviceSize] = React.useState("sm");
  const [displayedCards, setDisplayedCards] = React.useState(6);
  const [exploreMoreMode, setExploreMoreMode] = React.useState(true);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setDeviceSize("sm");
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setDeviceSize("md");
      } else {
        setDeviceSize("lg");
      }

      console.log("queryyss");
    
    }

  


    
    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Call it once to set the initial size
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const route = useRouter();


  React.useEffect(() => {
    // Existing code...

    const urlSearchParams = new URLSearchParams(window.location.search);
    const stateId = urlSearchParams.get("stateId");
    const categoryId = urlSearchParams.get("categoryId");

    // Make an API call to get data based on stateId and categoryId
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3009/search/state-category-services?stateId=${stateId}&categoryId=${categoryId}`);
        const data = await response.json();

        if (data.success) {
          setCardData(data.data.services);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Existing code...
  }, []);
  const handleExploreToggle = () => {
    if (exploreMoreMode) {
      setDisplayedCards(displayedCards + 6);
    } else {
      setDisplayedCards(6);
    }
    setExploreMoreMode(!exploreMoreMode);
  };

  return (
    <>
      <div className="lg:px-24 md:px-20 px-3 py-5">
        {/* MAIN OLD CARD */}
        <div className="flex flex-wrap justify-between lg:px-20 md:px-6 px-12 lg:mt-0 md:mt-0 mt-3 overflow-x-hidden">
          {cardData.slice(0, displayedCards).map((service, index) => (
            <Card key={index} isFooterBlurred className="max-w-[350px] m-3">
              <CardHeader className="flex flex-col gap-3">
                <Image
                  alt="service image"
                  isZoomed
                  className="object-cove h-44"
                  src={`http://localhost:3009${service.image_url}`}
                  width={350}
                />
              </CardHeader>
              <CardBody>
                <div className="flex flex-col">
                  <Typography
                    variant="h1"
                    className="text-base md:text-lg lg:text-xl mb-1"
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-xs md:text-sm lg:text-base text-gray-500"
                  >
                    {service.description}
                  </Typography>
                </div>
              </CardBody>
              <Divider />
              <CardFooter>
                {/* Adjust this link according to your data */}
               <Button onClick={()=>{
                route.push(`/ProductMain?serviceID=${service.id}`)
               }}>
                  Check Out
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* HOME PAGE CARD */}
        {/* <CardDefault /> */}

        <div className="pt-0 flex justify-center items-center">
          <Button
            size={deviceSize}
            variant="ghost"
            onClick={handleExploreToggle}
            color="warning"
            className="m-auto gap-2 p-7 lg:text-lg md:text-mds text-sm mt-12 text-white"
          >
            {exploreMoreMode ? "Explore More" : "View Less"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
};

export default GenresCard;
