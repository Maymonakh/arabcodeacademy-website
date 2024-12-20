import React, { useState } from "react";
import useSWR from "swr";  
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import { Swiper as SwiperType } from "swiper/types";
import ProductsCard from "../../../../components/ui/Card/ProductCard";
import ArrowButton from "../../../../components/ui/CustomSwiper/ArrowButton";
import styles from "./../Courses.module.css";
import { useMediaQuery } from "@chakra-ui/react";
import Loading from "../../../../components/ui/Loading/Loading";
import Error from "../../../../components/ui/Error/Error";
import maskGroup8 from "../../../../public/images/Mask group (8).png";

interface Trainer {
  first_name: string;
  last_name: string;
}

interface Course {
  title: string;
  trainers: Trainer[];
  total_videos: number;
  total_duration: string;
  status: string;
}

const SoonCourses = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("https://sitev2.arabcodeacademy.com/wp-json/aca/v1/courses", fetcher);

  const [isMobile, isTablet1, isTablet2] = useMediaQuery([
    "(max-width: 550px)",
    "(min-width: 550px) and (max-width: 900px)",
    "(min-width: 900px) and (max-width: 1441px)",
  ]);

  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  const handlePrev = () => {
    swiperInstance?.slidePrev();
  };

  if (!data) return <Loading />;
  if (error) return <Error />;

  const comingSoonCourses = data.courses.filter((course: Course) => course.status === "coming_soon");

  return (
    <div className={styles.CardsContainer}>
      <CustomSwiper
        data={comingSoonCourses}
        spaceBetween={10}
        breakpoints={{
          1441: { slidesPerView: 4 },
          900: { slidesPerView: 2 },
          550: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        renderItem={(course: Course) => (
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
        positionValue={isMobile ? "-0%" : isTablet1 ? "-17%" : isTablet2 ? "-35%" : "-13%"}
        onClick={handlePrev}
      />
      <ArrowButton
        direction="right"
        positionValue={isMobile ? "-8%" : isTablet1 ? "-17%" : isTablet2 ? "-35%" : "-13%"}
        onClick={handleNext}
      />
    </div>
  );
};

export default SoonCourses;
