"use client"
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
const ImagesCard = () => {
  const [blogImages, setBlogImages] = React.useState([]);
  const route = useRouter();
  React.useEffect(() => {
    // Make API call when the component mounts
    fetch("/api/latest-blogs")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBlogImages(data.data);
        } else {
          console.error("API call failed:", data.message);
        }
      })
      .catch((error) => console.error("API call error:", error));
  }, []);
  const handleImageClick = (id) => {

    // Navigate to "/BlogMain?id=" with the clicked image id
    route.push(`/BlogMain?id=${id}`);
  };
  return (
    <div className="lg:px-[6rem] md:px-[6rem] px-12">
      <div className="flex flex-row items-center justify-start flex-nowrap gap-2 md:gap-4 lg:gap-6 overflow-x-scroll lg:px-[6rem] md:px-[4rem] px-5 scrollbar-hide overflow-y-hidden scrollbar-none overflow:-webkit-scrollbar:none">
        {blogImages.map((blog) => (
          <Image
            key={blog.id}
            className="lg:max-w-[18.5rem] md:max-w-[15rem] max-w-[9rem] h-28 cursor-pointer"
            alt={`Blog Image ${blog.id}`}
            src={`${blog.image_url}`}
            onClick={() => handleImageClick(blog.id)}
          />
        ))}
      </div>
    </div>
  );
}
export default ImagesCard;