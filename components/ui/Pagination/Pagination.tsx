import React from 'react';
import styles from './Pagination.module.css';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  prevArrowSrc: string;
  nextArrowSrc: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, prevArrowSrc, nextArrowSrc }) => {
  const renderPages = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <div
        key={i + 1}
        className={`${styles.pageNumber} ${i + 1 === currentPage ? styles.active : ''}`}
        onClick={() => onPageChange(i + 1)}
      >
        {i + 1}
      </div>
    ));
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        
        <Image src={prevArrowSrc} className={styles.ArrowImg} alt="Previous" width={24} height={24} />
      </button>
      {renderPages()}
      <button
        className={styles.arrow}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image src={nextArrowSrc} className={styles.ArrowImg} alt="Next" width={24} height={24} />
      </button>
    </div>
  );
};

export default Pagination;
