import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import image1 from '../img/menus/1.png';
import image2 from '../img/menus/2.png';
import image3 from '../img/menus/3.png';

function Menu() {
  return (
    <div className="p-4 mt-6 sm:w-2/3 md:w-1/2 lg:w-[500px] w-full">
        <div className="border-[10px] max-w-full">
            <Swiper navigation={true} modules={[Navigation]} autoHeight={true} loop={true} className="mySwiper">
                <SwiperSlide>
                    <img
                        src={image1}
                        class="block w-full"
                        alt="..."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image2}
                        class="block w-full"
                        alt="..."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image3}
                        class="block w-full"
                        alt="..."
                    /> 
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Menu