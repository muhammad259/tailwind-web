


export default function ProductInformation() {
    return (
        <div className=" py-4 ">
            {/*Navbar top ke liya*/}
            <div className=" ">
                <h1 className="flex items-center justify-center text-3xl font-bold animate-bounce">Product Information</h1>
                <p className="flex items-center justify-center text-xs animate-bounce">Our Scooter has following unique design and technology features:</p>
            </div>
            {/*Product info*/}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10  ">
                {/*Image  ke liya*/}
                <div className="animate-pulse w-full">
                    <img src="/image (1).svg" alt=" " width={740} height={700} />
                </div>
                {/*Text  ke liya*/}
                <div className="container  ">
                    <div className="flex  ">
                        <img src="/Vector.svg" alt=" " width={45} height={45} />
                        <p className="m-2">Car grade lithium battery</p>
                    </div>
                    <div className="flex">
                        <img src="/Vector.svg" alt=" " width={45} height={45} />
                        <p className="m-2">Car grade lithium battery</p>
                    </div>
                    <div className="flex">
                        <img src="/Vector.svg" alt=" " width={45} height={45} />
                        <p className="m-2">Car grade lithium battery</p>
                    </div>
                    <div className="flex">
                        <img src="/Vector.svg" alt=" " width={45} height={45} />
                        <p className="m-2">Car grade lithium battery</p>
                    </div>
                    <div className="flex">
                        <img src="/Vector.svg" alt=" " width={45} height={45} />
                        <p className="m-2">Car grade lithium battery</p>
                    </div>
                    <div className="flex">
                        <img src="/Vector.svg" alt=" " width={45} height={45} />
                        <p className="m-2">Car grade lithium battery</p>
                    </div>
                </div>

            </div>
           <br />
           <hr />
        </div>

    )
};