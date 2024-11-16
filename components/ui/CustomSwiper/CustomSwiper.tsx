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
  breakpoints?: Record<
    number,
    { slidesPerView: number | "auto"; slidesPerGroup: number }
  >;
  setSwiperInstance?: (swiper: SwiperType) => void;
}

const CustomSwiper = <T,>({
  data,
  renderItem,
  slidesPerView = 4,
  slidesPerGroup = 4,
  breakpoints = {
    // Breakpoints configuration for responsiveness
    1440: { slidesPerView: 3, slidesPerGroup: 3 },
    768: { slidesPerView: 2, slidesPerGroup: 2 },
    480: { slidesPerView: 1, slidesPerGroup: 1 },
  },
  setSwiperInstance,
}: CustomSwiperProps<T>): React.ReactElement => {
  return (
    <SwiperClass
      modules={[Pagination]}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      loop={true}
      breakpoints={breakpoints}
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
