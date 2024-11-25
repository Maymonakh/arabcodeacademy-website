import React, { useState } from "react";
import SimpleCard from "../../../components/ui/SimpleCard/simpleCard";
import img1 from "@/public/images/kisspng-portrait-shannon-5ae540d7d5c1d0.2959227015249737838756 1.svg";
import img2 from "@/public/images/2.svg";
import img3 from "@/public/images/3.svg";
import styles from "./CardSection.module.css";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import ArrowButton from "../../../components/ui/CustomSwiper/ArrowButton";
import { Swiper as SwiperType } from "swiper/types";
import { useMediaQuery } from "@chakra-ui/react";

const cardsData = [
  {
    name: "اسم المستخدم",
    paragraph:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
    imageSrc: img1,
    date: "2023, 11 نيسان",
    rating: 4,
  },
  {
    name: "اسم المستخدم",
    paragraph:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
    imageSrc: img2,
    date: "2023, 11 نيسان",
    rating: 4,
  },
  {
    name: "اسم المستخدم",
    paragraph:
      "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
    imageSrc: img3,
    date: "2023, 11 نيسان",
    rating: 4,
  },
];

const CardSection: React.FC = () => {
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
    <div className={styles.section}>
      <div className={styles.cardSectionContainer}>
        <CustomSwiper
          data={cardsData}
          renderItem={(card) => (
            <SimpleCard
              key={card.name}
              name={card.name}
              paragraph={card.paragraph}
              imageSrc={card.imageSrc}
              date={card.date}
              rating={card.rating}
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
