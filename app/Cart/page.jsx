import React from 'react'
import Nav from '../navbar/page'

import { FooterWithSocialLinks } from '../GenresSearch/GenresComponents/GenersFooter/FooterForGenres'
import { BookingCard } from './components/cartcards/CardsForCart'


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