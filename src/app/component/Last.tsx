

export default function Last(){
    return(
        <div>
            {/*main*/}
            <div className="mt-4 p-3">
                <h1 className="flex items-center justify-center text-3xl font-bold">Subscribe To Newsletter</h1>
                <span className="flex items-center justify-center text-xs font-medium">Subscribe to our newsletter to get amazing offers in future.</span>
            </div>
            {/*middle*/}
            <div>
                <input className="flex min-h-[60px]  w-[150px] rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Enter your Email" />
            </div>
        </div>
    )
}