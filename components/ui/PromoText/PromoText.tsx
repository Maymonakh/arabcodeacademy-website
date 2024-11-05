import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import styles from "./PromoText.module.css";

interface PromoTextProps {
  title: string;
  paragraph: string;
  button?: ReactElement;
  width: string | number;
  height: string | number;
  padding?: string | number;
  titleMarginBottom?: string | number;
  paragraphMarginBottom?: string | number;
}

const PromoText: React.FC<PromoTextProps> = ({
  title,
  paragraph,
  button,
  width,
  height,
  padding = "20px",
  titleMarginBottom = "20px",
  paragraphMarginBottom = "20px",
}) => {
  return (
    <Box
      width={width}
      height={height}
      sx={{ padding }}
      className={styles.promoBox}
    >
      <Text sx={{ marginBottom: titleMarginBottom }} className={styles.title}>
        {title}
      </Text>
      <Text
        sx={{ marginBottom: paragraphMarginBottom }}
        className={styles.paragraph}
      >
        {paragraph}
      </Text>
      {button}
    </Box>
  );
};

export default PromoText;
