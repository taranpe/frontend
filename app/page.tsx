import HeroBuyOne from "@/components/HeroBuyOne";
import ShopByCollection from "@/components/ShopByCollection";
import ProductSection from "@/components/ProductSection";
import ServiceSection from "@/components/ServiceSection";
import Todaypick from "@/components/Todaypick";
import Banner from "@/components/Banner";
import Latest from "@/components/Latest";
import Angelic from "@/components/Angelic";
import Bannertwo from "@/components/Bannertwo";
import Aura from "@/components/Aura";
import Testimonials from "@/components/Testimonials";
import BenefitsSection from "@/components/BenefitsSection";

export default function HomePage() {
  return (
    <>
      {/* HERO / OFFER */}
      <HeroBuyOne />

      {/* SHOP BY CATEGORY */}
      <ShopByCollection />

      {/* FEATURED PRODUCTS */}
      <ProductSection />

      {/* SERVICES */}
      <ServiceSection />

      {/* TODAY'S PICK */}
      <Todaypick />

      {/* PROMOTIONAL BANNER */}
      <Banner />

      {/* LATEST COLLECTION */}
      <Latest />

      {/* ANGELIC COLLECTION */}
      <Angelic />

      {/* SECOND BANNER */}
      <Bannertwo />

      {/* AURA COLLECTION */}
      <Aura />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* BENEFITS / TRUST BADGES */}
      <BenefitsSection />
    </>
  );
}
