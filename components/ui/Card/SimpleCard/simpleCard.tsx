import { Flex, Box, Heading, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import rectanle from "@/public/images/Rectangle 72.svg";
import filledStar from "@/public/images/StarM.svg";
import emptyStar from "@/public/images/StarF.svg";
import style from "./simpleCard.module.css";

interface Props {
  name: string; // اسم المستخدم
  paragraph: string; // النص الوصفي للكرت
  imageSrc: string; // رابط صورة المستخدم
  date?: string; // تاريخ العرض (اختياري)
  rating: number; // تقييم النجوم (من 1 إلى 5)
}

/**
 * SimpleCard Component
 * @description مكون يعرض بطاقة تحتوي على صورة، عنوان، وصف، تاريخ، وتقييم بالنجوم
 * @param {Props} props - بيانات البطاقة
 * @returns JSX.Element - واجهة المستخدم الخاصة بالبطاقة
 */
const SimpleCard = ({ name, paragraph, imageSrc, date, rating }: Props): JSX.Element => {
  /**
   * Renders the star icons based on the rating.
   * @returns JSX.Element[] - Array of star images.
   */
  const renderStars = (): JSX.Element[] => {
    return [1, 2, 3, 4, 5].map((i) => (
      <Image
        key={i}
        src={i <= rating ? filledStar : emptyStar} // اختر النجمة الممتلئة أو الفارغة بناءً على التقييم
        alt={i <= rating ? "نجمة ممتلئة" : "نجمة فارغة"}
        width={24}
        height={24}
        className={style.stars}
      />
    ));
  };

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="70vh">
      {/* بطاقة المستخدم */}
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
        {/* الخلفية العلوية */}
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
          <Image src={rectanle} alt="خلفية علوية" className={style.rectanle} />
        </Box>

        {/* صورة الملف الشخصي */}
        <Flex justify="center" align="center" mb={4}>
          <Image
            src={imageSrc}
            alt="صورة المستخدم"
            className={style.img}
          />
        </Flex>

        {/* اسم المستخدم */}
        <Heading as="h3" size="md" textAlign="center" mb={2} className={style.heading}>
          {name}
        </Heading>

        {/* النص الوصفي */}
        <Text fontSize="sm" textAlign="center" mb={4} className={style.paragraph}>
          {paragraph}
        </Text>

        {/* التذييل: التاريخ والتقييم */}
        <Flex justify="space-between" align="center" className={style.footer}>
          {/* عرض التاريخ */}
          <Text fontSize="sm" className={style.date}>
            {date || "No Date Provided"}
          </Text>

          {/* عرض التقييم بالنجوم */}
          <HStack className={style.starsContainer} spacing="2px">
            {renderStars()}
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SimpleCard;
