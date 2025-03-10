import Image from "next/image";


export default function Testomonial() {
    return (
        <div>
            {/*main sec*/}
            <div className="flex items-center justify-center py-4 mt-3 ">
                <h1 className="text-3xl font-bold">Testimonials</h1>
            </div>
            {/*main sec*/}
            <div className="flex items-center justify-between gap-3 flex-row md:flex ">
            <div>
                <Image src="/Card01.svg" alt=" " width={360} height={366} />
            </div>
            <div>
                <Image src="/Card02.svg" alt=" " width={360} height={366} />
            </div>
            <div className="px-3">
                <Image src="/Card03.svg" alt=" " width={360} height={366} />
            </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
} 