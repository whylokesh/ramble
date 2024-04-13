import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";


// Clients - Bikaji, Lehar, Columbus, Zomato, Podaar, coke , nerolac, duke fashion, Skoda, walkaroo, Ambit Finvest,

const WusCard = () => {

  return (
    <div className=" px-0">
      <div className=" lg:gap-20 md:gap-20 gap-9 flex lg:px-[6rem] md:px-16 px-12 flex-wrap w-full">
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="lg:w-[20%] md:w-auto w-[30rem]">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Banana"
              className="w-full object-cover h-[140px]"
              src="images/bikaji2.png"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Bikaji</b>

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
              src="images/skoda3.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Skoda</b>

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
              src="images/columbus2.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Columbus</b>

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
              src="images/zomato3.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Zomato</b>

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
              src="images/poddar11.png"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Poddar</b>

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
              src="images/coke2.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Coca-cola</b>

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
              src="images/nerolac.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Nerolac</b>

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
              src="images/duke.png"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Duke Fashion</b>

          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
export default WusCard;