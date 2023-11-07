import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const WusCard =() => {

  return (
    <div className="lg:px-[6rem] md:px-[6rem] px-0">
     <div className=" lg:gap-20 md:gap-20 gap-9 flex lg:px-[6rem] md:px-16 px-12 flex-wrap w-full">
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="lg:w-[20%] md:w-auto w-[30rem]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Banana"
              className="w-full object-cover h-[140px]"
              src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Watermelon</b>
            <p className="text-default-500">$12.20</p>
          </CardFooter>
        </Card>
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="lg:w-[20%] md:w-auto w-[30rem] ">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Banana"
              className="w-full object-cover h-[140px]"
              src="https://images.pexels.com/photos/6899397/pexels-photo-6899397.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Watermelon</b>
            <p className="text-default-500">$12.20</p>
          </CardFooter>
        </Card>
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="lg:w-[20%] md:w-auto w-[30rem]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Banana"
              className="w-full object-cover h-[140px]"
              src="https://images.pexels.com/photos/18847835/pexels-photo-18847835/free-photo-of-restaurant-by-the-road.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Watermelon</b>
            <p className="text-default-500">$12.20</p>
          </CardFooter>
        </Card>
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="lg:w-[20%] md:w-auto w-[30rem]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Banana"
              className="w-full object-cover h-[140px]"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Watermelon</b>
            <p className="text-default-500">$12.20</p>
          </CardFooter>
        </Card>
        </div>


     <div className=" mt-10 lg:gap-20 md:gap-20 gap-9 flex lg:px-[6rem] md:px-16 px-12 flex-wrap w-full">
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="lg:w-[20%] md:w-auto w-[30rem]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Banana"
              className="w-full object-cover h-[140px]"
              src="https://images.pexels.com/photos/5669652/pexels-photo-5669652.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Watermelon</b>
            <p className="text-default-500">$12.20</p>
          </CardFooter>
        </Card>
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="lg:w-[20%] md:w-auto w-[30rem]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Banana"
              className="w-full object-cover h-[140px]"
              src="https://images.pexels.com/photos/6899392/pexels-photo-6899392.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Watermelon</b>
            <p className="text-default-500">$12.20</p>
          </CardFooter>
        </Card>
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="lg:w-[20%] md:w-auto w-[30rem]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Banana"
              className="w-full object-cover h-[140px]"
              src="https://images.pexels.com/photos/7078630/pexels-photo-7078630.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Watermelon</b>
            <p className="text-default-500">$12.20</p>
          </CardFooter>
        </Card>
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="lg:w-[20%] md:w-auto w-[30rem]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Banana"
              className="w-full object-cover h-[140px]"
              src="https://images.pexels.com/photos/6899402/pexels-photo-6899402.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Watermelon</b>
            <p className="text-default-500">$12.20</p>
          </CardFooter>
        </Card>
        </div>
    </div>
  );
}
export default WusCard;