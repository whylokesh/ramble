"use client"
import {
  Card,

  Checkbox,

  Typography,
} from "@material-tailwind/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Textarea } from "@material-tailwind/react";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function SimpleRegistrationForm() {


  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const handleSubmit = async () => {
    // Use state values
    console.log(name, email);

    // Prepare data to be sent
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    try {

      // Make POST request to the new API URL with authorization header
      const response = await fetch("api/add-user-to-newsletter", {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Handle response
      if (response.ok) {
        console.log("Data submitted successfully");
        console.log(await response.json());
        toast.success("Submitted successfully")
        // You can add additional logic here if needed
      } else {
        console.error("Failed to submit data");
        toast.error("User already registered")
        // Handle error, show user an error message, etc.
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("Error Posting Data")
      // Handle error, show user an error message, etc.
    }
  };


  return (

    <div className="container mx-auto px-4 pb-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full md:w-2/3 flex-wrap md:flex-nowrap gap-4 px-4">
          <Input type="text" label="Name" value={name} onChange={(e) => {
            setName(e.target.value);

          }} className="w-full md:w-1/2" />
          <Input type="email" label="Email" value={email} onChange={(e) => {
            setEmail(e.target.value);

          }} className="w-full md:w-1/2" />
          <Button
            size="lg"
            variant="ghost"
            color="warning"
            className="m-auto py-1 p-6 lg:text-lg md:text-md text-sm text-white"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>

  );
}