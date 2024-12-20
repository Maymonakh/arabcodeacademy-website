"use client";
import React, { useState, useEffect } from "react";
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

interface CardData {
  tool_id: number;
  imageURL: string;
  title: string;
  tags: string[];
  description: string;
}

const AiTools: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);
  const [totalPages, setTotalPages] = useState(0);
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAiTools = async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=${page}&page_size=${pageSize}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch AI tools");
      }
      const data = await response.json();
      setCardsData(data.data);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAiTools(currentPage, pageSize);
  }, [currentPage, pageSize]);

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

  const filteredCards = cardsData.filter((card) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      card.title.toLowerCase().includes(searchLower) ||
      card.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  const displayedCards = showFavorites
    ? filteredCards.filter((card) => favorites.includes(card.tool_id))
    : filteredCards;

  return (
    <section className={style.section}>
      <div className={style.searchBarContainer}>
        <div className={style.searchBar}>
          <SearchBar
            placeholder=" Chatgpt"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={style.favoritButton}>
          <FavoriteButton onClick={() => setShowFavorites(!showFavorites)} />
        </div>
      </div>

      <div className={style.cardSectionContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          displayedCards.map((card) => (
            <AiCard
              key={card.tool_id}
              imageSrc={card.imageURL}
              heading={card.title}
              hashtag={card.tags.join(", ")}
              paragraph={card.description}
              button={
                <CustomButton
                  text="المزيد"
                  icon={<Image src={iconMore} alt="icon" width={25} height={25} />}
                  buttonType="secondaryOne"
                  color="green"
                />
              }
              onFavoriteClick={() => handleFavoriteClick(card.tool_id)}
              isFavorite={favorites.includes(card.tool_id)}
            />
          ))
        )}
      </div>

      {!showFavorites && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          prevArrowSrc={prevArrow}
          nextArrowSrc={nextArrow}
        />
      )}
    </section>
  );
};

export default AiTools;