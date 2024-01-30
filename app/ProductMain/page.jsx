"use client";
import React from "react";
import NavbarG from "./ProductMainComponents/NavabrProduct/page";
import HorizontalCard from "./ProductMainComponents/MainCardDisplay/page";
import AboutServiceCard from "./ProductMainComponents/Aboutservice/page";
import { FooterWithSocialLinks } from "./ProductMainComponents/productFooter/page";
import Nav from "../navbar/page";
import Contact from "../components/Form/page";
import Blogmain from "../components/Blogmain/page";

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
