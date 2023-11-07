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
        <div className="lg:px-[6rem] md:px-[6rem] px-12">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                 
                  <Input type="text" variant="flat"  className="w-full    text-base  py-1 px-3 leading-8" label="Name" />
                    
                
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                <Input type="email" variant="flat"  className="w-full    text-base  py-1 px-3 leading-8" label="Email" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                 
                  <Textarea
                    id="message"
                    name="message"
                    className="w-full py-1 px-3 lg:h-[15rem] md:h-[15rem] h-auto leading-6 "
                    style={{height: "15rem", color: "white"}}
                    label="Message"
                  ></Textarea>
                </div>
              </div>
              <Button size="lg" variant="ghost" color="warning" className="m-auto gap-2 p-7 lg:text-lg md:text-mds text-sm mt-12 text-white">
            Submit
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
            </div>
          </div>

      </div>

    );
  }