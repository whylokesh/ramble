"use client"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { Button } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";

function truncateDescription(description) {
  if (description.length > 200) {
    return `${description.slice(0, 200)}...`;
  }
  return description;
}

function truncatetitle(description) {
  if (description.length > 15) {
    return `${description.slice(0, 25)}...`;
  }
  return description;
}

export function BookingCard() {
  const [cartItems, setCartItems] = React.useState([]);
  const route = useRouter();

  React.useEffect(() => {
    // Function to fetch cart items from the API
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          // Handle case where token is not available
          return;
        }

        const response = await fetch("http://localhost:3009/cart/view-cart", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCartItems(data.data);
        } else {
          // Handle error response
          console.error("Failed to fetch cart items");
        }
      } catch (error) {
        console.error("Error fetching cart items", error);
      }
    };

    // Call the fetchCartItems function when the component mounts
    fetchCartItems();
  }, []); // The empty dependency array ensures that this effect runs only once on mount


  // Function to handle order from the cart
  const handlePlaceOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        // Handle case where token is not available
        return;
      }

      const response = await fetch("http://localhost:3009/order/place-order", {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json", // Add this header for JSON content
        },
        // You may need to send additional data in the request body if required by your API
        // Example: body: JSON.stringify({ key: value }),
      });

      const data = await response.json();

      if (response.ok && data.success == true) {
        // Handle success response
        console.log("Order placed successfully:", data);
        window.location.reload()
        // You may want to perform additional actions after placing the order
      } else {
        // Handle error response
        console.error("Failed to place order:", data);
        window.location.reload()
      }
    } catch (error) {
      console.error("Error placing order", error);
    }
  };

  if (cartItems.length > 0) {
    return (
      <>
        <Typography
          variant="h3"
          color="blue-gray"
          className="mt-9 mb-9 text-2xl md:text-2xl lg:text-[2.5rem] text-white flex  justify-center items-center "
        >
          Welcome User to Your Cart
        </Typography>
        <div className="px-12 py-4 flex flex-wrap justify-between">
          {cartItems.map((item) => (
            <Card className="lg:w-1/4 md:w-1/3 w-full h-[33rem] shadow-lg mb-8" key={item.id}>
              <CardHeader floated={false} color="blue-gray" className="object-contain" >
                <img

                  src={`${item.Service.image_url}`}
                  alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 ">
                  <IconButton
                    size="sm"
                    color="red"
                    variant="text"
                    className="!absolute top-4 right-4 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </IconButton>
                </div>
              </CardHeader>
              <CardBody className="items-end">
                <div className="mb-3 flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray" className="font-medium">

                    {truncatetitle(item.Service.name)}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    5.0
                  </Typography>
                </div>
                <Typography color="gray">
                  {truncateDescription(item.Service.description)}
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                  <Tooltip content={`Quantity-${item.quantity}`}>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>

                    </span>
                  </Tooltip>
                  <Tooltip content="Remove From Cart">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-red-600 hover:!opacity-100 group-hover:opacity-70">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  hover:text-white cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>

                    </span>
                  </Tooltip>
                  <Tooltip content="View Service">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 hover:text-white text-gray-900 transition-colors hover:border-gray-900/10  hover:bg-blue-500 hover:!opacity-100 group-hover:opacity-70">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => {
                        route.push(`/ProductMain/${item.Service.id}`)
                      }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>


                    </span>
                  </Tooltip>
                  <Tooltip content={`${item.Service.price}$`}>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 hover:text-white text-gray-900 transition-colors hover:border-gray-900/10   hover:bg-green-400 hover:!opacity-100 group-hover:opacity-70">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>



                    </span>
                  </Tooltip>
                </div>
              </CardBody>



            </Card>
          ))}

        </div >
        <div className="flex justify-center">
          <Button
            size="lg"
            variant="ghost"
            color="warning"
            className="m-auto py-1 p-6 lg:text-lg md:text-md text-sm text-white"
            onClick={handlePlaceOrder}
          >
            Place order
          </Button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Typography
          variant="h3"
          color="blue-gray"
          className="mt-9 mb-9 text-2xl md:text-2xl lg:text-[2.5rem] text-white flex  justify-center items-center "
        >
          Welcome User to Your Cart
        </Typography>
        <div className="px-12 py-52 flex flex-wrap items-center justify-center">
          <div className="flex gap-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            <Typography
              variant="lead"
              color="blue-gray"
              className="mt-9 mb-9 text-base md:text-lg lg:text-xl text-white flex  justify-center items-center "
            >
              No data found.
            </Typography>
          </div>
        </div>
      </>
    )
  }
}