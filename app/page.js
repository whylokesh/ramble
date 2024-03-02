import Nav from "./navbar/page";
import CarouselWithContent from "./components/videocarousel/page";
import InputTrio from "./components/inputtrio/page";
import CardSecond from "./components/card/page";
import Genres from "./components/generesCard/page";
import GenresMain from "./components/genresMain/page";
import TimelineWithIcon from "./components/howwework/page";
import Mapmain from "./components/map/page";
import Testimonial from "./components/testimonials/page";
import WorkWus from "./components/workwithus/page";
import Blogmain from "./components/Blogmain/page";
import Contact from "./components/Form/page";
import { FooterWithSocialLinks } from "./components/footer/FooterForMain";

const page = () => {

  return (
    <div>
      <Nav />
      <CarouselWithContent />
      <InputTrio />
      <CardSecond />
      <GenresMain />
      <TimelineWithIcon />
      <Mapmain />
      <Testimonial />
      <WorkWus />
      <Blogmain />
      <Contact />
      <FooterWithSocialLinks />
    </div>
  );
};

export default page;
