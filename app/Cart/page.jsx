import React from 'react'
import Nav from '../navbar/page'

import { FooterWithSocialLinks } from '../GenresSearch/GenresComponents/GenersFooter/page'
import { BookingCard } from './components/cartcards/page'


const page = () => {
  return (
    <>
      <Nav />
      <BookingCard />
      <FooterWithSocialLinks />
    </>
  )
}

export default page