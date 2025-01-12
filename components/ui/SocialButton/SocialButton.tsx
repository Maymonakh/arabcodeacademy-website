import React from "react";
import "./SocialButton.css";
import separatorImage from '@/public/icons/Line 10.svg'
import Image from "next/image";

interface SocialButtonProps {
  iconClass: string;
  buttonClass: string;
  text: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ iconClass, buttonClass, text }) => {
  return (
    <button className={`social-button ${buttonClass}`}>
      <i className={iconClass}></i>
      <Image src={separatorImage} alt="Separator" />  
      <span>{text}</span>
    </button>
  );
};

export default SocialButton;
