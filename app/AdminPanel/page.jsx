"use client";
import React from 'react';
import NavbarAdmin from './Components/navbar/page';
import DataCard from './Components/DataCards/page';
import CircularData from './Components/circularProgress/page';
import { FooterWithSocialLinks } from '../GenresSearch/GenresComponents/GenersFooter/page';
import { EcommerceCard } from './Components/Disclaimer/page';
import { useRouter } from 'next/navigation';

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
            <DataCard />
            <CircularData />       
            <FooterWithSocialLinks />
        </div>
    );
};

export default Page;
