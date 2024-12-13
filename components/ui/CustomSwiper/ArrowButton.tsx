import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@chakra-ui/react";
import prevIcon from "../../../public/icons/angle-left.png";
import nextIcon from "../../../public/icons/angle-right.png";
import prevIconWhite from "../../../public/icons/angle-left-white.svg";
import nextIconWhite from "../../../public/icons/angle-right-white.svg";

interface ArrowButtonProps {
  onClick: () => void;
  direction: "left" | "right";
  positionValue: string;
  color?: "primary" | "white"; 
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  onClick,
  direction,
  positionValue,
  color = "primary", 
}) => {
  const iconSrc =
    direction === "left"
      ? color === "white"
        ? prevIconWhite
        : prevIcon
      : color === "white"
      ? nextIconWhite
      : nextIcon;

  const [isMobile] = useMediaQuery("(max-width: 480px)");

  const imageSize = isMobile ? 40 : 70;

  const styles = {
    position: "absolute" as const,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    cursor: "pointer",
    background: "none",
    border: "none",
    [direction]: positionValue,
  };

  return (
    <button style={styles} onClick={onClick} aria-label={`${direction} slide`}>
      <Image
        src={iconSrc}
        alt={`${direction} slide`}
        width={imageSize}
        height={imageSize}
      />
    </button>
  );
};

export default ArrowButton;
