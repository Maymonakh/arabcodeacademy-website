import React, { useState, useEffect } from "react";
import SimpleCard from "../../../components/ui/SimpleCard/simpleCard";
import styles from "./CardSection.module.css";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import ArrowButton from "../../../components/ui/CustomSwiper/ArrowButton";
import { Swiper as SwiperType } from "swiper/types";
import { useMediaQuery } from "@chakra-ui/react";
import img3 from "@/public/images/3.svg";

interface Review {
  reviewText: string;
  reviewerName: string;
  reviewerLastName: string;
  imageURL: string;
  rating: number;
  date: string;
}

const CardSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/reviews"
        );
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

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
    <div className={styles.section}>
      <div className={styles.cardSectionContainer}>
        <CustomSwiper
          data={reviews} 
          renderItem={(review) => (
            <SimpleCard
              key={review.reviewerName + review.date}
              name={`${review.reviewerName} ${review.reviewerLastName}`}
              paragraph={review.reviewText}
              imageSrc={img3}
              date={review.date}
              rating={Math.round(review.rating)} 
            />
          )}
          spaceBetween={10}
          breakpoints={{
            1441: { slidesPerView: 3 },
            900: { slidesPerView: 2 },
            550: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          setSwiperInstance={setSwiperInstance}
        />
        <ArrowButton
          direction="left"
          onClick={handlePrev}
          positionValue={
            isMobile ? "0%" : isTablet1 ? "0%" : isTablet2 ? "10%" : "5%"
          }
        />
        <ArrowButton
          direction="right"
          onClick={handleNext}
          positionValue={
            isMobile ? "0%" : isTablet1 ? "0%" : isTablet2 ? "10%" : "5%"
          }
        />
      </div>
    </div>
  );
};

export default CardSection;
