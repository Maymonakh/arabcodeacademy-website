import React, { useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import LearningCenterCard from "@/components/ui/card/LearningCenterCard/LearningCenterCard";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import ArrowButton from "../../../components/ui/CustomSwiper/ArrowButton";
import educationLogo from "../../../public/icons/kisspng-education-logo-image-e-learning-5cce15891e7a39 1.png";
import testQuizLogo from "../../../public/icons/transparent-test-quiz-icon-my-classroom-icon-check-icon-5dd1c17b65bb03 1.png";
import bookLogo from "../../../public/icons/transparent-book-icon-open-blank-book-pages-icon-education-ico-5f9bad3ade7008 1.png";
import styles from "./LearningCenter.module.css";
import { useMediaQuery } from "@chakra-ui/react";

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

  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 481px) and (max-width: 1024px)"
  );

  return (
    <section className={styles.section}>
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
            />
          )}
          spaceBetween={10}
          breakpoints={{
            1024: { slidesPerView: 3},
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          setSwiperInstance={setSwiperInstance}
        />
        <ArrowButton
          direction="left"
          positionValue={isMobile ? "-20%" : isTablet ? "-18%" :"-47%"}
          onClick={handlePrev}
        />
        <ArrowButton
          direction="right"
          positionValue={isMobile ? "-20%" : isTablet ? "-18%" :"-47%"}
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

export default LearningCenter;
