import React, { useState } from "react";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import { Swiper as SwiperType } from "swiper/types";
import ProductsCard from "../../../../components/ui/Card/ProductsCard";
import ArrowButton from "../../../../components/ui/CustomSwiper/ArrowButton";
import styles from "./../Courses.module.css";
import { useMediaQuery } from "@chakra-ui/react";
import maskGroup11 from "../../../../public/images/Mask group (11).png";
import maskGroup9 from "../../../../public/images/Mask group (9).png";
import maskGroup10 from "../../../../public/images/Mask group (10).png";
import maskGroup8 from "../../../../public/images/Mask group (8).png";

const courses = [
  {
    title: "اسم الكورس",
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: maskGroup11,
    isComingSoon: true,
  },
  {
    title: "اسم الكورس",
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: maskGroup9,
    isComingSoon: true,
  },
  {
    title: "اسم الكورس",
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: maskGroup10,
    isComingSoon: true,
  },
  {
    title: "اسم الكورس",
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: maskGroup8,
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

  const [isMobile, isTablet1, isTablet2] = useMediaQuery([
    "(max-width: 550px)",
    "(min-width: 550px) and (max-width: 900px)",
    "(min-width: 900px) and (max-width: 1441px)",
  ]);

  return (
    <div className={styles.CardsContainer}>
      <CustomSwiper
        data={courses}
        spaceBetween={10}
        breakpoints={{
          1441: { slidesPerView: 4 },
          900: { slidesPerView: 2 },
          550: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        renderItem={(course) => (
          <ProductsCard
            title={course.title}
            Coachname={course.Coachname}
            description={course.description}
            imageSrc={course.imageSrc}
            isComingSoon={course.isComingSoon}
            textAlign={isMobile ? "center" : "right"}
          />
        )}
        setSwiperInstance={setSwiperInstance}
      />
      <ArrowButton
        direction="left"
        positionValue={
          isMobile ? "-0%" : isTablet1 ? "-17%" : isTablet2 ? "-35%" : "-13%"
        }
        onClick={handlePrev}
      />
      <ArrowButton
        direction="right"
        positionValue={
          isMobile ? "-8%" : isTablet1 ? "-17%" : isTablet2 ? "-35%" : "-13%"
        }
        onClick={handleNext}
      />
    </div>
  );
};

export default SoonCourses;
