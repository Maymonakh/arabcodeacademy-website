"use client";
import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import SimpleCard from '../components/ui/Card/simpleCard';
import img1 from '@/public/images/kisspng-portrait-shannon-5ae540d7d5c1d0.2959227015249737838756 1.svg';
import img2 from '@/public/images/2.svg';
import img3 from '@/public/images/3.svg';

import AdsPanel from "../sections/home/AdsPanel/AdsPanel";
import "../styles/variables.css";
import ProgrammingTests from "../sections/home/ProgrammingTests/ProgrammingTests";
import EduPath from "../sections/home/EduPath/EduPath";
import InteractiveTools from "@/sections/home/InteractiveTools/InteractiveTools";
import Courses from "@/sections/home/Courses/Courses";

const cardsData = [
  { name: "اسم المستخدم",
     paragraph: "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
     imageSrc:img1,
     date:'2023, 11 نيسان',
     rating: 4
     },
  { name: "اسم المستخدم",
    paragraph: "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب",
    imageSrc: img2 ,
    date:'2023, 11 نيسان',
    rating: 4
     },
  { name: "اسم المستخدم", 
    paragraph: "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية وأسلوب تدريسي ممتع يتناسب.", 
    imageSrc: img3, 
    date: '2023, 11 نيسان'  ,
    rating: 4 },
];

export default function Home() {
  return (
    <ChakraProvider>
    

      <AdsPanel
        startDate="2024-10-20T00:00:00Z"
        endDate="2024-11-31T23:59:59Z"
        adText="خصومات بنسبة 20% على الكورسات"
      />
      <ProgrammingTests />
      <EduPath />
      <Courses />
      <InteractiveTools />
      <SimpleGrid columns={[1, 2, 3]} spacing={4} p={4}>
        {cardsData.map((card, index) => (
          <SimpleCard
            key={index}
            name={card.name}
            paragraph={card.paragraph}
            imageSrc={card.imageSrc}
            date={card.date}
            rating={card.rating}
          />
        ))}
      </SimpleGrid>

    </ChakraProvider>
  );
}
