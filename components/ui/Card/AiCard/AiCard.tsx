import React from "react";
import { ReactElement } from "react";
import style from "./AiCard.module.css";
import Image from "next/image";
import filledHeartIcon from "@/public/icons/filledHeart.svg";
import emptyHeartIcon from "@/public/icons/emptyHeart.png";
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
  imageSrc,
  heading,
  hashtag,
  paragraph,
  button,
  onFavoriteClick,
  isFavorite,
}) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <button className={style.favoriteButton} onClick={onFavoriteClick}>
          <Image
            src={isFavorite ? filledHeartIcon : emptyHeartIcon}
            alt="Heart Icon"
            width={50}
            height={50}
          />
        </button>
        <Image
          src={defaultImage} 
          alt={heading}
          width={400}
          height={193.21}
        />
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
