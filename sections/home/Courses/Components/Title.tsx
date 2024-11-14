import React from "react";
import { Text } from "@chakra-ui/react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Text
      fontSize="27px"
      fontWeight="bold"
      color="var(--primary)"
      textDecoration="underline"
      textDecorationColor="var(--primary)"
      fontFamily= "var(--font-tajawal)"
      dir="rtl"
    >
      {text}
    </Text>
  );
};

export default Title;
