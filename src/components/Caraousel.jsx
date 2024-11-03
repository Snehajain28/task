import React from 'react'
import Card from './Card';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import p1 from "../assests/Social Media/Posts/IGC-P1.jpg"
import p2 from "../assests/Social Media/Posts/IGC-P2.jpg"
import p3 from "../assests/Social Media/Posts/IGC-P3.jpg"
import p8 from "../assests/Social Media/Posts/IGC-P8.jpg"
import p9 from "../assests/Social Media/Posts/Milk-Contamination-Content-S2.jpg"
import p10 from "../assests/Social Media/Posts/Milk-Contamination-Content-S1.jpg"


import p11 from "../assests/products/Alpine Milk Chocolate/C1.png"
import p12 from "../assests/products/Alpine Milk Chocolate/C2.png"
import p13 from "../assests/products/Alpine Milk Chocolate/C3.png"
import p14 from "../assests/products/Alpine Milk Chocolate/C4.png"
import p15 from "../assests/products/Alpine Milk Chocolate/CB1.png"
import p16 from "../assests/products/Alpine Milk Chocolate/Bioalpine-WPC-1000g-Alpine-Milk-Chocolate-SG2.jpg"
import p17 from "../assests/products/Alpine Milk Chocolate/Bioalpine-WPC-1000g-Alpine-Milk-Chocolate-SG1.jpg"
import p18 from "../assests/products/Alpine Milk Chocolate/Bioalpine-WPC-1000g-Alpine-Milk-Chocolate-Front-Side.jpg"



export default function Caraousel() {
 
  const posts = [p1,p2,p3,p8,p9,p10]
    
const pics = [p16,p17,p18,p11,p12,p13,p14,p15];

    const responsive = {
        0: {
          items: 1.75,
        },
        375: {
          items: 2.1,
        },
        768: {
          items: 2.3,
        },
        1024: {
          items: 4,
         
        }
      }
      const post = posts.map((d, i) => (
        <Card data={d} key={i} />
      ))
    
      // const pastaitems = ptdata.map((d, i) => (
      //   <Card data={d.recipe} key={i} />
      // ))
    
      // const vegitems = vgdata.map((d, i) => (
      //   <Card data={d.recipe} key={i} />
      // ))
    
      // const drinksitems = drdata.map((d, i) => (
      //   <Card data={d.recipe} key={i} />
      // ))

    return (
        <div className=' mt-[3rem] lg:gap-9 gap-4  mx-auto   w-[90vw] flex flex-col'>
        
        <div className=' font-semibold'>
         <p>Some Posts</p>
          <AliceCarousel
            disableButtonsControls
            touchTracking
            responsive={responsive}
            items={post} />
        </div>

        
        <div className=' font-semibold'>
         <p>  Alpine Milk Chocolate</p>
          <AliceCarousel
            disableButtonsControls
            touchTracking
            responsive={responsive}
            items={
              pics.map( (d ,i) => (
                <Card data={d} key={i}/>
              ))
            } />
        </div>
      
        <div>
          
        </div>
      
 
      </div>
  
  )
}

