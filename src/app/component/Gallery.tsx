import Image from "next/image";





export default function Gallery() {
    return (
        <div className=" h-[1200px] w-2/8 md:w-3/8 ">
            {/*MAin section*/}
            <div className=" p-4 mt-2 px-4 ">
                <h1 className="text-3xl font-bold flex items-center justify-center animate-bounce">Gallery</h1>
                <p className="text-xs font-medium flex items-center justify-center">View gallery of our products and make yourself satisfied with our creation.</p>
            </div>
            {/*Middle section*/}
            <div className="gap-6 ">
                <div className=" p-6 flex flex-row ">
                    <div className="relative top-[190px] animate-pulse mix-blend-screen">
                        <h2 className="p-8 text-xl font-semibold absolute animate-bounce">Scooter</h2>
                        <Image src="/Image (7).svg" alt="" width={633} height={480} className="rounded-[10%]" />
                    </div>
                    
                </div>
                {/*Last Left Section*/}
                <div className="flex flow-col p-3 mt-4 relative top-[112px] justify-between">
                    <span className="absolute mx-4 p-3 font-semibold">Built Quality</span>
                    <Image src="/Image (8).svg" alt="" width={500} height={400} className="rounded-md "/>
                </div>
            </div>

        </div>
    )
};