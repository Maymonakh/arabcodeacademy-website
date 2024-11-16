import React from "react";
import Image from "next/image";
import styles from "./LearningCenterCard.module.css";
import CustomButton from "../CustomButton/CustomButton";
import moreIcon from "../../../public/icons/icon _more horiz circled outline_.png";

interface CardProps {
  logo: string;
  title: string;
  logoWidth: number;
  logoHeight: number;
  isMiddle: boolean; // Flag for middle card
  style?: React.CSSProperties;
}

const LearningCenterCard: React.FC<CardProps> = ({
  logo,
  title,
  logoWidth,
  logoHeight,
  isMiddle,
  style,
}) => {
  return (
    <div
      className={`${styles.card} ${isMiddle ? styles.middleCard : ""}`}
      style={style}
    >
      <div className={styles.iconLogo}>
        <Image
          src={logo}
          alt={`Logo for ${title}`}
          width={logoWidth}
          height={logoHeight}
        />
      </div>
      <p className={styles.cardParagraph}>{title}</p>
      <div className={styles.buttonContainer}>
        <CustomButton
          text="...المزيد"
          icon={<Image src={moreIcon} alt="icon" width={25} height={25} />}
          buttonType="secondaryOne"
          color="green"
        />
      </div>
    </div>
  );
};

export default LearningCenterCard;
