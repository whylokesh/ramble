import React from "react";
import NavbarAdmin from "../AdminPanel/Components/navbar/page";
import { FooterWithSocialLinks } from "../GenresSearch/GenresComponents/GenersFooter/FooterForGenres";
import TableCategory, { SortableTable } from "./components/tableCategory/page";

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
