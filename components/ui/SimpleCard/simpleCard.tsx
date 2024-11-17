"use client";
import Image from "next/image";
import style from "./simpleCard.module.css";
import rectanle from "@/public/images/Rectangle 72.svg";
import filledStar from "../../../public/images/StarM.svg";
import emptyStar from "../../../public/images/StarF.svg";

interface Props {
  name: string;
  paragraph: string;
  imageSrc: string;
  date?: string;
  rating: number;
}

const SimpleCard = ({ name, paragraph, imageSrc, date, rating }: Props) => {
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((i) => (
      <Image key={i} src={i <= rating ? filledStar : emptyStar} alt="star" />
    ));
  };

  return (
    <section className="sectionContainer">
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.rectangle}>
            <Image src={rectanle} alt="rectanle img" />
          </div>

          <div
            className={style.img}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Image src={imageSrc} alt="User Avatar" width={100} height={100} />
          </div>

          <div className={style.heading}>{name}</div>

          <div className={style.paragraph}>{paragraph}</div>

          <div className={style.footer}>
            <span className={style.date}>{date}</span>
            <div className={style.starsContainer}>{renderStars()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCard;
