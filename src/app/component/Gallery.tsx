import Image from "next/image";





export default function Gallery() {
    return (
        <div>
            {/*MAin section*/}
            <div className=" p-4 mt-2 px-4 ">
                <h1 className="text-3xl font-bold flex items-center justify-center animate-bounce">Gallery</h1>
                <p className="text-xs font-medium flex items-center justify-center">View gallery of our products and make yourself satisfied with our creation.</p>
            </div>
            {/*Middle section*/}
            <div>
                <div className=" flex flex-col p-4  ">
                    <div className="relative top-[190px] animate-pulse mix-blend-screen">
                        <h2 className="p-8 text-xl font-semibold absolute animate-bounce">Scooter</h2>
                        <Image src="/Image (7).svg" alt="" width={633} height={480} className="rounded-[10%]" />
                    </div>
                    {/*Buttons*/}
                    <div className="">
                        <span className="">Battery Images</span>
                    </div>
                </div>
            </div>
        </div>
    )
};