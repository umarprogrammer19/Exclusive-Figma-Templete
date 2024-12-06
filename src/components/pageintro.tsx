import Image from "next/image"
const PageIntro = ({ children, intro, text, nav, isTime = true }: { children?: React.ReactNode, intro: string, text?: string, nav?: string, isTime?: boolean, }) => {
    return (
        <div className="w-full pt-12">
            <div className="w-full text-[#DB4444] flex items-center gap-3 font-medium">
                <span className="w-5 h-10 bg-[#DB4444] rounded-md"></span>
                <span>{intro}</span>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
                <div className="flex items-center gap-20">
                    <h1 className="xs:text-4xl text-xl xs:tracking-normal tracking-tight font-medium">{text}</h1>
                    <div className="flex items-center justify-center gap-x-4 lg:gap-x-6">
                        {!isTime && <ul className="flex gap-x-4 text-lg lg:gap-x-3 lg:mr-[620px] lg:text-3xl">
                            <li className="flex flex-col items-center font-bold">
                                <span className="text-xs font-medium">Days</span>
                                03 :
                            </li>
                            <li className="flex flex-col items-center font-bold">
                                <span className="text-xs font-medium">Hours</span>
                                23 :
                            </li>
                            <li className="flex flex-col items-center font-bold">
                                <span className="text-xs font-medium">Minutes</span>
                                19 :
                            </li>
                            <li className="flex flex-col items-center font-bold">
                                <span className="text-xs font-medium">Seconds</span>
                                56
                            </li>
                        </ul>}
                    </div>
                </div>
                {children}
                {nav === "button" ?
                    <button className="xs:px-5 xs:py-3 px-4 py-2 text-white bg-[#DB4444] rounded-sm text-base my-4">View All</button>
                    :
                    <div className={`flex items-center gap-3 ${nav === "none" ? 'hidden' : ""}`}>
                        <div className="w-10 h-10 rounded-full bg-[#F5F5F5] p-2">
                            <Image src={"/icons/navleft.png"} alt="navicon" width={600} height={600} className="w-full h-full object-contain" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#F5F5F5] p-2">
                            <Image src={"/icons/navright.png"} alt="navicon" width={600} height={600} className="w-full h-full object-contain" />
                        </div>
                    </div>}
            </div>

        </div>
    )
}

export default PageIntro