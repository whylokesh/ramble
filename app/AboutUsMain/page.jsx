"use client"
import React from "react";
import Nav from "../navbar/page";
import { FooterWithSocialLinks } from "../GenresSearch/GenresComponents/GenersFooter/FooterForGenres";

const page = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const images = [
    "https://media.istockphoto.com/id/1304368529/photo/tokyo-japan-9-november-2019-central-part-of-tokyo-city-with-traffic-lanes-with-pedestrians.jpg?b=1&s=612x612&w=0&k=20&c=bdobKRkvsUzoISbvCN1cWQG1WLwPaMEWQ6U23oUjHW8=",
    "https://media.istockphoto.com/id/1372563311/photo/blurred-image-of-kolkata-west-bengal-india-kolkata-cityscape-empty-advertisement-boards-and.jpg?b=1&s=612x612&w=0&k=20&c=BxWmmObM_a5XgIgpr1Zl8ZoNu09mUWGLi4iBR2wV2iU=",
    "https://media.istockphoto.com/id/1304368556/photo/tokyo-japan-9-november-2019-central-part-of-tokyo-city-with-traffic-lanes-with-pedestrians.jpg?b=1&s=612x612&w=0&k=20&c=g43ZjdVgf4NK52nzGVC3oHTmHdjgbGF4GKMBJpwtdFU=",
  ];

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <>
      <Nav />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="font-bold sm:text-4xl text-3xl mb-4  bg-gradient-to-r from-[#ffff] to-[#f2f2f2] to-[#d3d3d3] to-[#ff7f7f] bg-clip-text text-transparent">
              Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed text-white">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      <h1 className="font-bold text-center bg-gradient-to-r py-2 from-[#F5A524] to-[#FF705B] to-danger to-[#FF6890] bg-clip-text text-transparent mt-8 mb-8 text-5xl">Our Leadership</h1>
      <div className="flex justify-center lg:flex-nowrap flex-wrap p-5">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-20 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <img
                src="/Anant-Uncle.png"
                alt="Ramble"
                className="inline-block w-72 text-gray-400 mb-8"
              />
              <p class="leading-relaxed text-md">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p class="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <img
                src="/Shivam.png"
                alt="Ramble"
                className="inline-block w-72 text-gray-400 mb-8"
              />
              <p class="leading-relaxed text-md">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p class="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </section>
      </div>
      <h1 className="font-bold text-center bg-gradient-to-r py-2 from-[#F5A524] to-[#FF705B] to-danger to-[#FF6890] bg-clip-text text-transparent mt-8 mb-8  text-5xl">Our Work in Action</h1>
      <section class="text-gray-600 body-font p-5">
  <div class="container px-5 py-12  mx-auto flex gap-8 flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="font-bold text-2xl mb-2 bg-gradient-to-r from-[#ffff] to-[#f2f2f2] to-[#d3d3d3] to-[#ff7f7f] bg-clip-text text-transparent">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div class="leading-relaxed lg:text-lg text-md text-white">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-bold text-3xl bg-gradient-to-r from-[#ffff] to-[#f2f2f2] to-[#d3d3d3] to-[#ff7f7f] bg-clip-text text-transparent">2.7K</h2>
        <p class="leading-relaxed text-white">Users</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-bold text-3xl bg-gradient-to-r from-[#ffff] to-[#f2f2f2] to-[#d3d3d3] to-[#ff7f7f] bg-clip-text text-transparent">1.8K</h2>
        <p class="leading-relaxed text-white">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-bold text-3xl bg-gradient-to-r from-[#ffff] to-[#f2f2f2] to-[#d3d3d3] to-[#ff7f7f] bg-clip-text text-transparent">35</h2>
        <p class="leading-relaxed text-white">Downloads</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-bold text-3xl bg-gradient-to-r from-[#ffff] to-[#f2f2f2] to-[#d3d3d3] to-[#ff7f7f] bg-clip-text text-transparent">4</h2>
        <p class="leading-relaxed text-white">Products</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 h-72 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src={images[currentImageIndex]} alt="stats" />
    </div>
  </div>
</section>
      <FooterWithSocialLinks />
    </>
  );
};

export default page;
