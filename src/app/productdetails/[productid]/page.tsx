import Card from "@/components/card";
import PageIntro from "@/components/pageintro";
import Image from "next/image";
import { arr } from "@/utils/productdata";
import Details from "@/components/productdet/details";

const foryou = [
    {
        title: "Kids Electric Car",
        image: "/products/toycar.png",
        price: 960,
        id: 5
    },
    {
        title: "Jr. Zoom Soccer Cleats",
        image: "/products/shoess.png",
        price: 1160,
        id: 6
    },
    {
        title: "GP11 Shooter USB Gamepad",
        image: "/products/gamecontroller.png",
        price: 660,
        id: 7
    },
    {
        title: "Quilted Satin Jacket",
        image: "/products/jacket.png",
        price: 600,
        id: 8
    },
]

const ProdDetails = ({ params }: { params: { productid: string } }) => {

    const product = arr.find((data) => data.id.toString() === params.productid)
    if(product)

    return (
        <div className="max-w-[1280px] min-h-[80vh] p-3 m-auto">
            
            <div className="w-full flex md:flex-row flex-col md:py-12">
                <div className="md:w-3/5 w-full md:flex gap-6">
                    <div className="w-full md:hidden block p-6 bg-[#F5F5F5] mb-3">
                        <Image src={product.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 gap-3">
                        <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
                        </span>
                        <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
                        </span>
                        <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
                        </span>
                        <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product.image} alt={""} width={600} height={600} className="w-full h-full object-cover" />
                        </span>
                    </div>
                    <div className="md:w-[500px] md:block hidden p-6 bg-[#F5F5F5]">
                        <Image src={product?.image} alt={""} width={600} height={600} className="w-full h-full object-contain" />
                    </div>
                </div>

                <Details product={product} />
            </div>

            <PageIntro intro="Related Item" nav="none"></PageIntro>
            <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8 mb-20">
                <Card arr={foryou} />
            </div>
        </div>
    )
}

export default ProdDetails