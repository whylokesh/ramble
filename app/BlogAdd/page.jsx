import React from "react";
import { CardDefault } from "./table/TableForBlog";
import NavbarAdmin from "../AdminPanel/Components/navbar/page";
import { FooterWithSocialLinks } from "../components/footer/FooterForMain";

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
