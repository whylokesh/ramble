"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
const Genres = () => {
  const [liked, setLiked] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedStates, setSelectedStates] = React.useState(null);
  const router = useRouter();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3009/categories");
        const data = await response.json();

        if (data.success) {
          setCategories(data.data);
        } else {
          console.error("Failed to fetch categories:", data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewClick = (categoryId, stateId) => {
    setSelectedCategory(categoryId);
    setSelectedStates(stateId);
    router.push(`/GenresSearch?categoryId=${categoryId}&stateId=`);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between lg:px-20 md:px-6 px-4 lg:mt-0 md:mt-0 mt-7 overflow-x-hidden">
      {categories.slice(0, 6).map((category) => (
          <Card
            key={category.id}
            isFooterBlurred
            className="lg:w-[45%] md:w-[45%] w-full h-[300px] lg:mt-6 md:mt-5 mt-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Ramble Agency
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                {category.name}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Category background"
              className="z-0 w-full h-full object-cover"
              src={`${category.image_url}`}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Category icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src={`${category.image_url}`}
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">About Category</p>
                  <p className="text-tiny text-white/60">{category.description}</p>
                </div>
              </div>
              <Button radius="full" size="sm" onClick={() => handleViewClick(category.id, category.state_id)}>
                View
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Genres;
