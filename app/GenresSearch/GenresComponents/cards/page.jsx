"use client";
// import React from "react";
// import { Card, CardHeader, CardFooter, Image, Button, Slider } from "@nextui-org/react";
// import { CardDefault } from "../Gcards/page";

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { Typography } from "@material-tailwind/react";


const cardData = [
  {
    title: "Your checklist for better sleep",
    imageSrc: "https://images.pexels.com/photos/89699/pexels-photo-89699.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconSrc: "https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatibus delectus dolorem quasi facilis corrupti, non maiores voluptates vel, nulla ipsum, quam quibusdam culpa voluptatum!"
  },
  {
    title: "Your checklist for better sleep",
    imageSrc: "https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconSrc: "https://images.pexels.com/photos/931881/pexels-photo-931881.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatibus delectus dolorem quasi facilis corrupti, non maiores voluptates vel, nulla ipsum, quam quibusdam culpa voluptatum!"
  },
  {
    title: "Your checklist for better sleep",
    imageSrc: "https://images.pexels.com/photos/1089441/pexels-photo-1089441.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconSrc: "https://images.pexels.com/photos/802599/pexels-photo-802599.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatibus delectus dolorem quasi facilis corrupti, non maiores voluptates vel, nulla ipsum, quam quibusdam culpa voluptatum!"
  },
  {
    title: "Your checklist for better sleep",
    imageSrc: "https://images.pexels.com/photos/258205/pexels-photo-258205.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconSrc: "https://images.pexels.com/photos/894359/pexels-photo-894359.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatibus delectus dolorem quasi facilis corrupti, non maiores voluptates vel, nulla ipsum, quam quibusdam culpa voluptatum!"
  },
  {
    title: "Your checklist for better sleep",
    imageSrc: "https://images.pexels.com/photos/1089441/pexels-photo-1089441.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconSrc: "https://images.pexels.com/photos/802599/pexels-photo-802599.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatibus delectus dolorem quasi facilis corrupti, non maiores voluptates vel, nulla ipsum, quam quibusdam culpa voluptatum!"
  },
  {
    title: "Your checklist for better sleep",
    imageSrc: "https://images.pexels.com/photos/258205/pexels-photo-258205.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconSrc: "https://images.pexels.com/photos/894359/pexels-photo-894359.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatibus delectus dolorem quasi facilis corrupti, non maiores voluptates vel, nulla ipsum, quam quibusdam culpa voluptatum!"
  },
  {
    title: "Your checklist for better sleep",
    imageSrc: "https://images.pexels.com/photos/258205/pexels-photo-258205.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconSrc: "https://images.pexels.com/photos/894359/pexels-photo-894359.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatibus delectus dolorem quasi facilis corrupti, non maiores voluptates vel, nulla ipsum, quam quibusdam culpa voluptatum!"
  },
  {
    title: "Your checklist for better sleep",
    imageSrc: "https://images.pexels.com/photos/258205/pexels-photo-258205.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconSrc: "https://images.pexels.com/photos/894359/pexels-photo-894359.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatibus delectus dolorem quasi facilis corrupti, non maiores voluptates vel, nulla ipsum, quam quibusdam culpa voluptatum!"
  },
  {
    title: "Your checklist for better sleep",
    imageSrc: "https://images.pexels.com/photos/258205/pexels-photo-258205.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconSrc: "https://images.pexels.com/photos/894359/pexels-photo-894359.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatibus delectus dolorem quasi facilis corrupti, non maiores voluptates vel, nulla ipsum, quam quibusdam culpa voluptatum!"
  },
  {
    title: "Your checklist for better sleep",
    imageSrc: "https://images.pexels.com/photos/258205/pexels-photo-258205.jpeg?auto=compress&cs=tinysrgb&w=600",
    iconSrc: "https://images.pexels.com/photos/894359/pexels-photo-894359.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatibus delectus dolorem quasi facilis corrupti, non maiores voluptates vel, nulla ipsum, quam quibusdam culpa voluptatum!"
  },

];

const GenresCard = () => {
  const [liked, setLiked] = React.useState(false);
  const [deviceSize, setDeviceSize] = React.useState('sm');
  const [displayedCards, setDisplayedCards] = React.useState(6);
  const [exploreMoreMode, setExploreMoreMode] = React.useState(true);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setDeviceSize('sm');
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setDeviceSize('md');
      } else {
        setDeviceSize('lg');
      }
    }

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Call it once to set the initial size
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };

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
        <div className="flex flex-wrap justify-between  lg:px-20 md:px-6 px-12 lg:mt-0 md:mt-0 mt-3 overflow-x-hidden">
    {cardData.slice(0, displayedCards).map((card, index) => (
          <Card key={index} isFooterBlurred className="max-w-[350px] m-3">
            <CardHeader className="flex flex-col gap-3">
                 <Image
              alt="nextui logo"
              isZoomed
              className="object-cove h-44"
              src={card.imageSrc}
              width={350}
             
            />
            </CardHeader>
         <CardBody>
            <div className="flex flex-col">
            <Typography variant="h1" className="text-base md:text-lg lg:text-xl mb-1">{card.title}</Typography>
              <Typography variant="small" className="text-xs md:text-sm lg:text-base text-gray-500">{card.description}</Typography>
            </div>
          
          </CardBody>
              <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Check Out
            </Link>
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
          {exploreMoreMode ? 'Explore More' : 'View Less'}
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
}

export default GenresCard;