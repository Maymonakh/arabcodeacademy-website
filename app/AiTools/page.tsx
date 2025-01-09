"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
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
import Loading from "@/components/ui/Loading/Loading";
import Error from "@/components/ui/Error/Error";

interface CardData {
  tool_id: number;
  imageURL: string;
  title: string;
  tags: string[];
  description: string;
}

const AiTools: React.FC = () => {
  const [data, setData] = useState<CardData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentRequestRef = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      const requestId = currentRequestRef.current + 1;
      currentRequestRef.current = requestId;

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=${currentPage}&page_size=12`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        if (requestId === currentRequestRef.current) {
          setData(result.data);
          setTotalPages(result.total_pages);
        }
      } catch (err: any) {
        if (requestId === currentRequestRef.current) {
          setError(err.message);
        }
      } finally {
        if (requestId === currentRequestRef.current) {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [currentPage]);

  const handleFavoriteClick = (toolId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(toolId)
        ? prevFavorites.filter((fav) => fav !== toolId)
        : [...prevFavorites, toolId]
    );
  };

  const filteredCards = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return data.filter((card: CardData) => {
      return (
        card.title.toLowerCase().includes(searchLower) ||
        card.tags.some((tag: string) => tag.toLowerCase().includes(searchLower))
      );
    });
  }, [data, searchTerm]);

  const displayedCards = showFavorites
    ? filteredCards.filter((card: CardData) => favorites.includes(card.tool_id))
    : filteredCards;

  return (
    <section className={style.section}>
      <header className={style.searchBarContainer}>
        <SearchBar
          placeholder="Search for tools..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <FavoriteButton
          onClick={() => setShowFavorites(!showFavorites)}
          text={showFavorites ? "Show All" : "Show Favorites"}
        />
      </header>

      <div className={style.cardSectionContainer}>
        {isLoading && <Loading />}
        {error && <Error message={error} />}
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
                  icon={<Image src={iconMore} alt="More icon" width={25} height={25} />}
                  buttonType="secondaryOne"
                  color="green"
                />
              }
              onFavoriteClick={() => handleFavoriteClick(card.tool_id)}
              isFavorite={favorites.includes(card.tool_id)}
            />
          ))}
      </div>

      {!isLoading && !error && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          prevArrowSrc={prevArrow}
          nextArrowSrc={nextArrow}
        />
      )}
    </section>
  );
};

export default AiTools;
