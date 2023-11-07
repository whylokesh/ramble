import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { HeartIcon } from "../hearticon/page";

const Testimonialscard = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  return (
    <>
    <div className="lg:px-[6rem] md:px-12 px-6 overflow-x-hidden">
        <div className="lg:p-[3rem] md:p-12 p-0">
      <div className="lg:p-0 md:p-12 p-6 flex justify-between items-center flex-wrap ">
        <Card className="lg:w-[27%] md:w-auto w-auto lg:mt-0 md:mt-0 ">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="lg:text-lg md:text-md text-sm font-bold leading-none  bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
                  Zoey Lang
                </h4>
                <h5 className="text-small font-bold tracking-tight bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
                  @zoeylang
                </h5>
              </div>
            </div>
            <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
          </CardHeader>
              <CardBody className="px-3 py-0 text-xs md:text-sm lg:text-base text-white">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
            </p>
            <span className="pt-2">
              #FrontendWithZoey
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="lg:w-[27%] md:w-auto w-auto lg:mt-0 md:mt-0 mt-8" >
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-lg font-bold leading-none  bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
                  Zoey Lang
                </h4>
                <h5 className="text-small font-bold tracking-tight bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
                  @zoeylang
                </h5>
              </div>
            </div>
            <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-sm md:text-sm lg:text-base text-white">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
            </p>
            <span className="pt-2">
              #FrontendWithZoey
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="lg:w-[27%] md:w-auto w-auto lg:mt-0 md:mt-0 mt-8">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-lg font-bold leading-none  bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
                  Zoey Lang
                </h4>
                <h5 className="text-small font-bold tracking-tight bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
                  @zoeylang
                </h5>
              </div>
            </div>
            <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-sm md:text-sm lg:text-base text-white">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
            </p>
            <span className="pt-2">
              #FrontendWithZoey
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      </div>
      </div>
      <div className="lg:p-[6rem] md:p-12 p-6 flex justify-center gap-20 items-center flex-wrap">
        <Card className="lg:w-[27%] md:w-auto w-auto ">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-xl font-bold leading-none  bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
                  Zoey Lang
                </h4>
                <h5 className="text-small font-bold tracking-tight bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent">
                  @zoeylang
                </h5>
              </div>
            </div>
            <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-sm md:text-sm lg:text-base text-white">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
            </p>
            <span className="pt-2">
              #FrontendWithZoey
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="lg:w-[27%] md:w-auto w-0  lg:h-auto md:h-auto h-0 lg:visible md:visible invisible ">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://images.pexels.com/photos/4519122/pexels-photo-4519122.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-lg font-bold leading-none  bg-gradient-to-r from-[#F5A524] to-[#FF705B]  bg-clip-text text-transparent">
                  Zoey Lang
                </h4>
                <h5 className="text-small font-bold tracking-tight bg-gradient-to-r from-[#F5A524] to-[#FF705B]  bg-clip-text text-transparent">
                  @zoeylang
                </h5>
              </div>
            </div>
            <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-sm md:text-sm lg:text-base text-white">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
            </p>
            <span className="pt-2">
              #FrontendWithZoey
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      </div>
      </div>
    </>
  );
};

export default Testimonialscard;
