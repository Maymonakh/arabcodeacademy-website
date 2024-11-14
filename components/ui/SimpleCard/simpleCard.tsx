'use client';
import Image from 'next/image';
import style from './simpleCard.module.css';
import rectanle from '@/public/images/Rectangle 72.svg';
import filledStar from '@/public/images/starM.svg';
import emptyStar from '@/public/images/starF.svg';

interface Props {
  name: string;
  paragraph: string;
  imageSrc: string;
  date?: string;
  rating: number;
}

const SimpleCard = ({ name, paragraph, imageSrc, date, rating }: Props) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          src={i <= rating ? filledStar : emptyStar} 
          alt="star"
         
        />
      );
    }
    return stars;
  };

  return (
    <div className={style.container}>
    <div className={style.card}>

        <div className={style.rectangle}>
          <Image src={rectanle} alt='rectanle img' />
       </div>

        <div className={style.img} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:'10px'}}>
           <Image src={imageSrc} alt="User Avatar" width={100} height={100} />
         </div>

        <div className={style.heading} >
          {name}
        </div>

        <div  className={style.paragraph}>
          {paragraph}
        </div>

        <div className={style.footer}>
    <span className={style.date}>{date}</span>
    <div className={style.starsContainer}>{renderStars()}</div>
  </div>
  </div>

  </div> 
  );
};

export default SimpleCard;
