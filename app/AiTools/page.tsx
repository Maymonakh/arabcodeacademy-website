"use client";

import React, { useState } from "react";
import useSWR from "swr";
import style from "./AiTools.module.css";
import AiCard from "../../components/ui/Card/AiCard/AiCard";
import CustomButton from "../../components/ui/CustomButton/CustomButton";
import Image from "next/image";
import iconMore from "@/public/images/🦆 icon _more horiz circled outline_.svg";
import SearchBar from "../../sections/home/Courses/Components/SearchBar";
import Pagination from "../../components/ui/Pagination/Pagination";
import prevArrow from "@/public/icons/Polygon 4.svg";
import nextArrow from "@/public/icons/Polygon 3.svg";
import FavoriteButton from "../../components/ui/FavoriteButton/FavoriteButton";
import Loading from "../../components/ui/Loading/Loading";
import Error from "../../components/ui/Error/Error";

interface CardData {
  tool_id: number;
  imageURL: string;
  title: string;
  tags: string[];
  description: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const AiTools: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const { data, error, isLoading } = useSWR(
    `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=${currentPage}&page_size=${pageSize}`,
    fetcher
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFavoriteClick = (toolId: number) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(toolId)) {
        return prevFavorites.filter((fav) => fav !== toolId);
      } else {
        return [...prevFavorites, toolId];
      }
    });
  };

  const displayedCards = showFavorites
    ? (data?.data ?? []).filter((card: CardData) => favorites.includes(card.tool_id))
    : data?.data ?? [];

  return (
    <section className={style.section}>
      <div className={style.searchBarContainer}>
        <div className={style.searchBar}>
          <SearchBar placeholder="chatgpt" />
        </div>
        <div className={style.favoritButton}>
          <FavoriteButton onClick={() => setShowFavorites(!showFavorites)} />
        </div>
      </div>

      <div className={style.cardSectionContainer}>
        {isLoading && <Loading />}
        {error && <Error />}
        {!isLoading &&
          !error &&
          displayedCards.map((card: CardData) => (
            <AiCard
              key={card.tool_id}
              imageSrc={card.imageURL}
              heading={card.title}
              hashtag={card.tags.join(", ")}
              paragraph={card.description}
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
              onFavoriteClick={() => handleFavoriteClick(card.tool_id)}
              isFavorite={favorites.includes(card.tool_id)}
            />
          ))}
      </div>

      {!showFavorites && !isLoading && !error && (
        <Pagination
          currentPage={currentPage}
          totalPages={data?.total_pages ?? 0}
          onPageChange={handlePageChange}
          prevArrowSrc={prevArrow}
          nextArrowSrc={nextArrow}
        />
      )}
    </section>
  );
};

export default AiTools;
