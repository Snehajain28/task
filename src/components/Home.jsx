import React from "react";
// import FoodItems from "../components/FoodItems";
// import CategoryMenu from "../components/CategoryMenu";
import SearchBar from "./SearchBar";
import { useStateValues } from "../Utils/Provider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import l1 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC  Blueberry Front.png'
import l2 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Alphonso Mango Front.png'
import l3 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Alpine Milk Chocolate Front.png'
import l4 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Bourbon Vanilla Front.png'
import l5 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Cafe Mocha Front.png'
import l6 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Espresso Front.png'
import l7 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Chocolate Hazelnut Front.png'
import l8 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Espresso Front.png'
import l9 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Strawbery Front.png'
import l10 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Thai Coconut Front.png'
import l11 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Chocolate Hazelnut Front.png'
import l12 from '../assests/High Resolution Pictures Front/BioAlpine Bio WPC Chocolate Hazelnut Front.png'


function Home() {
  const [{ abc }, dispatch] = useStateValues();


  if (abc) {
    console.log(abc);
  }

  return (
    <div >
    
      <div onClick={() => {
        dispatch({
          type: "SET_HAMBURGER",
          hamburger: false,
        })
      }} className="mt-[1rem] ">
        <div className="  w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide >
              <div className="w-[90vw] lg:w-[70vw] lg:h-[30vw] h-[70vw] mx-auto">
                <img className='h-full  object-cover rounded-lg w-full object-fit obejct-cover' alt='' 
                src={l1} />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[70vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt=''
                 src={l2} />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[70vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt=''
                 src={l3} />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[75vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' 
                src={l4}/>
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[75vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' 
                src={l5} />
              </div>
            </SwiperSlide>

            <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[75vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' 
                src={l6}/>
              </div>
            </SwiperSlide> <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[75vw] mx-auto">
                <img className='h-full object-cover  rounded-lg w-full object-fit obejct-cover' alt='' 
                src={l7}/>
              </div>
            </SwiperSlide> <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[75vw] mx-auto">
                <img className='h-full  object-cover rounded-lg w-full object-fit' alt='' 
                src={l8}/>
              </div>
            </SwiperSlide> <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[75vw] mx-auto">
                <img className='h-full  object-cover  rounded-lg w-full object-fit' alt='' 
                src={l9}/>
              </div>
            </SwiperSlide> <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[75vw] mx-auto">
                <img className='h-full  object-cover rounded-lg w-full object-fit object-cover' alt='' 
                src={l10}/>
              </div>
            </SwiperSlide> <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[75vw] mx-auto">
                <img className='h-full  object-cover rounded-lg w-full object-fit object-cover ' alt='' 
                src={l11}/>
              </div>
            </SwiperSlide> <SwiperSlide >
              <div className="w-[90vw]  lg:w-[70vw] lg:h-[30vw] h-[75vw] mx-auto">
                <img className='h-full   object-cover rounded-lg w-full object-fit object-cover ' alt='' 
                src={l12}/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <SearchBar />
        {/* <Special />
        <CategoryMenu />
        <FoodItems /> */}

      </div >
    </div >
  )
}

export default Home
