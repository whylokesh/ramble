"use client"
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Image
} from "@nextui-org/react";
import { HeartIcon } from "../hearticon/IconFOrHeart";
import Link from 'next/link';

const Testimonialscard = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  return (
    <>
      <div className="lg:px-[6rem] md:px-12 px-6 overflow-x-hidden">
        <div className="">
          <div className="lg:p-0 md:p-0 p-6 flex justify-center gap-6 items-center flex-wrap scrollbar-hide">
            <Link href="/GenresSearch?location=delhi">
              <Card className="col-span-12 sm:col-span-4 h-[230px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">Delhi</p>
                  <h4 className="text-white font-medium text-large">981+ medias</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="images/Delhi.jpg"
                />
              </Card>
            </Link>
            <Link href="/GenresSearch?location=mumbai">
              <Card className="col-span-12 sm:col-span-4 h-[230px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">Mumbai</p>
                  <h4 className="text-white font-medium text-large">1716+ medias</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="images/Mumbai.jpg"
                />
              </Card>
            </Link>
            <Link href="/GenresSearch?location=bengaluru">
              <Card className="col-span-12 sm:col-span-4 h-[230px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">Bengaluru</p>
                  <h4 className="text-white font-medium text-large">961+ medias</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="images/Bengaluru.jpg"
                />
              </Card>
            </Link>
            <Link href="/GenresSearch?location=chennai">
              <Card className="col-span-12 sm:col-span-4 h-[230px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">Chennai</p>
                  <h4 className="text-white font-medium text-large">482+ medias</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="images/Chennai.jpg"
                />
              </Card>
            </Link>
            <Link href="/GenresSearch?location=hyderabad">
              <Card className="col-span-12 sm:col-span-4 h-[230px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">Hyderabad</p>
                  <h4 className="text-white font-medium text-large">897+ medias</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="images/Hyderabad.jpg"
                />
              </Card>
            </Link>
            <Link href="/GenresSearch?location=pune">
              <Card className="col-span-12 sm:col-span-4 h-[230px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">Pune</p>
                  <h4 className="text-white font-medium text-large">429+ medias</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="images/Pune.jpg"
                />
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonialscard;