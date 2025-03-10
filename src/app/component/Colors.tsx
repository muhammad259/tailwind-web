import Image from "next/image";


export default function colors() {
    return (
        <div className=" ">
            {/*Main section*/}
            <div className="mt-6 m-4 p-4">
                <h1 className="text-3xl font-bold flex items-center justify-center">Colors</h1>
                <span className="text-xs font-medium flex items-center justify-center">Checkout our products colors.</span>
            </div>
            {/*middle image section*/}
            <div className="w-full h-full">
                <Image src="/Image (10).svg" alt=" " width={1780} height={850} />
            </div>
            {/*Bottom image section*/}
            <div className="flex items-center justify-center ">
                <div className="relative -mt-28 animate-bounce hover:animate-pulse">
                    <span className="top-[168] m-6 mt-10 p-36 text-[24px] font-extrabold text-white absolute">01</span>
                    <Image src="/Image (12).svg" alt="" width={264} height={264} className="" />
                </div>
                <div className="relative -mt-28 animate-bounce hover:animate-pulse">
                    <span className="top-[168] m-6 mt-10 p-36 text-[24px] font-extrabold text-white absolute">02</span>
                    <Image src="/Image (12).svg" alt="" width={264} height={264} className="" />
                </div>
                <div className="relative -mt-28 animate-bounce hover:animate-pulse">
                    <span className="top-[168] m-6 mt-10 p-36 text-[24px] font-extrabold text-white absolute">03</span>
                    <Image src="/Image (12).svg" alt="" width={264} height={264} className="" />
                </div>
                <div className="relative -mt-28 gap-4 animate-bounce hover:animate-pulse">
                    <span className="top-[168] m-6 mt-10 p-36 text-[24px] font-extrabold text-white absolute">04</span>
                    <Image src="/Image (12).svg" alt="" width={264} height={264} className="" />
                </div>
            </div>

        </div>
    )
};