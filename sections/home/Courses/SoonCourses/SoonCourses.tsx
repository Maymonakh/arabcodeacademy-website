import React, { useState } from "react";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import prevIcon from "../../../../public/icons/angle-left.png";
import nextIcon from "../../../../public/icons/angle-right.png";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image";
import styles from "./../Courses.module.css";
import ProductsCard from "../../../../components/ui/Card/ProductsCard";

const courses = [
  {
    title: "1اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (4).png",
    isComingSoon: true,
  },
  {
    title: "2اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (4).png",
    isComingSoon: true,
  },
  {
    title: "3اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (6).png",
    isComingSoon: true,
  },
  {
    title: "4اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (7).png",
    isComingSoon: true,
  },
  {
    title: "5اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: true,
  },
  {
    title: "6اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: true,
  },
  {
    title: "7اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: true,
  },
  {
    title: "8اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
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
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "-8%",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          background: "none",
          border: "none",
        }}
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <Image src={prevIcon} alt="Previous slide" width={70} height={70} />
      </button>
      <button
        style={{
          position: "absolute",
          top: "50%",
          right: "-8%",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
          background: "none",
          border: "none",
        }}
        onClick={handleNext}
        aria-label="Next slide"
      >
        <Image src={nextIcon} alt="Next slide" width={70} height={70} />
      </button>
    </div>
  );
};

export default SoonCourses;
