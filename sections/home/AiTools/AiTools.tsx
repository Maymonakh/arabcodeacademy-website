"use client";
import React, { useState } from "react";
import style from "./AiTools.module.css";
import AiCard from "../../../components/ui/Card/AiCard/AiCard";
import img1 from "@/public/images/Rectangle 22.svg";
import CustomButton from "../../../components/ui/CustomButton/CustomButton";
import Image from "next/image";
import iconMore from "@/public/images/🦆 icon _more horiz circled outline_.svg";
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
import SearchBar from "../Courses/Components/SearchBar";
import Pagination from "../../../components/ui/Pagination/Pagination";
import prevArrow from "@/public/icons/Polygon 4.svg"; // مسار صورة السهم السابق
import nextArrow from "@/public/icons/Polygon 3.svg"; // مسار صورة السهم التالي
import FavoriteButton from '../../../components/ui/FavoriteButton/FavoriteButton'; // تأكد من مسار المكون

const cardsData = [
  {
    imageSrc: img4,
    heading: "Upword",
    hashtag: "#summarizer",
    paragraph:
      "قم بإنشاء ملخصات بشكل أسرع باستخدام أدوات الذكاء الاصطناعي الخاصة بـ Upword. Upword هي أداة بحث مدعومة بالذكاء الاصطناعي للأفراد .......",
  },
  {
    imageSrc: img3,
    heading: "GitMind AI",
    hashtag: "#productivity",
    paragraph:
      "GitMind هو أداة إنتاجية تساعدك على إنشاء خرائط ذهنية وإدارة الأفكار بسهولة.",
  },
  {
    imageSrc: img2,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph:
      "أندي هو محرك بحث يعتمد على التكنولوجيا الذكية التي تعززها الذكاء الاصطناعي، ويوفر إجابات مباشرة بدلاً من مجرد روابط. يقوم أندي .....",
  },
  {
    imageSrc: img1,
    heading: "Free Essay Generator",
    hashtag: "#writing generators",
    paragraph:
      " هل تعاني من كتابة الأوراق الأكاديمية؟ مولد المقالات المجاني هنا للمساعدة!....  يساعد الطلاب والكتّاب في إنشاء مقالات عالية الجودة بسهولة ",
  },
  {
    imageSrc: img8,
    heading: "AI Studios",
    hashtag: "#video generators",
    paragraph:
      "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img7,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph:
      "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img6,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph:
      "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img5,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph:
      "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img12,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph:
      "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img11,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph:
      "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img10,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph:
      "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
  {
    imageSrc: img9,
    heading: "Andi",
    hashtag: "#search engine",
    paragraph:
      "Andi هو محرك بحث ذكي يعتمد على الذكاء الاصطناعي لتقديم نتائج دقيقة وسريعة.",
  },
];

const AiTools: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFavorites, setShowFavorites] = useState(false);
  const totalPages = 5; // تحديد العدد الإجمالي للصفحات ليكون 5
  const [favorites, setFavorites] = useState<string[]>([]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setShowFavorites(page === 2); // إظهار المفضلة عند الصفحة الثانية
  };

  const handleFavoriteClick = (heading: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(heading)) {
        return prevFavorites.filter(fav => fav !== heading);
      } else {
        return [...prevFavorites, heading];
      }
    });
  };

  const displayedCards = showFavorites ? [] : cardsData;
  const favoriteCards = cardsData.filter(card => favorites.includes(card.heading));

  return (
    <section>
      <div className={style.searchBarContainer}>
        <div className={style.searchBar}>
          <SearchBar placeholder="chatgpt" />
        </div>
        <div className={style.favoritButton}>
        <FavoriteButton />
        </div>
      </div>

      <div className={style.cardSectionContainer}>
        {displayedCards.map((card, index) => (
          <AiCard
            key={index}
            imageSrc={card.imageSrc}
            heading={card.heading}
            hashtag={card.hashtag}
            paragraph={card.paragraph}
            button={
              <CustomButton
                text="المزيد"
                icon={
                  <Image src={iconMore} alt="icon" width={25} height={25} />
                }
                buttonType="secondaryOne"
                color="green"
              />
            }
            onFavoriteClick={() => handleFavoriteClick(card.heading)}
            isFavorite={favorites.includes(card.heading)}
          />
        ))}
        {showFavorites && favoriteCards.map((card, index) => (
          <AiCard
            key={index}
            imageSrc={card.imageSrc}
            heading={card.heading}
            hashtag={card.hashtag}
            paragraph={card.paragraph}
            button={
              <CustomButton
                text="المزيد"
                icon={
                  <Image src={iconMore} alt="icon" width={25} height={25} />
                }
                buttonType="secondaryOne"
                color="green"
              />
            }
            onFavoriteClick={() => handleFavoriteClick(card.heading)}
            isFavorite={favorites.includes(card.heading)}
          />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
        prevArrowSrc={prevArrow} 
        nextArrowSrc={nextArrow} 
      />
    </section>
  );
};

export default AiTools;
