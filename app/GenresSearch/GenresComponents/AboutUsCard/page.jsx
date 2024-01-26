"use client";
import { CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Button, Card } from "@nextui-org/react";
import React from 'react';

const AboutCard = () => {
  const [CardData,setCardData] = React.useState([])

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

  return (
    <div className="p-6 overflow-x-hidden">
      {/* <Card
        className="flex lg:h-[20rem] md:h-[17rem] h-[20rem]  justify-center flex-wrap bg-gradient-to-tr from-[#F5A524] to-[#FF705B] to-danger opacity-80"
        variant="gradient"
        shadow="sm"
      >
        <CardBody className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="mb-4 h-12 w-12 text-gray-900"
          >
            <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z" />
          </svg>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-2 text-lg md:text-xl lg:text-4xl text-black"
          >
            Why Do You Need Marketing ?
          </Typography>
          <Typography className=" font-bold text-sm md:text-sm lg:text-lg text-black">
            Because it&apos;s about motivating the doers. Because I&apos;m here to
            follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-center items-center">
          <a href="#" className="inline-block">
            <Button 
            size={deviceSize}
              variant="ghost" className="m-auto gap-2 text-black">
              Learn More
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
          </a>
        </CardFooter>
      </Card> */}
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg ">
              {CardData.length > 0 && (
                CardData[0].Category && (
                  CardData[0].Category.description
                )
              )}
            </p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 className="text-gray-400 font-medium title-font tracking-wider text-sm">Ramble Agency</h2>
      <p className="text-gray-500">Shivam Joshi</p>
    </div>
  </div>
</section>  
    </div>
  );
};
export default AboutCard;
