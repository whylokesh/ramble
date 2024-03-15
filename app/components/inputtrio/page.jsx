"use client";
import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import { Card, CardBody } from "@nextui-org/react";
import {
  Select,
  SelectSection,
  SelectItem,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import "./trio.css";

const InputTrio = () => {
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

  const route = useRouter();
  return (
    <>
      <div className="w-full  flex justify-center lg:hidden  md:hidden rounded-xl border-orange-800 p-5 flex-nowrap overflow-x-hiddensss">
        

        <div className="flex lg:w-full md:w-[40rem] w-auto  justify-center items-center lg:flex-wrap flex-nowrap overflow-x-hidden md:flex-nowrap  gap-5 ">
        <Select
        className="w-[15rem]"
        items={categories}
        color="warning"
        label="Select Category"
        value={selectedCategory}
        onChange={(value) =>
          setSelectedCategory(value.target.value)
        }
      >
        {(user) => (
          <SelectItem key={user.id} textValue={user.name}>
            <div className="flex gap-2 items-center">
           
              <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={`${user.image_url}`} />
              <div className="flex flex-col">
                <span className="text-small">{user.name}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
      <Select
         className="w-[16rem] text-xs h-[3rem]"
         color="warning"
                      variant="underlined"
                      label="Select State"
                      value={selectedStates}
                      onChange={(value) =>
                        setSelectedStates(value.target.value)
                      }
                    >
                      {states.map((state) => (
                        <SelectItem
                          key={state.id}
                          value={state.name}
                          className=""
                        >
                          {/* <div className="flex items-center gap-2">
                            <span> */}
                          {state.name}
                          {/* </span>
                          </div> */}
                        </SelectItem>
                      ))}
      </Select>
           
          <div className=" rounded-2xl p-1 bg-black stroke-orange-500 fill-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white "
              onClick={() => {
                console.log(selectedCategory);
                console.log(selectedStates);
                route.push(`/GenresSearch?categoryId=${selectedCategory}&stateId=${selectedStates}`)

                // Add any further logic or API calls here
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        {/* </Card> */}
      </div>
    </>
  );
};
export default InputTrio;
