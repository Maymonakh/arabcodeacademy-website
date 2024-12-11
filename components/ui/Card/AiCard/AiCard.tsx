import React from "react";
import { ReactElement } from "react";
import style from './AiCard.module.css';
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  heading: string;
  hashtag: string;
  paragraph: string;
  button: ReactElement;
}

const AiCard: React.FC<CardProps> = ({
  imageSrc,
  heading,
  hashtag,
  paragraph,
  button,
}) => {
  return (
    <div className={style.container}>
     <div className={style.card}>
      <Image src={imageSrc} alt={heading} width={400} height={193.21} />
      <div className={style.containerOfContent}>
      <div className={style.heading} >{heading}</div>
      <div className={style.hashtag} >{hashtag}</div>
      <input className={style.textbox} type="text"/>
      <div className={style.paragraph} >{paragraph}</div>
      <div className={style.button} >{button}</div>
      </div>
      </div>
      
    </div>
  );
};

export default AiCard;
