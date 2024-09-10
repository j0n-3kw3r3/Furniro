import BeautifulRooms from "@/components/homepage/beautifulRooms";
import BrowseTheRange from "@/components/homepage/browseTheRange";
import FooterHome from "@/components/homepage/footerHome";
import FurnitureGallery from "@/components/homepage/furnitureGallery";
import Hero from "@/components/homepage/hero";
import OurProduct from "@/components/homepage/ourProduct";
export default function Home() {
  return (
    <div className="text-[#3A3A3A]">
      <div className=""><Hero/></div>
      <div className=""><BrowseTheRange/></div>
      <div className=""><OurProduct/></div>
      <div className="hidden md:block"> <BeautifulRooms/></div>
      <div className="hidden md:block"> <FurnitureGallery/></div>
      <div className=""><FooterHome/></div>
     
     
     
    
    
     
    </div>
  );
}
