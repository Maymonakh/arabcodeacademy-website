import React from 'react';
import Image from 'next/image';
import styles from './TextBlock.module.css';

interface TextBlockProps {
  title: string;
  description: string;
  iconSrc: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ title, description, iconSrc }) => {
  return (
    <div className={styles.textBlock}>
      <div className={styles.titleContainer}> 
        <div className={styles.iconContainer}>
          <Image src={iconSrc} alt={`${title} icon`} width={32} height={30.35} />
        </div>
        <h3 className={styles.h3}>{title}</h3>
      </div>
      <p className={styles.p}>{description}</p>
    </div>
  );
};

export default TextBlock;
