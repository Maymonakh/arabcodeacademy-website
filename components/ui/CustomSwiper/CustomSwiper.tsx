import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "../../../styles/swiper-styles.css"; 

interface CustomSwiperProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  slidesPerGroup?: number;
  spaceBetween?: number;
}

const CustomSwiper = <T,>({
  data,
  renderItem,
  slidesPerView = 4,
  slidesPerGroup = 4,
  spaceBetween = 5,
}: CustomSwiperProps<T>) => {
  return (
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        style={{ padding: "auto 100px" }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>
  );
};

export default CustomSwiper;
