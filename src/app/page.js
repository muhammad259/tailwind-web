import Image from "next/image";
import Hero from "./component/Hero";
import ProductInformation from "./component/ProductInformation";
import HighEfficiency from "./component/HighEfficiency";
import Accessories from "./component/Accessories";
import Gallery from "./component/Gallery";
import Colors from "./component/Colors";
import Style from "./component/Style";
import Testomonial from "./component/Testomonial";
import Last from "./component/Last";





export default function Home() {
  return (

    <div className="flex flex-col">
      <Style/>
      <Hero />
      <ProductInformation />
      <HighEfficiency />
      <Accessories />
      <Gallery />
      <Colors />
      <Testomonial/>
      <Last/>
      </div>

      );
};
