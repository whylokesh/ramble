import React from "react";
import { CardDefault } from "./table/page";
import NavbarAdmin from "../AdminPanel/Components/navbar/page";
import { FooterWithSocialLinks } from "../components/footer/page";

const page = () => {
  return (
    <div>
      <NavbarAdmin />
      <CardDefault />
      <FooterWithSocialLinks />
    </div>
  );
};

export default page;
