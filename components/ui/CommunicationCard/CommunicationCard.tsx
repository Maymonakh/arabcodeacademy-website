import React from "react";
import style from './CommunicationCard.module.css';
import { ReactElement } from "react";
import { Box, Text } from "@chakra-ui/react";
import CustomButton from "../CustomButton/CustomButton";
import Image from "next/image"; 
import line from '@/public/images/Line 4.svg';
import locationIcon from "@/public/icons/Vector (2).svg";
import PhoneIcon from "@/public/icons/Vector (3).svg";
import EmailIcon from "@/public/icons/envelope.svg";
import icon1 from '@/public/icons/Vector (1).svg';

interface CommunicationCardProps {
  heading: string;
  location: string;
  button?: ReactElement;
  width?: string | number;
  number: string;
  email: string;
}

const CommunicationCard: React.FC<CommunicationCardProps> = ({ 
  heading, 
  location, 
  button, 
  width, 
  number, 
  email 
}) => {
  return (
    <div className={style.communicationCard}>
      <div className={style.heading}>{heading}</div>
      <Image src={line} alt="خط فاصل" width={100} height={100} style={{ float: "right", marginBottom:'40px'}} />
      
      <div className={style.location} style={{ textAlign: "right", display: "flex", flexDirection: "row-reverse", alignItems: "center" }}>
        <Image src={locationIcon} alt="موقع" width={20} height={30} style={{ marginLeft: "10px" }} />
        <span>{location}</span>
      </div>

      <div className={style.number} style={{ textAlign: "right", display: "flex", flexDirection: "row-reverse", alignItems: "center" }}>
        <Image src={PhoneIcon} alt="رقم هاتف" width={26.56} height={25} style={{ marginLeft: "10px" }} />
        <span>{number}</span>
      </div>

      <div className={style.email} style={{ textAlign: "right", display: "flex", flexDirection: "row-reverse", alignItems: "center" }}>
        <Image src={EmailIcon} alt="إيميل" width={26.56} height={25} style={{ marginLeft: "10px" }} />
        <span>{email}</span>
      </div>

      {button && (
        <Box mt="4">
          <CustomButton
            text="تواصل معنا"
            icon={<Image src={icon1} alt="صورة لايقونة هاتف محمول" />}
            buttonType="secondaryTwo"
            color="green"
          />
        </Box>
      )}
    </div>
  );
};

export default CommunicationCard;
