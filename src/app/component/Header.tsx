import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";


export default function Header() {
    return(
      <>
      <header className="">
        <div className="w-full px-[50px] flex items-center justify-between h-[60px] border-b border-[#EAE8F3] z-50 sticky top-5 scroll-smooth ">
          
            <div className="img-parent w-[69px] h-[47px] mt-3">
            <img src="/logo (3).png" alt="" width={40} height={50} className="object-contain p-0"/>
            </div>
            <div className="text-[12px]">
              <Link href="/" className=" px-8 gap-4 text-gray-950 opacity-50" >PRODUCT</Link>
              <Link href="/" className="px-8 gap-4 text-gray-950 opacity-50">GALLERY</Link>
              <Link href="/" className="px-8 gap-4 text-gray-950 opacity-50">CONTACT</Link>
            </div>
            <div className="flex gap-7 h-[70.67%] text-[12px]">
            <Link href="/" className=" text-gray-500 bg-slate-50 py-2 px-4 w-[74.35] p-3 rounded-md">LOG IN</Link>
            <Link href="/" className="bg-[#42454A] text-white rounded-md p-3">SIGN UP</Link>
            </div>          
        </div>
        <div></div>
      </header>
      </>
    )
};