import React, { useState } from "react";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import { Swiper as SwiperType } from "swiper/types";
import ProductsCard from "../../../../components/ui/Card/ProductCard";
import ArrowButton from "../../../../components/ui/CustomSwiper/ArrowButton";
import styles from "./../Courses.module.css";
import { useMediaQuery } from "@chakra-ui/react";
import maskGroup6 from "../../../../public/images/Mask group (6).png";
import maskGroup7 from "../../../../public/images/Mask group (7).png";
import maskGroup5 from "../../../../public/images/Mask group (5).png";
import maskGroup4 from "../../../../public/images/Mask group (4).png";

const courses = [
  {
    title: "اسم الكورس",
    price: "$24",
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: maskGroup4,
    isComingSoon: false,
  },
  {
    title: "اسم الكورس",
    price: "$24",
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: maskGroup6,
    isComingSoon: false,
  },
  {
    title: "اسم الكورس",
    price: "$24",
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: maskGroup7,
    isComingSoon: false,
  },
  {
    title: "اسم الكورس",
    price: "$24",
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: maskGroup5,
    isComingSoon: false,
  },
];

const TrainingCourses = () => {
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
            price={course.price}
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

export default TrainingCourses;
