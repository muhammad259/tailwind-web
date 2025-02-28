import Image from "next/image";
import Hero from "./component/Hero";
import ProductInformation from "./component/ProductInformation";
import HighEfficiency from "./component/HighEfficiency";
import Accessories from "./component/Accessories";
import Gallery from "./component/Gallery";



export default function Home() {
  return (
    
       <div className="flex flex-col">
       <Hero/>
       <ProductInformation/>
       <HighEfficiency/>
       <Accessories/>
       <Gallery/>
       </div>
    
   
  );
}
