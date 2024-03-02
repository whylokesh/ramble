import React from "react";
import NavbarAdmin from "../AdminPanel/Components/navbar/page";
import TableCategory from "./components/tableCategory/page";
import { FooterWithSocialLinks } from "../components/footer/FooterForMain";

const page = () => {
  return (
    <div>
      <NavbarAdmin />
      <TableCategory />
      <FooterWithSocialLinks />
    </div>
  );
};

export default page;
