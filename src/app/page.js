import Image from "next/image";
import Hero from "./component/Hero";
import ProductInformation from "./component/ProductInformation";



export default function Home() {
  return (
    
       <div className="flex flex-col">
       <Hero/>
       <ProductInformation/>
       </div>
    
   
  );
}
