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
 

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <FeaturedIn />
     <VideoSec/>
      <Scrollsec />
      <Operation />
      <ObviousChoice />
      <CustomersReviews />
      <BlogNews />
        <FooterWrap/>
    </>
  );
}
