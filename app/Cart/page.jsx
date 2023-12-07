import React from 'react'
import Nav from '../navbar/page'
import CartData from './components/cartTable/page'
import { FooterWithSocialLinks } from '../GenresSearch/GenresComponents/GenersFooter/page'


const page = () => {
  return (
    <>
      <Nav />
      <CartData />
      <FooterWithSocialLinks />
    </>
  )
}

export default page