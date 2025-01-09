import React, { useState } from 'react';
import styles from './FavoriteButton.module.css';
import Image from 'next/image';
import empty from '@/public/icons/heart (3).svg';
import filled from "@/public/icons/filled.png";

interface FavoriteButtonProps {
  onClick?: () => void; 
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    if (onClick) onClick();
  };

  return (
    <button className={styles.favoriteButton} onClick={handleClick}>
      <Image
        src={isFavorite ? filled :empty} 
        className={styles.heart}
        alt="Heart Icon"
        width={19}
        height={15}
      />
      المفضلة
    </button>
  );
};

export default FavoriteButton;
