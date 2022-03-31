import React from 'react'
import Image from 'next/image';
import SocialLinkComponant from '../social/SocialLinkComponant'
import { Typography } from 'antd';
//import s1 from '../../public/img/slider/slide1.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';

const {Title,Text}=Typography
SwiperCore.use([Pagination]);

const Banner = ({sliderData}) => {
  console.log('sliderdata',sliderData)
  const Demo= sliderData.content.map(i=>i)
  //console.log('demo',Demo)
    return (
      <>
        <section className="wrapper  ">
          
            <Swiper spaceBetween={30} pagination={{
              "clickable": true
            }} className="mySwiper">
              {sliderData.content.map((i,index)=>
              <SwiperSlide key={index}>
                <Image
                  alt="s1"
                  height={750}
                  width={1900}
                  src={i.image.url}
                />
                <div className="crousel_content container">
                  <Title level={2} className="text-white">{i.desc1}</Title>
                  <Title level={4} className="text-white mt-1">{i.desc2}</Title>
                </div>
              </SwiperSlide>
              )}
            </Swiper>
        
          
        </section>
      </>
    )
}

export default Banner
