import HeroBuyOne from "@/components/HeroBuyOne";
import ShopByCollection from "@/components/ShopByCollection";
import ProductSection from "@/components/ProductSection";
import ServiceSection from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/faq";

export default function HomePage() {
  return (
    <>
      <HeroBuyOne />
      <ShopByCollection />
      <ProductSection />
      <Faq />
      <ServiceSection />
      <Testimonials />
      
    </>
  );
}
