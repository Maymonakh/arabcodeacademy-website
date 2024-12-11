'use client';
import React from "react";
import style from "./AiTools.module.css";
import AiCard from './../Card/AiCard/AiCard';
import img1 from '@/public/images/Rectangle 22.svg';
import CustomButton from "../CustomButton/CustomButton";
import Image from 'next/image';
import iconMore from '@/public/images/🦆 icon _more horiz circled outline_.svg';
import img2 from "@/public/images/Rectangle 19.svg";
import img3 from "@/public/images/Rectangle 18.svg";
import img4 from "@/public/images/Rectangle 17.svg";
import img5 from "@/public/images/Rectangle 24.svg";


import img6 from "@/public/images/Rectangle 23.svg";
import img7 from "@/public/images/Rectangle 21.svg";
import img8 from "@/public/images/Rectangle 20.svg";
import img9 from "@/public/images/Rectangle 31.svg";
import img10 from "@/public/images/Rectangle 29.svg";
import img11 from "@/public/images/Rectangle 30.svg";
import img12 from "@/public/images/Rectangle 25.svg";





const cardsData = [
  {
    imageSrc: img1,
    heading: "Upword",
    hashtag: "#summarizer",
    paragraph: "قم بإنشاء ملخصات بشكل أسرع باستخدام أدوات الذكاء الاصطناعي الخاصة بـ Upword. Upword هي أداة بحث مدعومة بالذكاء الاصطناعي للأفراد ......."
  },
  {
    imageSrc: img2,
    heading: "GitMind AI",
    hashtag: "#productivity",
    paragraph: "GitMind هو أداة إنتاجية تساعدك على إنشاء خرائط ذهنية وإدارة الأفكار بسهولة."
  },
  {
    imageSrc: img3,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph: "أندي هو محرك بحث يعتمد على التكنولوجيا الذكية التي تعززها الذكاء الاصطناعي، ويوفر إجابات مباشرة بدلاً من مجرد روابط. يقوم أندي ....."
  },
  {
    imageSrc: img4,
    heading: "Free Essay Generator",
    hashtag: "#writing generators",
    paragraph:" هل تعاني من كتابة الأوراق الأكاديمية؟ مولد المقالات المجاني هنا للمساعدة!....  يساعد الطلاب والكتّاب في إنشاء مقالات عالية الجودة بسهولة "
  }, {
    imageSrc: img5,
    heading: "AI Studios",
    hashtag: "#video generators",
    paragraph: "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة."
  }, {
    imageSrc: img6,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph: "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة."
  }, 
  {
    imageSrc: img7,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph: "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img8,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph: "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img9,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph: "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img10,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph: "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img11,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph: "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img12,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph: "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
];

const AiTools: React.FC = () => {
  return (
    <section>
     
        <div className={style.cardSectionContainer}>
          {cardsData.map((card, index) => (
            <AiCard
              key={index}
              imageSrc={card.imageSrc}
              heading={card.heading}
              hashtag={card.hashtag}
              paragraph={card.paragraph}
              button={
                <CustomButton
                  text="المزيد"
                  icon={<Image src={iconMore} alt="icon" width={25} height={25} />}
                  buttonType= "secondaryOne"
                  color="green"
                />
              }
            />
          ))}
       
      </div>
    </section>
  );
};

export default AiTools;
