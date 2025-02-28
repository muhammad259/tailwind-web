import Image from "next/image";


export default function Accessories() {
    return (
        <div className="p-4 mt-3 gap-6">
            {/*main*/}
            <div className="p-3 mt-2">
                <h1 className="text-3xl font-bold animate-bounce flex items-center justify-center">Multiple Accessories</h1>
                <p className="text-xs font-medium animate-bounce flex items-center justify-center">There are multiple modes for the scooter for your multiple needs.</p>
            </div>
            <br />
            <br />
            {/*mid section*/}
            <div className="py-4 m-6 pt-6 flex flex-col md:flex-row gap-3 items-center justify-between">
                {/*image 1 or text*/}
                <div className="flex flex-col ">
                    <div className="text-3xl font-bold ">
                        <h1>Golf Bag Rock</h1>
                    </div>
                    <div className="flex flex-col gap-6 mt-4">
                        <div className="flex items-center">
                            <Image src="/Vector.svg" alt=" " width={19} height={19} />
                            <p className="text-xs font-medium">Material : Aluminium alloy</p>
                        </div>
                        <div className="flex items-center">
                            <Image src="/Vector.svg" alt=" " width={19} height={19} />
                            <p className="text-xs font-medium">Material : Aluminium alloy</p>
                        </div>
                        <div className="flex items-center">
                            <Image src="/Vector.svg" alt=" " width={19} height={19} />
                            <p className="text-xs font-medium">Material : Aluminium alloy</p>
                        </div>
                        <div className="flex items-center">
                            <Image src="/Vector.svg" alt=" " width={19} height={19} />
                            <p className="text-xs font-medium">Material : Aluminium alloy</p>
                        </div>
                    </div>
                </div>
                {/*image 2*/}
                <div className="animate-pulse flex md:flex-row">
                    <Image src="/image (3).svg" alt="" width={450} height={450} />
                </div>
                {/*image 3*/}
                <div className="animate-pulse">
                    <Image src="/image (4).svg" alt="" width={490} height={430} />
                </div>


            </div>
            {/*Bottom section*/}
            <div className="py-4 m-6 pt-6  flex flex-col md:flex-row items-center justify-center gap-10 ">
                <div className=" gap-14 md:flex ">
                    {/*img 1*/}
                    <div className="flex flex-col md:flex-row animate-pulse">
                        <Image src="/image (5).svg" alt="" width={450} height={420} />
                    </div>
                    {/*img 2*/}
                    <div className="flex md:flex-row gap-3 animate-pulse">
                        <Image src="/image (6).svg" alt="" width={240} height={210} />
                    </div>
                    {/*img or text*/}
                    <div className="flex flex-col gap-2 mt-14 px-4 m-4">
                        <h1 className="text-3xl font-bold">Shopping Rack</h1>
                        <div className="flex flex-col gap-6 mt-4">
                            <div className="flex items-center">
                                <Image src="/Vector.svg" alt=" " width={19} height={19} />
                                <p className="text-xs font-medium">Material : Aluminium alloy</p>
                            </div>
                            <div className="flex items-center">
                                <Image src="/Vector.svg" alt=" " width={19} height={19} />
                                <p className="text-xs font-medium">Material : Aluminium alloy</p>
                            </div>
                            <div className="flex items-center">
                                <Image src="/Vector.svg" alt=" " width={19} height={19} />
                                <p className="text-xs font-medium">Material : Aluminium alloy</p>
                            </div>
                            <div className="flex items-center">
                                <Image src="/Vector.svg" alt=" " width={19} height={19} />
                                <p className="text-xs font-medium">Material : Aluminium alloy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<hr />
        </div>
        
    )
};