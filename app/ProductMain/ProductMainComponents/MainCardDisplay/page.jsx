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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function HorizontalCard({ serviceID }) {

  const [deviceSize, setDeviceSize] = React.useState('sm');
  const [serviceData, setServiceData] = React.useState({}); // Add this state for storing service data
  const [quantity, setQuantity] = React.useState(1);
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };
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
    async function fetchData() {
      try {

        if (serviceID) {
          const response = await fetch(
            `http://localhost:3009/search/service-details?serviceId=${serviceID}`
          );

          if (response.ok) {
            const data = await response.json();
            setServiceData(data.data.service);
          } else {
            console.error("Error fetching service details");
          }
        }
      } catch (error) {
        console.error("Error fetching service details", error);
      }
    }

    fetchData();

  }, [])
  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch("http://localhost:3009/cart/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          serviceId: serviceData.id,
          quantity: quantity,
        }),

      });

      if (response.ok) {
        console.log("Item added to cart successfully");
        toast.success("Added Successfully")
        // Optionally, you can show a success message or update the UI
      } else {
        console.error("Error adding item to cart");
        // Handle the error, show an error message, or update the UI accordingly
      }
    } catch (error) {
      console.error("Error adding item to cart", error);
      toast.error("Error adding Product", error)
    }
  };



  return (
    <>
      <div className="lg:p-14 md:p-16 p-11">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container ">
            <div className="lg:w-5/5 mx-auto flex flex-wrap justify-between m-auto lg:ml-9 md:ml-0 ml-0">
              <img
                alt="ecommerce"
                className="lg:w-2/5 w-full  object-cover object-center rounded "
                src={`${serviceData.image_url}`}
              />
              <div className="lg:w-2/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 border-orange-500">
                <h2 className="text-sm title-font text-gray-500 tracking-widest mb-5">{serviceData.Category && serviceData.Category.name}</h2>
                <h1 className="text-white text-3xl title-font font-medium mb-3"> {serviceData.name}</h1>
                <div className="flex mb-4">
                  <span className="flex items-center">

                    <span className="text-gray-300 ml-3">{serviceData.code}</span>
                  </span>
                </div>
                <p className="leading-relaxed"></p>
                <div className="flex mt-12 items-center  mb-5">
                  <div className="flex w-72">
                    <span className="mr-3 font-bold text-xl text-white">Media</span>

                  </div>
                  <div className="flex ml-6 items-center  w-72">
                    <span className="mr-3 font-bold text-xl text-white">Size</span>

                  </div>
                  <div className="flex ml-6 items-center w-18">
                    <span className="mr-3 font-bold text-xl text-white">Location</span>

                  </div>
                </div>
                <div className="flex mt-6 items-center ">
                  <div className="flex w-72">
                    <span className="mr-3">{serviceData.media}</span>

                  </div>
                  <div className="flex ml-6 items-center  w-72">
                    <span className="mr-3">{serviceData.size}</span>

                  </div>
                  <div className="flex ml-6 items-center w-18">
                    <span className="mr-3">{serviceData.location}</span>

                  </div>
                </div>
                <div className="flex mt-12 items-center  mb-5">
                  <div className="flex w-72">
                    <span className="mr-3 font-bold text-xl text-white">FTF</span>

                  </div>
                  <div className="flex ml-6 items-center  w-72">
                    <span className="mr-3 font-bold text-xl text-white">Total Area</span>

                  </div>
                  <div className="flex ml-6 items-center w-18">



                  </div>
                </div>
                <div className="flex mt-6 items-center ">
                  <div className="flex w-72">
                    <span className="mr-3">{serviceData.ftf}</span>

                  </div>
                  <div className="flex ml-6 items-center  w-72">
                    <span className="mr-3">{serviceData.total_area}</span>

                  </div>

                </div>
                {/* <p className="leading-relaxed text-xs md:text-sm lg:text-base mt-9">{serviceData.description}</p> */}
                <div className="flex justify-evenly items-center">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 h-10 mr-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mt-12"
                  />
                  <Button size="sm" color="warning" className="m-auto flex justify-between gap-3 p-2 lg:text-sm md:text-md text-sm mt-12 text-white hover:bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" onClick={handleAddToCart}> Add To Cart
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                  </Button>

                </div>
              </div>
            </div>
            <div>
              <pre className="leading-relaxed text-xs md:text-sm lg:text-base mt-9">{serviceData.description}</pre>
            </div>
          </div>
        </section>

      </div>
      <div className="pt-0 flex justify-center items-center text-base md:text-lg lg:text-xl font-bold">
        <span className="border-solid border-1 p-2 ">Price : <span className="bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">₹{serviceData.price}</span></span>
      </div>
    </>
  );
}