import React from "react";
import NavbarG from "./ProductMainComponents/NavabrProduct/page";
import HorizontalCard from "./ProductMainComponents/MainCardDisplay/page";
import AboutServiceCard from "./ProductMainComponents/Aboutservice/page";
import { FooterWithSocialLinks } from "./ProductMainComponents/productFooter/page";
import Nav from "../navbar/page";
import Contact from "../components/Form/page";
import Blogmain from "../components/Blogmain/page";


export async function generateMetadata({ params }) {

  const serviceID = params.serviceID;
  console.log("params:", serviceID);

  try {
    const response = await fetch(
      `http://localhost:3009/search/service-details?serviceId=${serviceID}`
    );

    if (response.ok) {
      const data = await response.json();
      const service = data.data.service;

      return {
        title: service.name,
        description: service.description,
      };

    } else {

      // return {
      //   title: "service.name",
      //   description: "service.description",
      // };

      throw new Error("Failed to fetch service details");
    }
  } catch (error) {
    console.error("Error fetching service details:", error);
  }
}
const page = () => {
  return (
    <div>
      <Nav /> 
      <HorizontalCard />
      {/* <AboutServiceCard /> */}
      <Blogmain/>
      <Contact/>
      <FooterWithSocialLinks />
    </div>
  );
};

export default page;
