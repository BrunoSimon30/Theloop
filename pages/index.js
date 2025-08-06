import Scrollsec from "@/components/Scrollsection/Scrollsec";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";
import MainBanner from "@/components/Banner/MainBanner";
import FeaturedIn from "@/components/Featured/FeaturedIn";
import Operation from "@/components/Opreation";
import ObviousChoice from "@/components/Obvious/ObviousChoice";
import CustomersReviews from "@/components/Customers/CustomersReviews";
import BlogNews from "@/components/News/BlogNews";
 
import VideoSec from "@/components/VideoSec";
import FooterWrap from "@/components/Footer/FooterWrap";
import PopupModal from "@/components/PopupModal";
import { useState } from "react";
 

export default function Home() {
   const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header />
      <MainBanner onOpenModal={() => setOpenModal(true)} />
      <FeaturedIn onOpenModal={() => setOpenModal(true)} />
   
      <Scrollsec onOpenModal={() => setOpenModal(true)}  />
      <Operation  onOpenModal={() => setOpenModal(true)}  />
      <ObviousChoice  onOpenModal={() => setOpenModal(true)}  />
      <CustomersReviews  />
      <BlogNews />
        <FooterWrap  onOpenModal={() => setOpenModal(true)} />
         <PopupModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
