import React from "react";
import { Box, Text } from "@chakra-ui/react";
import styles from "./AdsPanel.module.css";

interface AdPanelProps {
  startDate: string;
  endDate: string;
  adText: string;
}

const AdsPanel: React.FC<AdPanelProps> = ({ startDate, endDate, adText }) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  const isAdActive = now >= start && now <= end;

  if (!isAdActive) return null;

  return (
    <Box className={styles.adPanel}>
      <Text>{adText}</Text>
    </Box>
  );
};

export default AdsPanel;
