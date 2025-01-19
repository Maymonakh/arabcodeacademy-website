"use client";
import React, { useState } from "react";
import {
  Box,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/Navbar-logo.png";
import loginIcon from "@/public/icons/icon _log in_.png";
import profileIcon from "@/public/icons/icon _profile circled_.png";
import loginIcon2 from "@/public/icons/icon _log in_2.png";
import profileIcon2 from "@/public/icons/icon _profile circled_2.png";
import icon from "@/public/icons/Polygon 2.png";
import menu from "@/public/icons/Menu.png";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenuToggle = () => {
    setShowSubMenu((prev) => !prev);
  };

  return (
    <Box className={styles.nav}>
      {!isMobile ? (
        <>
          <HStack spacing={{ md: 2, lg: 6 }}>
            <Link href={"/Login"}>
              <CustomButton
                text="تسجيل دخول"
                buttonType="secondaryOne"
                color="orange"
                icon={
                  <Image src={loginIcon} alt="icon" width={25} height={25} />
                }
                onClick={() => console.log("Button Clicked!")}
              />
            </Link>
            <Link href={"/SignUp"}>
              <CustomButton
                text="إنشاء حساب"
                buttonType="secondaryOne"
                color="green"
                icon={
                  <Image src={profileIcon} alt="icon" width={30} height={30} />
                }
                onClick={() => console.log("Button Clicked!")}
              />
            </Link>
          </HStack>

          <HStack spacing={{ md: 4, lg: 8 }}>
            <Text cursor="pointer">التواصل</Text>
            <Text cursor="pointer">المسارات التعليمية</Text>
            <HStack
              cursor="pointer"
              spacing={{ md: 0, lg: 2 }}
              position="relative"
              onClick={handleSubMenuToggle}
            >
              <Text>المصادر</Text>
              <Image src={icon} alt="icon" width={12} height={12} />
              {showSubMenu && (
                <Box className={styles.desktopSubMenu}>
                  <Text className={styles.menuItem}>المدونة</Text>
                  <Text className={styles.menuItem}>المنتدى</Text>
                  <Text className={styles.menuItem}>قاموس الكلمات</Text>
                  <Text className={styles.menuItem}>دروس فيديو قصيرة</Text>
                  <Link href="/AiTools" className={styles.menuItem}>
                    دليل أدوات الذكاء الاصطناعي
                  </Link>
                  <Text className={styles.menuItem}>بنك الأسئلة التقنية</Text>
                  <Text className={styles.menuItem}>
                    دروس وأنماط الميدجورني
                  </Text>
                  <Text className={styles.menuItem}>لغة ضاد</Text>
                  <Link href="/Profile" className={styles.menuItem}>
                    الحساب الشخصي
                  </Link>
                </Box>
              )}
            </HStack>
          </HStack>
        </>
      ) : (
        <>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={IconButton}
              icon={<Image src={menu} alt="menu-logo" width={25} height={25} />}
              variant="unstyled"
            />
            <MenuList className={styles.menuList}>
              <MenuItem className={styles.menuItem}>
                <Link href={"/Login"}>
                  <HStack spacing={2}>
                    <Text>تسجيل دخول</Text>
                    <Image src={loginIcon2} alt="icon" width={20} height={20} />
                  </HStack>
                </Link>
              </MenuItem>
              <MenuItem className={styles.menuItem}>
                <Link href={"/SignUp"}>
                  <HStack spacing={2}>
                    <Text>إنشاء حساب</Text>
                    <Image
                      src={profileIcon2}
                      alt="icon"
                      width={20}
                      height={20}
                    />
                  </HStack>
                </Link>
              </MenuItem>
              <MenuItem className={styles.menuItem}>
                <Text>المسارات التعليمية</Text>
              </MenuItem>
              <MenuItem
                className={styles.menuItem}
                onClick={() => setShowSubMenu(!showSubMenu)}
              >
                <HStack spacing={2}>
                  <Text>المصادر</Text>
                  <Image src={icon} alt="icon" width={12} height={12} />
                </HStack>
              </MenuItem>

              {showSubMenu && (
                <Box className={styles.subMenu}>
                  <MenuItem className={styles.menuItem}>المدونة</MenuItem>
                  <MenuItem className={styles.menuItem}>المنتدى</MenuItem>
                  <MenuItem className={styles.menuItem}>قاموس الكلمات</MenuItem>
                  <MenuItem className={styles.menuItem}>
                    دروس فيديو قصيرة
                  </MenuItem>
                  <MenuItem className={styles.menuItem}>
                    <Link href="/AiTools">دليل أدوات الذكاء الاصطناعي</Link>
                  </MenuItem>
                  <MenuItem className={styles.menuItem}>
                    بنك الأسئلة التقنية
                  </MenuItem>
                  <MenuItem className={styles.menuItem}>
                    دروس وأنماط الميدجورني
                  </MenuItem>
                  <MenuItem className={styles.menuItem}>لغة ضاد</MenuItem>
                  <MenuItem className={styles.menuItem}>
                    <Link href="/Profile"> الحساب الشخصي</Link>
                  </MenuItem>
                </Box>
              )}
              <MenuItem className={styles.menuItem}>
                <Text>التواصل</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      )}
      <Box>
        <Link href={"/"}>
          <Image src={logo} alt="Navbar-logo" className={styles.logo} />
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
