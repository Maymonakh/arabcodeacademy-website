import { Button, useMediaQuery } from "@chakra-ui/react";
import { ReactElement } from "react";

interface CustomButtonProps {
  text: string;
  icon?: ReactElement;
  buttonType?: "primary" | "secondary";
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
  const [isTablet] = useMediaQuery("(min-width: 481px) and (max-width: 768px)");

  const buttonStyles = {
    primary: isMobile
      ? { height: "60px", width: "200px", fontSize: "17px" }
      : isTablet
      ? { height: "85px", width: "330px", fontSize: "17px" }
      : { height: "80px", width: "310px", fontSize: "17px" }, 
    secondary: isMobile
      ? { height: "50px", width: "150px", fontSize: "17px" }
      : isTablet
      ? { height: "70px", width: "234px", fontSize: "17px" }
      : { height: "60px", width: "200px", fontSize: "17px" },
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
