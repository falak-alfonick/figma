import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import pic from "./assets/pic.png";
import dots from "./assets/Vector.png";
import waves from "./assets/Vector1.png";

function Header() {
    return (
        <div className="bg-rose-100 p-6 pl-20 pr-2">
            <div className="inline-flex gap-32">
                <h1 className="font-serif text-2xl">DAVID MOORE</h1>
                <div className="inline-flex pl-24 gap-6">
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>Contact</h4>
                    <h4>Shop</h4>
                    <h4>Faqs</h4>
                </div>
                <div className="relative pl-24">
                    <CiSearch color="black" className="absolute top-2.5 m-1 left-24 transform -translate-y-1/2 text-neutral-500" />
                    <input
                    className="pl-7 text-neutral-600"
                    placeholder="Search for products.."
                    />
                    <div className="inline-flex gap-2 pt-1 pl-3">
                        <FaRegUser color="#696262"/>
                        <FaRegHeart color="#696262"/>
                        <MdOutlineShoppingBag color="#696262" />
                    </div>
                </div>
            </div>
            <div className="pt-24 grid grid-cols-2 divide-x divide-transparent">
                <div>
                    <text className="bg-white p-2 pl-3 pr-3">Explore Fashion Like Never Before</text>
                    <h1 className="pt-10 pb-5 text-5xl font-medium text-stone-700">
                        Elevate Your Style With <text className="text-black">David Moore</text> Where Leather Speaks Volumes
                    </h1>
                    <text>
                        Step Into The World Of Peter Sign, Where Leather Transcends Mere <br/> Fashion And Becomes A Symbol Of Individuality And Confidence. With <br/> A Commitment To Quality And Style
                    </text>
                    <div className="mt-6">
                        <button className="bg-stone-700 pl-4 pr-4 pt-1 pb-1 text-white">Shop Now</button>
                    </div>
                </div>
                <div className="ml-28 w-auto relative">
                    <img className="absolute pl-56 top-11 h-14" src={dots} />
                    <div style={{borderBottomLeftRadius: "30%", backgroundColor: "#D3A17E"}} className="w-64 h-80">
                        <img className="h-72" src={pic} />
                    </div>
                    <img className="absolute -left-6 top-56 h-14" src={dots} />
                </div>
            </div>
            <div>
                <img src={waves} />
            </div>
      </div>
    )
}

export default Header