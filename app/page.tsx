import HeroBuyOne from "@/components/HeroBuyOne";
import ShopByCollection from "@/components/ShopByCollection";
import ProductSection from "@/components/ProductSection";
import ServiceSection from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/faq";
import WhyChooseUs from "@/components/WhyChooseUs";
import BadgesSection from "@/components/BadgesSection";
import AboutUsSection from "@/components/AboutUsSection";

export default function HomePage() {
  return (
    <>
      <HeroBuyOne />
      <ShopByCollection />
      <AboutUsSection/>
      <ProductSection />
      <Faq />
      <ServiceSection />
      <WhyChooseUs />
      <Testimonials />
      
<BadgesSection />
      
    </>
  );
}
