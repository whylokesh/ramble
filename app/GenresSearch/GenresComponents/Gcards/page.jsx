"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
 
} from "@material-tailwind/react";
import { Button } from "@nextui-org/react";
const cardData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/789381/pexels-photo-789381.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 1",
    description: "Description for Card 1.",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1449840/pexels-photo-1449840.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 2",
    description: "Description for Card 2.",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/866398/pexels-photo-866398.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 2",
    description: "Description for Card 2.",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/594660/pexels-photo-594660.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 2",
    description: "Description for Card 2.",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1089441/pexels-photo-1089441.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 2",
    description: "Description for Card 2.",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/210150/pexels-photo-210150.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 2",
    description: "Description for Card 2.",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/258205/pexels-photo-258205.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 2",
    description: "Description for Card 2.",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/2419320/pexels-photo-2419320.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 2",
    description: "Description for Card 2.",
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/821944/pexels-photo-821944.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 2",
    description: "Description for Card 2.",
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/1633406/pexels-photo-1633406.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title 2",
    description: "Description for Card 2.",
  },

];

export function  CardDefault() {
  const [displayedCards, setDisplayedCards] = React.useState(6);
  const [exploreMoreMode, setExploreMoreMode] = React.useState(true);
  const [deviceSize, setDeviceSize] = React.useState('sm');
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
    <div className="lg:px-16 md:px-20 px-3 py-5">
    <div className="flex flex-wrap justify-between  lg:px-24 md:px-6 px-12 lg:mt-0 md:mt-0 mt-3 overflow-x-hidden gap-12">
    {cardData.slice(0, displayedCards).map((card, index) => (
        <Card key={card.id} className="lg:w-[45%] md:w-[45%] w-full  h-[300px] mt-8 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={card.image} alt={`card-image-${card.id}`} />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {card.title}
            </Typography>
            <Typography>{card.description}</Typography>
          </CardBody>
          <CardFooter className="pt-0 m-auto">
            <Button className="">Read More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
    
 
    </div>
  );
}
