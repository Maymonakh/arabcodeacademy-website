import type { StaticImageData } from "next/image";
import React, { useState } from "react";
import { ReactElement } from "react";
import style from "./AiCard.module.css";
import Image from "next/image";
import filled from "@/public/icons/filled.png";
import empty from "@/public/icons/heart.png";
import gray from "@/public/icons/heart (2).png";
import defaultImage from "@/public/images/InteractiveTools-img.png";
interface CardProps {
  imageSrc?: string;
  heading: string;
  hashtag: string;
  paragraph: string;
  button: ReactElement;
  onFavoriteClick: () => void;
  isFavorite: boolean;
}

const AiCard: React.FC<CardProps> = ({
  heading,
  hashtag,
  paragraph,
  button,
  onFavoriteClick,
  isFavorite,
}) => {
 
  const [currentIcon, setCurrentIcon] = useState<StaticImageData | string>(
    empty
  );

  const handleMouseEnter = () => {
    setCurrentIcon(gray); 
  };

  const handleMouseLeave = () => {
    setCurrentIcon(isFavorite ? filled : empty); 
  };

  const handleFavoriteClick = () => {
    onFavoriteClick(); 
    setCurrentIcon(isFavorite ? empty : filled); 
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div
          className={style.favoriteButton}
          onClick={handleFavoriteClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={currentIcon} alt="ايقونة قلب" className={style.imgOfHeart} />
        </div>

        <Image src={defaultImage} alt={heading} width={400} height={193.21} />
        <div className={style.containerOfContent}>
          <div className={style.heading}>{heading}</div>
          <div className={style.hashtag}>{hashtag}</div>
          <input className={style.textbox} type="text" />
          <div className={style.paragraph}>{paragraph}</div>
          <div className={style.button}>{button}</div>
        </div>
      </div>
    </div>
  );
};

export default AiCard;
