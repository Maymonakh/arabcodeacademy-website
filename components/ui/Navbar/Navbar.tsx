import React from "react";
import { Box, Button, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/public/images/Navbar-logo.png";
import loginIcon from "@/public/icons/icon _log in_.png";
import profileIcon from "@/public/icons/icon _profile circled_.png";
import icon from "@/public/icons/Polygon 2.png";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <Box className={styles.nav}>
      <HStack spacing={6}>
        <CustomButton
          text="تسجيل دخول"
          buttonType="secondaryOne"
          color="orange"
          icon={<Image src={loginIcon} alt="icon" width={25} height={25} />}
          onClick={() => console.log("Button Clicked!")}
        />
        <CustomButton
          text="إنشاء حساب"
          buttonType="secondaryOne"
          color="green"
          icon={<Image src={profileIcon} alt="icon" width={30} height={30} />}
          onClick={() => console.log("Button Clicked!")}
        />
      </HStack>

      <HStack spacing={8}>
        <Text cursor="pointer">التواصل</Text>
        <Text cursor="pointer">المسارات التعليمية</Text>
        <HStack cursor="pointer" spacing={2}>
          <Text>المصادر</Text>
          <Image src={icon} alt="icon" width={12} height={12} />
        </HStack>
      </HStack>

      <Box>
        <Image src={logo} alt="Navbar-logo" width={280} height={60} />
      </Box>
    </Box>
  );
};

export default Navbar;
