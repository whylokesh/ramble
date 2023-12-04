"use client"
import React from 'react'
import NavbarAdmin from './Components/navbar/page'
import DataCard from './Components/DataCards/page'
import CircularData from './Components/circularProgress/page'
import { FooterWithSocialLinks } from '../GenresSearch/GenresComponents/GenersFooter/page'
import { EcommerceCard } from './Components/Disclaimer/page'

const page = () => {
  return (
    <div>
        <NavbarAdmin/>
        <DataCard />
        <CircularData />
        
        <FooterWithSocialLinks />
    </div>
  )
}

export default page