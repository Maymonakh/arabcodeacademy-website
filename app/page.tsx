
import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import SimpleCard from '../components/ui/Card/simpleCard';
import img1 from '@/public/images/kisspng-portrait-shannon-5ae540d7d5c1d0.2959227015249737838756 1.svg';
import img2 from '@/public/images/2.svg';
import img3 from '@/public/images/3.svg';


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
