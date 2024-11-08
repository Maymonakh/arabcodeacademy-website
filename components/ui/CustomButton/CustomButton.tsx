import { Button, useMediaQuery } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface CustomButtonProps {
  text: string;
  icon: ReactElement;
  buttonType?: "primary" | "secondaryOne" | "secondaryTwo";
  color?: "green" | "orange";
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon,
  buttonType = "primary",
  color = "green",
  onClick,
}) => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 481px) and (max-width: 1024px)"
  );

  const buttonStyles = {
    primary: isMobile
      ? { height: "60px", width: "200px" }
      : isTablet
      ? { height: "85px", width: "330px" }
      : { height: "80px", width: "310px" },
    secondaryOne: isMobile
      ? { height: "45px", width: "175px" }
      : isTablet
      ? { height: "50px", width: "180px" }
      : { height: "50px", width: "180px" },
    secondaryTwo: isMobile
      ? { height: "40px", width: "100px" }
      : isTablet
      ? { height: "50px", width: "160px" }
      : { height: "44px", width: "140px" },
  };

  const colorStyles = {
    green: {
      backgroundColor: "var(--green)",
      color: "var(--background)",
      _hover: { backgroundColor: "var(--darkGreen)" },
    },
    orange: {
      backgroundColor: "var(--orange)",
      color: "var(--background)",
      _hover: { backgroundColor: "var(--darkOrange)" },
    },
  };

  return (
    <Button
      sx={{
        ...buttonStyles[buttonType],
        ...colorStyles[color],
        fontSize: "17px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
      onClick={onClick}
      rightIcon={icon}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
