import React, { useState, useEffect } from "react";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import { Swiper as SwiperType } from "swiper/types";
import ProductsCard from "../../../../components/ui/Card/ProductCard";
import ArrowButton from "../../../../components/ui/CustomSwiper/ArrowButton";
import styles from "./../Courses.module.css";
import { useMediaQuery } from "@chakra-ui/react";
import maskGroup8 from "../../../../public/images/Mask group (8).png";

const SoonCourses = () => {
  const [courses, setCourses] = useState<[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  
  const [isMobile, isTablet1, isTablet2] = useMediaQuery([
    "(max-width: 550px)",
    "(min-width: 550px) and (max-width: 900px)",
    "(min-width: 900px) and (max-width: 1441px)",
  ]);

  useEffect(() => {
    fetch("https://sitev2.arabcodeacademy.com/wp-json/aca/v1/courses")
      .then((response) => response.json())
      .then((data) => {
        const comingSoonCourses = data.courses.filter((course) => course.status === "coming_soon");
        setCourses(comingSoonCourses);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

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
          1441: { slidesPerView: 4 },
          900: { slidesPerView: 2 },
          550: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        renderItem={(course) => (
          <ProductsCard
            title={course.title}
            Coachname={`${course.trainers[0]?.first_name} ${course.trainers[0]?.last_name}`}
            description={`فيديو ${course.total_videos}, ${course.total_duration}`}
            imageSrc={maskGroup8}
            isComingSoon={true}
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
