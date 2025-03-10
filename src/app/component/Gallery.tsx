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
            <div className="flex items-center justify-between ">
                <div className=" p-6 ">
                    <div className="relative top-[190px] ">
                        <h2 className="p-8 text-xl font-semibold absolute animate-bounce">Scooter</h2>
                        <Image src="/Image (7).svg" alt="" width={600} height={480} className="rounded-[10%]" />
                    </div>
                    <div className=" ">
                        <div className="flex  items-center  h-[480px] ">
                            <button className=" p-5 m-4  px-24  text-black hover:animate-spin bg-slate-100 rounded-md ring-4 ring-slate-300 hover:ring-slate-400 text-[16px] md:text-center font-bold">Battery charge</button>
                        </div>
                        <div className=" ">
                            <button className=" p-5 m-4  px-24  text-black hover:animate-spin bg-slate-100 rounded-md ring-4 ring-slate-300 hover:ring-slate-400 text-[16px] font-bold">Battery charge</button>
                        </div>
                        <div className=" ">
                            <button className=" p-5 m-4  px-24  text-black hover:animate-spin bg-slate-100 rounded-md ring-4 ring-slate-300 hover:ring-slate-400 text-[16px] font-bold">Battery charge</button>
                        </div>
                    </div>
                </div>
                {/*Last Left Section*/}
                <div className="gap-6 rounded-md">
                    
                    <div className="p-3 mt-4 relative ">

                        <span className="absolute mx-4 p-8 text-xl animate-bounce font-semibold">Built Quality</span>
                        <Image src="/Image (8).svg" alt="" width={500} height={400} className="rounded-lg " />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="p-3 mt-4 relative ">
                        <span className="absolute mx-4 p-8 text-xl animate-bounce font-semibold">Parts</span>
                        <Image src="/Image (9).svg" alt="" width={500} height={400} className="rounded-lg " />
                    </div>
                </div>              
            </div>
   <br />
   <br />
   <br />
   <br />
   <br />
   <hr />
        </div>
    )
};