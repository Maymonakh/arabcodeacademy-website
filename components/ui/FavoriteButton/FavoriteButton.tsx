import React from 'react';
import styles from './FavoriteButton.module.css';
import Image from 'next/image';
import filledHeartIcon from '@/public/icons/heart (3).svg';

const FavoriteButton: React.FC = () => {
  return (
    <button className={styles.favoriteButton}>
      <Image src={filledHeartIcon}  className={styles.heart}alt="Heart Icon" width={19} height={15} />
      المفضلة
    </button>
  );
};

export default FavoriteButton;
