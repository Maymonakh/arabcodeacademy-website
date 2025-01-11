"use client";
import React, { useState, useEffect, useRef } from "react";
import useSWRInfinite from "swr/infinite";
import style from "./AiTools.module.css";
import AiCard from "../../components/ui/Card/AiCard/AiCard";
import CustomButton from "../../components/ui/CustomButton/CustomButton";
import Image from "next/image";
import iconMore from "@/public/images/icon _more horiz circled outline_.svg";
import SearchBar from "../../sections/home/Courses/Components/SearchBar";
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
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [typedSearchTerm, setTypedSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const sentinelRef = useRef<HTMLDivElement>(null);

  const { data, error, setSize, isLoading, isValidating } = useSWRInfinite(
    (pageIndex) =>
      `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=${
        pageIndex + 1
      }&page_size=12&search=${searchTerm}`,
    fetcher
  );

  const cards = data ? data.flatMap((page) => page.data) : [];
  const isReachingEnd = data && data[data.length - 1]?.data.length < 12;

  const handleFavoriteClick = (toolId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(toolId)
        ? prevFavorites.filter((fav) => fav !== toolId)
        : [...prevFavorites, toolId]
    );
  };

  const handleSearchClick = () => {
    setSearchTerm(typedSearchTerm);
    const params = new URLSearchParams(window.location.search);
    params.set("search", typedSearchTerm);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  useEffect(() => {
    if (!sentinelRef.current || isReachingEnd || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSize((size) => size + 1);
        }
      },
      { root: null, threshold: 1.0 }
    );

    observer.observe(sentinelRef.current);

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [sentinelRef, isReachingEnd, isLoading, setSize]);

  const cardsToDisplay = showFavorites
    ? cards.filter((card: CardData) => favorites.includes(card.tool_id))
    : cards;

  return (
    <section className={style.section}>
      <div className={style.searchBarContainer}>
        <div className={style.searchBar}>
          <SearchBar
            placeholder="Chatgpt"
            value={typedSearchTerm}
            onInputChange={(e) => setTypedSearchTerm(e.target.value)}
            onSearchClick={handleSearchClick}
          />
        </div>
        <div className={style.favoritButton}>
          <FavoriteButton onClick={() => setShowFavorites(!showFavorites)} />
        </div>
      </div>

      <div className={style.cardSectionContainer}>
        {cardsToDisplay.map((card: CardData) => (
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

      {(isLoading || isValidating) && <Loading />}
      {error && <Error />}

      <div ref={sentinelRef} className={style.sentinel} />

      {isReachingEnd && (
        <p className={style.endMessage}>No more data to load</p>
      )}
    </section>
  );
};

export default AiTools;
