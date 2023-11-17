"use client";
import React from "react";
import NavbarG from "./ProductMainComponents/NavabrProduct/page";
import HorizontalCard from "./ProductMainComponents/MainCardDisplay/page";
import AboutServiceCard from "./ProductMainComponents/Aboutservice/page";
import { FooterWithSocialLinks } from "./ProductMainComponents/productFooter/page";

const page = () => {
  return (
    <div>
      <NavbarG />
      <HorizontalCard />
      <AboutServiceCard />
      <FooterWithSocialLinks />
    </div>
  );
};

export default page;
