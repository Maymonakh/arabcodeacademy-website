import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@chakra-ui/react";
import prevIcon from "../../../public/icons/angle-left.png";
import nextIcon from "../../../public/icons/angle-right.png";

interface ArrowButtonProps {
  onClick: () => void;
  direction: "left" | "right";
  positionValue: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  onClick,
  direction,
  positionValue,
}) => {
  const iconSrc = direction === "left" ? prevIcon : nextIcon;

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
