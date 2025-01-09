import React, { useState } from "react";
import SimpleCard from "../../../components/ui/Card/SimpleCard/simpleCard";
import styles from "./ReviewsCard(simple).module.css";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import ArrowButton from "../../../components/ui/CustomSwiper/ArrowButton";
import { Swiper as SwiperType } from "swiper/types";
import { useMediaQuery } from "@chakra-ui/react";
import img3 from "@/public/images/3.svg";
import useSWR from "swr";
import Loading from "../../../components/ui/Loading/Loading"; 
import Error from "../../../components/ui/Error/Error"; 

interface Review {
  reviewText: string;
  reviewerName: string;
  reviewerLastName: string;
  imageURL: string;
  rating: number;
  date: string;
}

const fetchReviews = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("error fetching review")
  }
  return response.json();
};

const CardSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const { data, error } = useSWR(
    "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/reviews", 
    fetchReviews
  );

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

  if (!data) {
    return <Loading />; 
  }

  if (error) {
    return <Error />; 
  }

  const reviews: Review[] = data.reviews;

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
            900: { slidesPerView: 1 },
            550: { slidesPerView: 1 },
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
