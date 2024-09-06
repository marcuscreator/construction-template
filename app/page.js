import Image from "next/image";
import Header from "./comonents/header";
import Topdetails from "./comonents/top-details";
import HeroCarousel from "./comonents/hero-carousel";
import AboutUsSection from "./comonents/about-us";
import Stats from "./comonents/stats";
import ConstructionSection from "./comonents/construction-section";
import ProjectCategories from "./comonents/project-categories";
import Testimonials from "./comonents/testimonials";
import Cta from "./comonents/cta";
import Video from "./comonents/video";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <AboutUsSection />

      <Stats/>

      <ConstructionSection/>

      <ProjectCategories/>

      <Testimonials/>

      <Cta/>

      <Video/>
    </>
  );
}
