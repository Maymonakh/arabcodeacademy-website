import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "../../../styles/swiper-styles.css"; 
import { Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
interface CustomSwiperProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  slidesPerGroup?: number;
  spaceBetween?: number;
  breakpoints?: { [key: number]: { slidesPerView: number } }; 
  onNextSlide?: () => void;  
  onPrevSlide?: () => void;

}

const CustomSwiper = <T,>({
  data,
  renderItem,
  slidesPerView = 4,
  slidesPerGroup = 4,
  spaceBetween = 5,
  breakpoints,
}: CustomSwiperProps<T>) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop={true}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      breakpoints={breakpoints} 
      style={{ padding: "auto 100px" }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
