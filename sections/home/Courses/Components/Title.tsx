import React from "react";
import { Text, Box } from "@chakra-ui/react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Box position="relative" display="inline-block">
      <Text
        fontSize="27px"
        fontWeight="bold"
        color="var(--primary)"
        fontFamily="var(--font-tajawal)"
        dir="rtl"
      >
        {text}
      </Text>
      <Box
        position="absolute"
        bottom="-2px"
        left="0"
        width="100%"
        height="2px"
        backgroundColor="var(--primary)"
      />
    </Box>
  );
};

export default Title;
