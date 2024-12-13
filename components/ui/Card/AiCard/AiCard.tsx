import React from "react";
import { ReactElement } from "react";
import style from './AiCard.module.css';
import Image from "next/image";
import heartIcon from '@/public/icons/heart.svg';
import filledHeartIcon from '@/public/icons/heart.svg';

interface CardProps {
  imageSrc: string;
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
  isFavorite
}) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <button className={style.favoriteButton} onClick={onFavoriteClick}>
          <Image src={isFavorite ? filledHeartIcon : heartIcon} alt="Heart Icon" width={24} height={24} />
        </button>
        <Image src={imageSrc} alt={heading} width={400} height={193.21} />
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

export default AiCard