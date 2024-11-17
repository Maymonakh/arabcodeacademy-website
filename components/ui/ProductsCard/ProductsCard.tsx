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
      width="300px"
      maxHeight={500}
      borderWidth="1px"
      borderRadius="10px"
      position="relative"
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
          left="25.5%"
          transform="translateX(-50%)"
          overflow="hidden"
          textAlign="center"
        >
          <Text
            fontSize="30px"
            color="white"
            position="absolute"
            top="10px"
            left="25%"
            transform="translateX(-50%)"
          >
            قريباً
          </Text>
          <Image
            src="/images/Rectangle 88.png"
            alt="Coming Soon"
            width="100%"
            height="100%"
            objectFit="cover"
          />
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
          <Text fontSize="md" fontWeight="bold" style={{ fontSize: "30px" }}>
            ${price}
          </Text>
        </Stack>
        <Stack spacing={2}>
          <Text fontSize="lg" fontWeight="bold" style={{ fontSize: "23px" }}>
            {title}
          </Text>
        </Stack>
      </Stack>

      <Stack pr={3} textAlign="right" style={{ fontSize: "18px" }}>
        <Text fontSize="sm">{Coachname}</Text>
        <Text fontSize="sm">{description}</Text>
      </Stack>

      <Stack direction="row" p={6} justify="center">
        <CustomButton
          text={isComingSoon ? "احجز الآن" : "شراء"}
          icon={
            <Image
              src="icons/icon _cart_.png"
              alt="icon"
              width={5}
              height={5}
            />
          }
          buttonType="secondaryTwo"
          color="green"
        />
        <CustomButton
          text="اقرأ المزيد"
          icon={
            <Image
              src="icons/icon _more horiz circled outline_.png"
              alt="icon"
              width={5}
              height={5}
            />
          }
          buttonType="secondaryTwo"
          color="orange"
        />
      </Stack>
    </Box>
  );
};

export default ProductsCard;
