import React from "react";
import style from "./CommunicationCard.module.css";
import { ReactElement } from "react";
import CustomButton from "../../CustomButton/CustomButton";
import Image from "next/image";
import locationIcon from "@/public/icons/Vector (2).svg";
import PhoneIcon from "@/public/icons/Vector (3).svg";
import EmailIcon from "@/public/icons/envelope.svg";
import icon1 from "@/public/icons/Vector (1).svg";
import { useMediaQuery } from "@chakra-ui/react";

interface CommunicationCardProps {
  heading: string;
  location: string;
  button?: ReactElement;
  number: string;
  email: string;
}

const CommunicationCard: React.FC<CommunicationCardProps> = ({
  heading,
  location,
  button,
  number,
  email,
}) => {
  const [isMobile, isTablet] = useMediaQuery([
    "(max-width: 550px)",
    "(min-width: 550px) and (max-width: 1441px)",
  ]);
  return (
    <div className={style.communicationCard}>
      <div className={style.heading}>{heading}</div>
      <div
        className={style.location}
        style={{
          textAlign: "right",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Image
          src={locationIcon}
          alt="موقع"
          width={isMobile ? 18 : isTablet ? 18 : 20}
          height={isMobile ? 15 : isTablet ? 25 : 30}
          style={{ marginLeft: "13px", height: "21px" }}
        />
        <span>{location}</span>
      </div>

      <div
        className={style.number}
        style={{
          textAlign: "right",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Image
          src={PhoneIcon}
          alt="رقم هاتف"
          width={isMobile ? 20 : isTablet ? 20 : 27}
          height={isMobile ? 16 : isTablet ? 18 : 25}
          style={{ marginLeft: "12px", height: "16px" }}
        />
        <span>{number}</span>
      </div>

      <div
        className={style.email}
        style={{
          textAlign: "right",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Image
          src={EmailIcon}
          alt="إيميل"
          width={isMobile ? 15 : isTablet ? 18 : 27}
          height={isMobile ? 13 : isTablet ? 15 : 20}
          style={{ marginLeft: "12px" }}
        />
        <span>{email}</span>
      </div>

      {button && (
        <CustomButton
          text="تواصل معنا"
          icon={
            <Image
              src={icon1}
              alt="صورة لايقونة هاتف محمول"
              width={isMobile ? 16 : isTablet ? 23 : 23}
              height={isMobile ? 15 : isTablet ? 22 : 22}
            />
          }
          buttonType="secondaryTwo"
          color="green"
          textStyle={{
            fontSize: " 14px",
            fontWeight: "600",
            lineHeight: "26.24px",
            textAlign: "left",
          }}
        />
      )}
    </div>
  );
};

export default CommunicationCard;
