"use client";
import React from "react";
import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const GeneresCardScrolling = () => {
  const router = useRouter();
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3009/categories");
        const data = await response.json();

        if (data.success) {
          setCategories(data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (categoryId) => {
    // Construct the new URL with the updated category ID
    
    const newUrl = `/GenresSearch?categoryId=${categoryId}&stateId=`;

    // Use the `push` method to update the URL and navigate
    router.push(newUrl);
    
    setTimeout(() => {
      window.location.reload();
    }, 500);



  };

  return (
    <div className="lg:px-[6rem] md:px-[6rem] px-12 lg:p-12 md:p-8 p-6 ">
      <div className="flex flex-row items-center justify-start flex-nowrap gap-2 md:gap-4 lg:gap-14 overflow-x-scroll lg:px-[3.5rem] md:px-[4rem] px-5 scrollbar-hide overflow-y-hidden scrollbar-none overflow:-webkit-scrollbar:none">
        {categories.map((category) => (
          <Image
            key={category.id}
            className="lg:max-w-[18.5rem] md:max-w-[15rem] max-w-[9rem] bg-gray-900 lg:h-56 md:h-48 h-32~ cursor-pointer"
            alt={category.name}
            src={`${category.image_url}`}
            isBlurred // Add this if needed
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default GeneresCardScrolling;