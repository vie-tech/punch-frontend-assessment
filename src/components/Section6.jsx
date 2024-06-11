import {  Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from '../assets/images/swiper1.png';
import image2 from '../assets/images/swiper2.png';
import image3 from '../assets/images/swiper3.png';

const Section6 = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="h-[400px]"
        >
          <SwiperSlide>
            <img src={image1} alt="Image 1" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Image 2" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Image 3" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section6;
