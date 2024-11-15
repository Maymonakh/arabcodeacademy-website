import React from "react";
import SimpleCard from "../../../components/ui/SimpleCard/simpleCard";
import img1 from '@/public/images/kisspng-portrait-shannon-5ae540d7d5c1d0.2959227015249737838756 1.svg';
import img2 from '@/public/images/2.svg';
import img3 from '@/public/images/3.svg';
import CustomSwiper from '@/components/ui/CustomSwiper/CustomSwiper';
import style from './CardSection.module.css';

const cardsData = [
    { name: "اسم المستخدم",
      paragraph: "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
      imageSrc: img1,
      date: '2023, 11 نيسان',
      rating: 4
    },
    { name: "اسم المستخدم",
      paragraph: "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
      imageSrc: img2,
      date: '2023, 11 نيسان',
      rating: 4
    },
    { name: "اسم المستخدم", 
      paragraph: "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب", 
      imageSrc: img3, 
      date: '2023, 11 نيسان',
      rating: 4 
    },
];
const CardSection: React.FC = () => {
  return (
    <CustomSwiper
      data={cardsData}
      renderItem={(card) => (
        <SimpleCard
          key={card.name}
          name={card.name}
          paragraph={card.paragraph}
          imageSrc={card.imageSrc}
          date={card.date}
          rating={card.rating}
        />
      )}
      slidesPerView={3}
      slidesPerGroup={1}
      spaceBetween={10}
      breakpoints={{
        768: { slidesPerView: 1 }, 
        1024: { slidesPerView: 3 }, 
      }}
    />
  );
};

export default CardSection;