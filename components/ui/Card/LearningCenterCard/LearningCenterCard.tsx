import React from "react";
import Image from "next/image";
import styles from "./LearningCenterCard.module.css";
import CustomButton from "../../CustomButton/CustomButton";
import moreIcon from "../../../../public/icons/icon _more horiz circled outline_.png";
import { StaticImageData } from "next/image";
import { useMediaQuery } from "@chakra-ui/react";

interface CardProps {
  logo: StaticImageData;
  title: string;
  logoWidth: number;
  logoHeight: number;
  style?: React.CSSProperties;
}

const LearningCenterCard: React.FC<CardProps> = ({
  logo,
  title,
  logoWidth,
  logoHeight,
  style,
}) => {
  const [isMobile] = useMediaQuery(["(max-width: 550px)"]);

  return (
    <div className={styles.card} style={style}>
      <div className={styles.iconLogo}>
        <Image
          src={logo}
          alt={`Logo for ${title}`}
          width={logoWidth}
          height={logoHeight}
          priority
        />
      </div>
      <p className={styles.cardParagraph}>{title}</p>
      <div className={styles.buttonContainer}>
        <CustomButton
          text="...المزيد"
          icon={
            <Image src={moreIcon} alt="More Options" width={25} height={25} />
          }
          buttonType={isMobile ? "secondaryTwo" : "secondaryOne"}
          color="green"
        />
      </div>
    </div>
  );
};

export default LearningCenterCard;
