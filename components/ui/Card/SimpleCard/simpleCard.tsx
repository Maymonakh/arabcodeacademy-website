import { Flex, Box, Heading, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import rectanle from "@/public/images/Rectangle 72.svg";
import filledStar from "@/public/images/StarM.svg";
import emptyStar from "@/public/images/StarF.svg";
import style from "./simpleCard.module.css";

interface Props {
  name: string;
  paragraph: string;
  imageSrc: string;
  date?: string;
  rating: number;
}

const SimpleCard = ({ name, paragraph, imageSrc, date, rating }: Props) => {
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((i) => (
      <Image
        key={i}
        src={i <= rating ? filledStar : emptyStar}
        alt="star"
        width={24}
        height={24}
        className={style.stars}
      />
    ));
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="70vh"
    >
      <Box
        key={name}
        width="360px"
        height="360px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        p={4}
        bg="white"
        className={style.card}
      >
        {/* Rectangle Image */}
        <Box
          mb={4}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "119.11px",
            zIndex: 1,
          }}
        >
          <Image src={rectanle} alt="Rectangle" className={style.rectanle} />
        </Box>

        {/* Profile Image */}
        <Flex justify="center" align="center" mb={4}>
          <Image
            src={imageSrc}
            alt="User Avatar"
            // width={100}
            // height={100}
            className={style.img}
          />
        </Flex>

        {/* Heading */}
        <Heading as="h3" size="md" textAlign="center" mb={2} className={style.heading}>
          {name}
        </Heading>

        {/* Paragraph */}
        <Text fontSize="sm" textAlign="center" mb={4} className={style.paragraph}>
          {paragraph}
        </Text>

        {/* Footer */}
        <Flex justify="space-between" align="center" className={style.footer} >
          <Text fontSize="sm" className={style.date}>
            {date}
          </Text>
          <HStack className={style.starsContainer} spacing="2px">
            {renderStars()}
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SimpleCard;
