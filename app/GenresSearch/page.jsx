"use client";
import React from "react";
import NavbarG from "./GenresComponents/navbarGenres/page";
import GeneresCardScrolling from "./GenresComponents/GenersCardScroll/page";
import Filters from "./GenresComponents/SearchFilters/page";
import GenresCard from "./GenresComponents/cards/page";
import AboutCard from "./GenresComponents/AboutUsCard/page";
import BlogmainSection from "./GenresComponents/BlogSectionMain/page";
import { FooterWithSocialLinks } from "../components/footer/FooterForMain";
import Nav from "../navbar/page";
const GenresMain = () => {
  return (
    <div>
      <Nav />
      <GeneresCardScrolling />
      <Filters />
      <GenresCard />
      <AboutCard />
      <BlogmainSection />
      <FooterWithSocialLinks />
    </div>
  );
};

export default GenresMain;
