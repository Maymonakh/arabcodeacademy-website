import { Button, useMediaQuery } from "@chakra-ui/react";
import { ReactElement } from "react";

interface CustomButtonProps {
  text: string;
  icon?: ReactElement;
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
  const [isTablet] = useMediaQuery("(min-width: 481px) and (max-width: 850px)");

  const buttonStyles = {
    primary: isMobile
      ? { height: "60px", width: "200px", fontSize: "17px" }
      : isTablet
      ? { height: "85px", width: "330px", fontSize: "17px" }
      : { height: "80px", width: "310px", fontSize: "17px" },
    secondaryOne: isMobile
      ? { height: "50px", width: "150px", fontSize: "17px" }
      : isTablet
      ? { height: "70px", width: "234px", fontSize: "17px" }
      : { height: "60px", width: "200px", fontSize: "17px" },
    secondaryTwo: isMobile
      ? { height: "40px", width: "100px", fontSize: "17px" }
      : isTablet
      ? { height: "50px", width: "160px", fontSize: "17px" }
      : { height: "44px", width: "140px", fontSize: "17px" },
  };

  const colorStyles = {
    green: {
      backgroundColor: "var(--green)",
      color: "var(--background)",
      _hover: { backgroundColor: "var(--orange)" },
    },
    orange: {
      backgroundColor: "var(--orange)",
      color: "var(--background)",
      _hover: { backgroundColor: "var(--green)" },
    },
  };

  return (
    <Button
      sx={{ ...buttonStyles[buttonType], ...colorStyles[color] }}
      rightIcon={icon || undefined}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
