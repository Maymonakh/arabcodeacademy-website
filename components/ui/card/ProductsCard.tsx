import { Box, Image, Text, Stack } from "@chakra-ui/react";
import CustomButton from "../CustomButton/CustomButton";

interface CourseCardProps {
  title: string;
  price: number;
  Coachname: string;
  description: string;
  imageSrc: string;
  isComingSoon: boolean;
}

const ProductsCard = ({
  title,
  price,
  Coachname,
  description,
  imageSrc,
  isComingSoon,
}: CourseCardProps) => {
  return (
    <Box
      width="310px"
      maxHeight={520}
      borderWidth="1px"
      borderRadius="10px"
      m="1"
      position="relative" 
      mb={3}
      style={{
        color: "var(--primary)",
        fontFamily: "var(--font-tajawal)",
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)", 
      }}
    >
      {isComingSoon && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="0"
          height="0"
          borderTop="100px solid #00be98" 
          borderRight="100px solid transparent" 
        >
          <Text
            position="absolute"
            transform="rotate(-45deg)"
            fontSize="30px"
            fontWeight="bold"
            color="white"
            top="-96px"
            w="60px" 
            textAlign="center"
          >
            قريبًا
          </Text>
        </Box>
      )}
      <div
        style={{
          backgroundColor: "var(--orange)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "286px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          objectFit="contain"
          width={180}
          height={180}
        />
      </div>

      <Stack
        p={3}
        direction="row"
        justify="flex-end"
        align="center"
        justifyContent={"space-between"}
      >
        <Stack spacing={2}>
          <Text fontSize="md" fontWeight="bold" style={{fontSize: "30px"}}>
            ${price}
          </Text>
        </Stack>
        <Stack spacing={2}>
          <Text fontSize="lg" fontWeight="bold" style={{fontSize: "23px"}}>
            {title}
          </Text>
        </Stack>
      </Stack>

      <Stack pr={3} textAlign="right" style={{fontSize: "18px"}}>
        <Text fontSize="sm">{Coachname}</Text>
        <Text fontSize="sm">{description}</Text>
      </Stack>

      <Stack direction="row" p={6} justify="center">
        <CustomButton
          text="شراء"
          icon={
            <Image
              src="icons/icon _cart_.png"
              alt="icon"
              width={30}
              height={30}
            />
          }
          buttonType="secondaryTwo"
          color="orange"
        />
        <CustomButton
          text="اقرأ المزيد"
          icon={
            <Image
              src="icons/icon _more horiz circled outline_.png"
              alt="icon"
              width={30}
              height={30}
            />
          }
          buttonType="secondaryTwo"
          color="green"
        />
      </Stack>
    </Box>
  );
};

export default ProductsCard;
