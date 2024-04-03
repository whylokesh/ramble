"use client";
import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import { Card, CardBody, Image } from "@nextui-org/react";
import {
  Select,
  SelectSection,
  SelectItem,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const CarouselWithContent = () => {
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [states, setStates] = React.useState([]);
  const [selectedStates, setSelectedStates] = React.useState(null);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://3.7.191.31:3009/categories");
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
        const response = await fetch("api/states");
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
      <div className=" overflow-x-hidden">
        <div className="relative lg:h-[45rem] md:h-[28rem] h-15 w-full">
          <img
            src="images/rambleHeroImage2.png"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div>
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className=" w-2/3 pl-5 md:w-2/4 md:pl-20 lg:pl-32 lg:pt-0 md:pt-0 pt-5">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-lg md:text-xl lg:text-4xl"
                >
                  Don't Just Advertise, <br></br>Make a Ramble
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-9 opacity-80 text-sm md:text-sm lg:text-base lg:block md:block hidden"
                >
                  Go beyond the scroll. We connect you with a <br></br>network of advertising opportunities to <br />create impactful campaigns across India.
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
                    {/*                     
                    <Select
                      items={categories}
                      label="Assigned to"
                      placeholder="Select a user"
                      labelPlacement="outside"
                      className="max-w-xs"
                    >
                      {(user) => (
                        <SelectItem key={user.id} textValue={user.name}>
                          <div className="flex gap-2 items-center">
                          <Image
                              alt={user.name}
                              className="w-6 h-6"
                              src={`${user.image_url}`}
                            />
                            <div className="flex flex-col">
                              <span className="text-small">{user.name}</span>
                            </div>
                          </div>
                        </SelectItem>
                      )}
                    </Select> */}
                    <Select
                      className="max-w-xs text-xs"
                      color="warning"
                      variant="bordered"
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
                    </Select>{" "}
                    <Button
                      color="warning"
                      size="lg"
                      variant="ghost"
                      className="h-14 w-28 text-xs lg:text-lg md:text-md"
                      onClick={() => {
                        console.log(selectedCategory);
                        console.log(selectedStates);
                        route.push(`/GenresSearch?categoryId=${selectedCategory}&stateId=${selectedStates}`)

                        // Add any further logic or API calls here
                      }}
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

