import React, { useState } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import moreIcon from "../../../public/icons/Vector.png";
import CustomSwiper from "../../../components/ui/CustomSwiper/CustomSwiper";
import ArrowButton from "../../../components/ui/CustomSwiper/ArrowButton";

interface Slide {
  image: string;
  textHeading: string;
  textDescription: string[];
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (increment: number) => {
    setActiveIndex((prevIndex) => (prevIndex + increment + slides.length) % slides.length);
  };

  const renderSlide = (slide: Slide, index: number) => (
    <div className={styles.heroCarousel} key={index}>
      <Image
        src={slide.image}
        alt={`Slide ${index + 1}`}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.content}>
        <h2 className={styles.textPar}>{slide.textHeading}</h2>
        <div className={styles.textHeading}>
          {slide.textDescription.map((text, idx) => (
            <p className={styles.textHead} key={idx}>
              {text}
            </p>
          ))}
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

  return (
    <div>
      <div className={styles.sliderContainer}>
        <ArrowButton
          onClick={() => handleSlideChange(-1)}
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
          onClick={() => handleSlideChange(1)} 
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
            onClick={() => handleSlideChange(index - activeIndex)} 
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
