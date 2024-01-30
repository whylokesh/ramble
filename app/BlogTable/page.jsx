import React from 'react'
import TableMain from './tableMain/page'
import NavbarAdmin from '../AdminPanel/Components/navbar/page'
import { FooterWithSocialLinks } from '../components/footer/page'

const page = () => {
    return (
        <>
            <NavbarAdmin /> 
            <TableMain />
            <FooterWithSocialLinks />
        </>
    )
}

export default page