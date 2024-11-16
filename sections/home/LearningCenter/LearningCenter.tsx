import React, { useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import LearningCenterCard from "@/components/ui/LearningCenterCard/LearningCenterCard";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import Image from "next/image";
import educationLogo from "../../../public/icons/kisspng-education-logo-image-e-learning-5cce15891e7a39 1.png";
import testQuizLogo from "../../../public/icons/transparent-test-quiz-icon-my-classroom-icon-check-icon-5dd1c17b65bb03 1.png";
import bookLogo from "../../../public/icons/transparent-book-icon-open-blank-book-pages-icon-education-ico-5f9bad3ade7008 1.png";
import prevIcon from "../../../public/icons/angle-left.png";
import nextIcon from "../../../public/icons/angle-right.png";
import styles from "./LearningCenter.module.css";

const cardData = [
  {
    logo: educationLogo,
    title: "قاموس المصطلحات التقنية",
    onButtonClick: () => console.log("Card 1 clicked"),
    logoWidth: 59,
    logoHeight: 56,
  },
  {
    logo: testQuizLogo,
    title: "بنك الأسئلة التقنية",
    onButtonClick: () => console.log("Card 2 clicked"),
    logoWidth: 49,
    logoHeight: 65,
  },
  {
    logo: bookLogo,
    title: "دروس وانماط الميدجورني",
    onButtonClick: () => console.log("Card 3 clicked"),
    logoWidth: 97,
    logoHeight: 58,
  },
];

const LearningCenter: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  const handlePrev = () => {
    swiperInstance?.slidePrev();
  };

  return (
    <div className={styles.learningCenterContainer}>
      <CustomSwiper
        data={cardData}
        renderItem={(card, index) => (
          <LearningCenterCard
            key={index}
            logo={card.logo}
            title={card.title}
            logoWidth={card.logoWidth}
            logoHeight={card.logoHeight}
            isMiddle={index === Math.floor(cardData.length / 2)} // Check if it's the middle card
          />
        )}
        slidesPerView={3}
        slidesPerGroup={3}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        setSwiperInstance={setSwiperInstance}
      />
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "-40%",
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
          right: "-40%",
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

export default LearningCenter;
