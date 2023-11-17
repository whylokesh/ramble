"use client"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Image,
} from "@material-tailwind/react";
 import "./productpage.css"
 import React from "react";
export default function HorizontalCard() {
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
  return (
    <>
    <div className="lg:p-14 md:p-16 p-11">
   <section class="text-gray-600 body-font overflow-hidden">
  <div class="container ">
    <div class="lg:w-5/5 mx-auto flex flex-wrap justify-between m-auto lg:ml-9 md:ml-0 ml-0">
      <img alt="ecommerce" class="lg:w-3/5 w-full lg:h-auto h-auto object-cover object-center rounded " src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg" />
      <div class="lg:w-2/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
        <h2 class="text-sm title-font text-gray-500 tracking-widest mb-5">BRAND NAME</h2>
        <h1 class="text-white text-3xl title-font font-medium mb-3">The Catcher in the Rye</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
           
            <span class="text-gray-300 ml-3">Code</span>
          </span>
        </div>
        <p class="leading-relaxed"></p>
        <div class="flex mt-12 items-center  mb-5">
          <div class="flex w-72">
            <span class="mr-3 font-bold text-xl text-white">Media</span>
          
          </div>
          <div class="flex ml-6 items-center  w-72">
            <span class="mr-3 font-bold text-xl text-white">Size</span>
         
          </div>
          <div class="flex ml-6 items-center w-18">
            <span class="mr-3 font-bold text-xl text-white">Size</span>
           
          </div>
        </div>
        <div class="flex mt-6 items-center ">
          <div class="flex w-72">
            <span class="mr-3">Media</span>
          
          </div>
          <div class="flex ml-6 items-center  w-72">
            <span class="mr-3">Size</span>
         
          </div>
          <div class="flex ml-6 items-center w-18">
            <span class="mr-3">Size</span>
           
          </div>
        </div>
          <div class="flex mt-12 items-center  mb-5">
            <div class="flex w-72">
              <span class="mr-3 font-bold text-xl text-white">FTF</span>
            
            </div>
            <div class="flex ml-6 items-center  w-72">
              <span class="mr-3 font-bold text-xl text-white">Total Area</span>
          
            </div>
            <div class="flex ml-6 items-center w-18">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 border-solid border-1 border-orange-500 hover:cursor-pointer p-[.2rem] hover:text-orange-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

            
            </div>
          </div>
          <div class="flex mt-6 items-center ">
            <div class="flex w-72">
              <span class="mr-3">Media</span>
            
            </div>
            <div class="flex ml-6 items-center  w-72">
              <span class="mr-3">Size</span>
          
            </div>
          
          </div>
          <p class="leading-relaxed text-xs md:text-sm lg:text-base mt-9">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div class="flex">
       
     <Button size="sm" variant="ghost" color="warning" className="m-auto  p-2 lg:text-sm md:text-mds text-sm mt-12 text-white hover:bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

</Button>
        
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    <div className="pt-0 flex justify-center items-center text-base md:text-lg lg:text-xl font-bold">
        <span className="border-solid border-1 p-2 ">Price-<span className="bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">xxxxxxxx</span></span>
          </div>
          </>
  );
}