"use client"
import {
  Card,

  Checkbox,

  Typography,
} from "@material-tailwind/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Textarea } from "@material-tailwind/react";
export function SimpleRegistrationForm() {
  return (

    <div className="container mx-auto px-4 pb-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full md:w-2/3 flex-wrap md:flex-nowrap gap-4 px-4">
          <Input type="text" label="Name" className="w-full md:w-1/2" />
          <Input type="email" label="Email" className="w-full md:w-1/2" />
          <Button
            size="lg"
            variant="ghost"
            color="warning"
            className="m-auto py-1 p-6 lg:text-lg md:text-md text-sm text-white"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>

  );
}