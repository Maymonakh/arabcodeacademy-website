import { Box, Text, Stack } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import CustomButton from "../../CustomButton/CustomButton";
import { useMediaQuery } from "@chakra-ui/react";
import moreIcon from "@/public/icons/icon _more horiz circled outline_.png";

interface CourseCardProps {
  title: string;
  price?: string;
  coachName: string;
  description: string;
  imageSrc: StaticImageData;
  isComingSoon: boolean;
  textAlign?: "RIGHT" | "CENTER";
}

const ProductsCard = ({
  title,
  price,
  coachName,
  description,
  imageSrc,
  isComingSoon,
  textAlign = "RIGHT",
}: CourseCardProps) => {
  const [isMobile, isTablet1, isTablet2, isDesktop1, isDesktop2] =
    useMediaQuery([
      "(max-width: 550px)",
      "(min-width: 550px) and (max-width: 900px)",
      "(min-width: 900px) and (max-width: 1441px)",
      "(min-width: 1441px) and (max-width: 1600px)",
      "(min-width: 1600px) and (max-width: 1700px)",
    ]);

  return (
    <Box
      width={
        isMobile
          ? "90%"
          : isTablet1
            ? "270px"
            : isTablet2
              ? "300px"
              : isDesktop1
                ? "275px"
                : isDesktop2
                  ? "290px"
                  : "300px"
      }
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
          left="32%"
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
            width={300}
            height={300}
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
        textAlign={textAlign.toLowerCase() as "right" | "center"}

      >
        <Stack spacing={2} textAlign={textAlign.toLowerCase() as "right" | "center"}>
          <Text fontSize="md" fontWeight="bold" style={{ fontSize: "30px" }}>
            {price}
          </Text>
        </Stack>
        <Stack spacing={2} textAlign={textAlign.toLowerCase() as "right" | "center"}>
          <Box maxWidth="250px">
            <Text
              fontSize="lg"
              fontWeight="bold"
              style={{
                fontSize: "23px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              isTruncated
            >
              {title}
            </Text>
          </Box>
        </Stack>
      </Stack>

      <Stack pr={3} textAlign={textAlign.toLowerCase() as "right" | "center"} spacing={2} fontSize="18px">
        <Text fontSize="sm">{coachName}</Text>
        <Text fontSize="sm">{description}</Text>
      </Stack>

      <Stack direction="row" p={6} justify="center">
        <CustomButton
          text={isComingSoon ? "احجز الآن" : "شراء"}
          icon={
            <Image src={moreIcon} alt="More Options" width={16} height={16} />
          }
          buttonType={isMobile ? "secondaryTwo" : "secondaryOne"}
          color="green"
          textStyle={{
            fontSize: isMobile ? "14px" : "17px",
            color: "white",
          }}
          onClick={() => alert("Button clicked!")}
        />
        <CustomButton
          text="اقرأ المزيد"
          icon={
            <Image src={moreIcon} alt="More Options" width={16} height={16} />
          }
          buttonType={isMobile ? "secondaryTwo" : "secondaryOne"}
          color="orange"
          textStyle={{
            fontSize: isMobile ? "14px" : "17px",
          }}
          onClick={() => alert("Read more clicked!")}
        />
      </Stack>
    </Box>
  );
};

export default ProductsCard;
