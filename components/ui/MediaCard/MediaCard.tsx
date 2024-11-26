import React from "react";
import style from "./MediaCard.module.css";
import line from "@/public/images/Line 166 (1).svg";
import Image from "next/image";
import facebook from '@/public/icons/facebook.svg';
import instagram from '@/public/icons/instagram.svg';
import x from '@/public/icons/x.svg';
import linkedIn from '@/public/icons/linkedIn.svg';
import tiktok from '@/public/icons/tiktok.svg';
import yt from '@/public/icons/yt.png';
import threads from '@/public/icons/threads.svg';
import discord from '@/public/icons/discord.svg';

import line16 from '@/public/images/Line 166 (1).png';



interface CommunicationCardProps {
  heading: string;
  text: string;
  width :number;
  height:number;
}

const MediaCard: React.FC<CommunicationCardProps> = ({ heading, text, width, height }) => {
  return (
    <div 
      className={style.MediaCard} 
      style={{ width: `${width}`, height: `${height}` }} // تطبيق العرض والارتفاع
    >
      <div className={style.heading}>{heading}</div>
      <Image
        src={line16}
        alt="خط فاصل"
        width={260}
        height={10}
        style={{ float: "right" }}
      />
      <div className={style.iconContainer}>
        <Image src={linkedIn} alt="ايقونة لينكدان" width={34} height={34} />
        <Image src={x} alt="ايقونة تويتر" width={32} height={32} />
        <Image src={instagram} alt="ايقونة انستقرام" width={34} height={34} />
        <Image src={facebook} alt="ايقونة فيسبوك" width={32} height={32} />
      </div>

      <div className={style.iconContainer2}>
        <Image src={discord} alt="ايقونة ديسكورد" width={33} height={33} />
        <Image src={threads} alt="ايقونة ثريدس" width={33} height={33} />
        <Image src={yt} alt="ايقونة يوتيوب" width={32} height={32} />
        <Image src={tiktok} alt="ايقونة تيكتوك" width={36} height={36} />
      </div>

      <div className={style.Text}>{text}</div>
    </div>
  );
};
export default  MediaCard;