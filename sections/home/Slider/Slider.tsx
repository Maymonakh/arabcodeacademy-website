import React, { useState } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import moreIcon from "../../../public/icons/Vector.png";
import CustomSwiper from "../../../components/ui/CustomSwiper/CustomSwiper";
import ArrowButton from "../../../components/ui/CustomSwiper/ArrowButton";

const Sliderpage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides: string[] = [
    "/images/header-image (1).png",
    "/images/header-image (1).png",
  ];

  const renderSlide = (slide: string, index: number) => (
    <div className={styles.heroCarousel} key={index}>
      <Image
        src={slide}
        alt={`Slide ${index + 1}`}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.content}>
        <h2 className={styles.textPar}>
          تعمل الأكاديمية العربية للبرمجة كجسر يربط العقول التكنولوجية العربية
          في المهجر بالطلبة العرب أينما كانوا
        </h2>
        <div className={styles.textHeading}>
          <p className={styles.textHead}>
            تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من
            الدروس والمناهج الاحترافية بجودة عالية
          </p>
          <p className={styles.textHead}>
            وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية للمبتدئين
            والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة عالمية في المجال التقني
          </p>
          <div className={styles.buttonContainer}>
            <CustomButton
              text="المسارات التعليمية"
              icon={
                <Image
                  src={moreIcon}
                  alt="More Options"
                  width={16}
                  height={16}
                />
              }
              buttonType="primary"
              color="green"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className={styles.sliderContainer}>
        <ArrowButton
          onClick={handlePrev}
          direction="left"
          positionValue="20px"
          color="white"
        />

        <CustomSwiper
          data={slides}
          renderItem={renderSlide}
          slidesPerView={1}
          spaceBetween={0}
        />

        <ArrowButton
          onClick={handleNext}
          direction="right"
          positionValue="20px"
          color="white"
        />
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Sliderpage;
