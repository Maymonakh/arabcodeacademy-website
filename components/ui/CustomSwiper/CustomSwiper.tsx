import React from "react";
import { Swiper as SwiperClass, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface CustomSwiperProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number | "auto";
  slidesPerGroup?: number;
  spaceBetween?: number;
  breakpoints?: { [key: number]: { slidesPerView: number } };

  setSwiperInstance?: (swiper: SwiperType) => void;
}

const CustomSwiper = <T,>({
  data,
  renderItem,
  slidesPerView = 4,
  slidesPerGroup = 4,
  spaceBetween = 20,
  breakpoints,

  setSwiperInstance,
}: CustomSwiperProps<T>): React.ReactElement => {
  return (
    <SwiperClass
      modules={[Pagination]}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      loop={true}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      style={{ width: "100%" }}
      onSwiper={(swiper) => {
        if (setSwiperInstance) setSwiperInstance(swiper);
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
      ))}
    </SwiperClass>
  );
};

export default CustomSwiper;
