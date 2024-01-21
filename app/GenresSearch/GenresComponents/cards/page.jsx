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
    const urlSearchParams = new URLSearchParams(window.location.search);
    const location = urlSearchParams.get("location");
    const stateId = urlSearchParams.get("stateId");
    const categoryId = urlSearchParams.get("categoryId");
    const price = urlSearchParams.get("price");
    const fetchData = async () => {
      try {
        let apiUrl = '';
  
        if (location) {
          apiUrl = `http://localhost:3009/search/search-by-location?location=${location}`;
        } else {
          // Check if price is present, and construct the API URL accordingly
          if (price) {
            apiUrl = `http://localhost:3009/search/state-category-services?stateId=${stateId}&categoryId=${categoryId}&price=${price}`;
          } else {
            apiUrl = `http://localhost:3009/search/state-category-services?stateId=${stateId}&categoryId=${categoryId}`;
          }
        }
  
        const response = await fetch(apiUrl);
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


  if (cardData.length > 0) {
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
             
                <CardFooter>
                  {/* Adjust this link according to your data */}
                  <Button className="flex m-auto" color="warning" onClick={() => {
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
  } else {
    return (
      <div className="px-12 py-24 flex flex-wrap items-center justify-center">
        <div className="flex gap-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>
          <Typography
            variant="lead"
            color="blue-gray"
            className="mt-9 mb-9 text-base md:text-lg lg:text-xl text-white flex  justify-center items-center "
          >
            No data found.
          </Typography>
        </div>
      </div>
    );
  }
};

export default GenresCard;
