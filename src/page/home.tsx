import BeautifulRooms from "@/components/homepage/beautifulRooms";
import BrowseTheRange from "@/components/homepage/browseTheRange";
import FooterHome from "@/components/homepage/footerHome";
import FurnitureGallery from "@/components/homepage/furnitureGallery";
import Hero from "@/components/homepage/hero";
import OurProduct from "@/components/homepage/ourProduct";
export default function Home() {
  return (
    <div className="text-[#3A3A3A]">
     <Hero/>
     <BrowseTheRange/>
     <OurProduct/>
     <BeautifulRooms/>
     <FurnitureGallery/>
     <FooterHome/>
    </div>
  );
}
