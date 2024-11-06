import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import styles from "./PromoText.module.css";

interface PromoTextProps {
  title: string;
  paragraph: string;
  button?: ReactElement;
  width: string | number;
  padding?: string | number;
  titleMarginBottom?: string | number;
  paragraphMarginBottom?: string | number;
  opacity?: string | number;
}

const PromoText: React.FC<PromoTextProps> = ({
  title,
  paragraph,
  button,
  width,
  padding = "20px",
  titleMarginBottom = "20px",
  paragraphMarginBottom = "20px",
  opacity = 1,
}) => {
  return (
    <Box
      width={{ base: "100%", md: width, lg: width }}
      padding={padding}
      opacity={opacity}
      className={styles.promoBox}
    >
      <Text
        marginBottom={titleMarginBottom}
        className={styles.title}
      >
        {title}
      </Text>
      <Text
        marginBottom={paragraphMarginBottom}
        className={styles.paragraph}
      >
        {paragraph}
      </Text>
      {button}
    </Box>
  );
};

export default PromoText;
