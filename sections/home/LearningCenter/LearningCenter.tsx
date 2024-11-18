import React, { useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import LearningCenterCard from "../../../components/ui/Card/LearningCenterCard/LearningCenterCard";
import CustomSwiper from "../../../components/ui/CustomSwiper/CustomSwiper";
import ArrowButton from "../../../components/ui/CustomSwiper/ArrowButton";
import educationLogo from "../../../public/icons/kisspng-education-logo-image-e-learning-5cce15891e7a39 1.png";
import testQuizLogo from "../../../public/icons/transparent-test-quiz-icon-my-classroom-icon-check-icon-5dd1c17b65bb03 1.png";
import bookLogo from "../../../public/icons/transparent-book-icon-open-blank-book-pages-icon-education-ico-5f9bad3ade7008 1.png";
import videoLessonLogo from "../../../public/icons/videoLessonLogo.png";
import aiToolsGuideLogo from "../../../public/icons/aiToolsGuideLogo.png";
import arabicLanguageLogo from "../../../public/icons/Mask group 1.png";
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
  {
    logo: videoLessonLogo,
    title: "دروس الفيديو القصيرة",
    onButtonClick: () => console.log("Card 4 clicked"),
    logoWidth: 71,
    logoHeight: 78,
  },
  {
    logo: aiToolsGuideLogo,
    title: "دليل أدوات الذكاء الاصطناعي",
    onButtonClick: () => console.log("Card 5 clicked"),
    logoWidth: 65,
    logoHeight: 65,
  },
  {
    logo: arabicLanguageLogo,
    title: "لغة ضاد",
    onButtonClick: () => console.log("Card 6 clicked"),
    logoWidth: 96,
    logoHeight: 50,
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

  const [isMobile, isTablet1, isTablet2] = useMediaQuery([
    "(max-width: 550px)",
    "(min-width: 550px) and (max-width: 900px)",
    "(min-width: 900px) and (max-width: 1441px)",
  ]);

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
            1441: { slidesPerView: 3 },
            900: { slidesPerView: 2 },
            550: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          setSwiperInstance={setSwiperInstance}
        />
        <ArrowButton
          direction="left"
          positionValue={
            isMobile ? "-30%" : isTablet1 ? "-20%" : isTablet2 ? "-35%" : "-37%"
          }
          onClick={handlePrev}
        />
        <ArrowButton
          direction="right"
          positionValue={
            isMobile ? "-30%" : isTablet1 ? "-20%" : isTablet2 ? "-35%" : "-37%"
          }
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

export default LearningCenter;
