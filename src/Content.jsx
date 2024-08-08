import React from "react";
import pic from "./assets/pic.png";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}
  
const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}
const slideImages = [
    {
        url: 'https://img.freepik.com/premium-photo/young-beautiful-girl-having-photoshoot-wearing-extra-large-clothes_1218867-32492.jpg',
    },
    {
        url: 'https://img.freepik.com/premium-photo/young-beautiful-girl-having-photoshoot-wearing-extra-large-clothes_1218867-32492.jpg',
    },
    {
        url: 'https://img.freepik.com/premium-photo/young-beautiful-girl-having-photoshoot-wearing-extra-large-clothes_1218867-32492.jpg',
    },
];
  

function Content() {
    return (
        <div className="bg-white p-6 pl-20 pr-2">
            <div className= "grid grid-cols-2 divide-x">
                <div className="pt-10">
                    <h1 className="text-4xl font-medium">Deals <text className='text-red-300'>Of The Month</text></h1>
                    <h3 className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis!
                    </h3>
                    <div className="mt-6">
                        <button className="bg-stone-700 pl-4 pr-4 pt-1 pb-1 text-white">Buy Now</button>
                    </div>
                    <h3 className="pt-5">Hurry, Before It's Too Late!</h3>
                </div>
                <div className="slide-container">
                    <Slide>
                        {slideImages.map((slideImage, index)=> (
                            <div key={index}>
                                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                    <span>{slideImage.caption}</span>
                                </div>
                            </div>
                        ))} 
                    </Slide>
                </div>
            </div>
            <div>
                <div className="mt-10 justify-center text-center">
                    <h1 className="text-3xl font-medium">Discover <text className='text-red-300'>Latest Leather Fashion</text> <br/> New Arrivals</h1>
                    <p>Step Into The World Of David Moore. Where Leather Transcends Mere Fashion And Becomes A Symbol Step <br/> Into The World Of David Moore</p>
                </div>
            </div>
            <div className="grid grid-cols-4 divide-x">
                <div>
                    <img src={pic} />
                    <span className="font-medium">Leather Jacket</span>
                    <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                    <div className="inline-flex">
                        <FaStar color="yellow" />
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStarHalf color="yellow" />
                        <p>4.5/5</p>
                    </div>
                    <div className="pt-3">
                        <button className="bg-stone-700 pl-4 pr-4 pt-1 pb-1 text-white">Add To Cart</button>
                    </div>
                </div>
                <div>
                    <img src={pic} />
                    <span className="font-medium">Leather Jacket</span>
                    <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                    <div className="inline-flex">
                        <FaStar color="yellow" />
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStarHalf color="yellow" />
                        <p>4.5/5</p>
                    </div>
                    <div className="pt-3">
                        <button className="border-2 border-stone-700 pl-4 pr-4 pt-1 pb-1 text-black">Add To Cart</button>
                    </div>
                </div>
                <div>
                    <img src={pic} />
                    <span className="font-medium">Leather Jacket</span>
                    <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                    <div className="inline-flex">
                        <FaStar color="yellow" />
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStarHalf color="yellow" />
                        <p>4.5/5</p>
                    </div>
                    <div className="pt-3">
                        <button className="border-2 border-stone-700 pl-4 pr-4 pt-1 pb-1 text-black">Add To Cart</button>
                    </div>
                </div>
                <div>
                    <img src={pic} />
                    <span className="font-medium">Leather Jacket</span>
                    <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                    <div className="inline-flex">
                        <FaStar color="yellow" />
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStarHalf color="yellow" />
                        <p>4.5/5</p>
                    </div>
                    <div className="pt-3">
                        <button className="border-2 border-stone-700 pl-4 pr-4 pt-1 pb-1 text-black">Add To Cart</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        
    )
}

export default Content