import React from "react";
import HorizontalCard from "../ProductMainComponents/MainCardDisplay/page";
import { FooterWithSocialLinks } from "../ProductMainComponents/productFooter/FooterforProduct";
import Nav from "@/app/navbar/page";
import Contact from "@/app/components/Form/page";
import Blogmain from "@/app/components/Blogmain/page";


export async function generateMetadata({ params }) {

    const serviceID = params.id;
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

        } 
    } catch (error) {
        console.error("Error fetching service details:", error);
    }
}

const page = ({ params }) => {

    return (
        <div>
            <Nav />
            <HorizontalCard serviceID={params.id} />
            <Blogmain />
            <Contact />
            <FooterWithSocialLinks />
        </div>
    );
};

export default page;