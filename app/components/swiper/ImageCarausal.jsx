import React from 'react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiperStyle.scss';
import 'swiper/swiper.scss';
import Carausal1 from '../../assets/carausal-1.jpeg';
import Carausal2 from '../../assets/carausal-2.jpeg';
import Carausal3 from '../../assets/carausal-3.jpeg';
import Carausal4 from '../../assets/carausal-4.jpeg';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function ImageSwiper() {
  const imageArray = [
    Carausal1,
    Carausal2,
    Carausal3,
    Carausal4,
    // require('../../assets/carausal-1.jpeg'),
    // require('../../assets/carausal-2.jpeg'),
    // require('../../assets/carausal-3.jpeg'),
    // 'https://cache.careers360.mobi/media/schools/social-media/media-gallery/1112/2019/6/28/Bishop%20Scott%20Girls%20School-Campus-View.jpg',
    // 'https://content3.jdmagicbox.com/comp/patna/w5/0612px612.x612.151212104545.t3w5/catalogue/bishop-scott-boys-school-new-jaganpura-patna-schools-mkrjjbz5w6.jpg?clr=28333e',
    // 'https://www.edustoke.com/assets/uploads-new/52f80acc-a6a8-4d67-851d-4acac6c08daa.jpg',
    // require('../../assets/carausal-4.jpeg'),
    // require('../../assets/carausal-5.jpeg'),
    // require('../../assets/carausal-6.jpeg'),
  ];
  return (
    <>
      <Swiper
        pagination={{
          clickable: 'true',
        }}
        loop
        navigation
        lazy
        className="mySwiper"
        style={{ position: 'relative', marginTop: -40, bottom: 0 }}
      >
        {imageArray.map(i => (
          <SwiperSlide>
            <img alt="loading..." src={i} className="swiperImage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
