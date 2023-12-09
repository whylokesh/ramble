"use client";
import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import { Card, CardBody,Image } from "@nextui-org/react";
import {
  Select,
  SelectSection,
  SelectItem,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const CarouselWithContent = () => {
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [states, setStates] = React.useState([]);
  const [selectedStates, setSelectedStates] = React.useState(null);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3009/categories");
        const data = await response.json();

        if (data.success) {
          setCategories(data.data);
         
        } else {
          console.error("Failed to fetch categories:", data);
        }
      } catch (error) {
        console.error("Error during category fetch:", error);
      }
    };

    fetchCategories();
  }, []);

  React.useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch("http://localhost:3009/states");
        const data = await response.json();

        if (data.success) {
          setStates(data.data);
         
        } else {
          console.error("Failed to fetch categories:", data);
        }
      } catch (error) {
        console.error("Error during category fetch:", error);
      }
    };

    fetchStates();
  }, []);


  return (
    <>
      <div className=" overflow-x-hidden">
        <div className="relative lg:h-[45rem] md:h-[28rem] h-15 w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div>
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className=" w-2/3 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-lg md:text-xl lg:text-4xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 text-sm md:text-sm lg:text-base"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem excepturi recusandae voluptatibus deserunt
                </Typography>
                <div className="flex gap-2">
                  <Button
                    size="lg"
                    color="warning"
                    variant="ghost"
                    className="text-sm px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:text-lg md:text-md  lg:py-3"
                  >
                    Explore
                  </Button>
                </div>
              </div>
              <div className="w-full flex justify-center flex-wrap">
                <Card
                  className="p-4 md:2-2/3 lg:w-10/12 max-w-[50rem] hidden md:flex lg:flex h-fit"
                  color="warning"
                  shadow="sm"
                >
                  <div className="flex lg:w-full md:w-[40rem] w-auto items-center justify-between lg:flex-wrap flex-nowrap md:flex-nowrap gap-2 ">
                    {/* <Input
                      type="email"
                      color="warning"
                      label="Search By Name"
                      placeholder="Search your location"
                      defaultValue="Jaipur"
                      className="max-w-[16rem] text-xs "
                    /> */}
                    <Select
        className="max-w-xs text-xs"
        color="warning"
      
        label="Select Category"
        value={selectedCategory}
        onChange={(value) => setSelectedCategory(value)}
        
      >
        {categories.map((category) => (
          <SelectItem
            key={category.id}
            
            value={category.name}
          >
            <div className="flex items-center gap-2">
              <Image
                alt={category.name}
                className="w-6 h-6"
                src={`http://localhost:3009${category.image_url}`}
                
              
              />
              <span>{category.name}</span>
            </div>
          </SelectItem>
        ))}
      </Select>
      <Select
        className="max-w-xs text-xs"
        color="warning"
      variant="bordered"
        label="Select Category"
        value={selectedStates}
        onChange={(value) => setSelectedStates(value)}
        
      >
        {states.map((state) => (
          <SelectItem
            key={state.id}
            
            value={state.name}
          >
            <div className="flex items-center gap-2">
              <span>{state.name}</span>
            </div>
          </SelectItem>
        ))}
      </Select>
                    <Button
                      color="warning"
                      size="lg"
                      variant="ghost"
                      className=" h-14 w-28 text-xs lg:text-lg md:text-md"
                    >
                      Search
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CarouselWithContent;
