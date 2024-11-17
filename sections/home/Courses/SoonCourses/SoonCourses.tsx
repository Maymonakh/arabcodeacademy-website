import React, { useState } from "react";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import { Swiper as SwiperType } from "swiper/types";
import ProductsCard from "../../../../components/ui/card/ProductsCard";
import ArrowButton from "../../../../components/ui/CustomSwiper/ArrowButton";
import styles from "./../Courses.module.css";
import { useMediaQuery } from "@chakra-ui/react";

const courses = [
  {
    title: "اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (4).png",
    isComingSoon: true,
  },
  {
    title: "اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (4).png",
    isComingSoon: true,
  },
  {
    title: "اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (6).png",
    isComingSoon: true,
  },
  {
    title: "اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (7).png",
    isComingSoon: true,
  },
];

const SoonCourses = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  const handlePrev = () => {
    swiperInstance?.slidePrev();
  };

  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 481px) and (max-width: 1024px)"
  );

  return (
    <div className={styles.CardsContainer}>
      <CustomSwiper
        data={courses}
        spaceBetween={10}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        renderItem={(course) => (
          <ProductsCard
            title={course.title}
            price={course.price}
            Coachname={course.Coachname}
            description={course.description}
            imageSrc={course.imageSrc}
            isComingSoon={course.isComingSoon}
          />
        )}
        setSwiperInstance={setSwiperInstance}
      />
      <ArrowButton
        direction="left"
        onClick={handlePrev}
        positionValue={isMobile ? "-11.5%" : isTablet ? "-13%" : "-8%"}
      />
      <ArrowButton
        direction="right"
        onClick={handleNext}
        positionValue={isMobile ? "2%" : isTablet ? "-12%" : "-8%"}
      />
    </div>
  );
};

export default SoonCourses;
