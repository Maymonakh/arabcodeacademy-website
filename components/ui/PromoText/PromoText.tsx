import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import styles from "./PromoText.module.css";

interface PromoTextProps {
  title: string;
  paragraph: string;
  button?: ReactElement;
  opacity?: string | number;
}

const PromoText: React.FC<PromoTextProps> = ({
  title,
  paragraph,
  button,
  opacity = 1,
}) => {
  return (
    <Box opacity={opacity} className={styles.promoBox}>
      <Box className={styles.promoText}>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.paragraph}>{paragraph}</Text>
      </Box>
      <div className={styles.promoBoxButton}>{button}</div>
    </Box>
  );
};

export default PromoText;
