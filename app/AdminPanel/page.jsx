"use client";
import React from 'react';
import NavbarAdmin from './Components/navbar/page';
import CircularData from './Components/circularProgress/page';
import { FooterWithSocialLinks } from '../GenresSearch/GenresComponents/GenersFooter/FooterForGenres';
import { useRouter } from 'next/navigation';
import CardData from './Components/cardsForData/cardData';



const Page = () => {
    const router = useRouter();

    React.useEffect(() => {
        const isAdmin = localStorage.getItem("isAdmin") === "true";
        if (!isAdmin) {
            router.push("/");
        }
    }, []);

    return (
        <div>
            <NavbarAdmin/>
            <CardData />
            <CircularData />       
            <FooterWithSocialLinks />
        </div>
    );
};

export default Page;
