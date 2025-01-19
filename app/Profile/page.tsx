"use client";
import React from "react";
import {
  Box,
  Flex,
  Icon,
  Link,
  Divider,
  Button,
} from "@chakra-ui/react";
import InfoItem from "@/components/ui/InfoItem/InfoItem";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import profileImage from "@/public/images/user-circle.svg";
import profileIcon from "@/public/icons/profile.png";
import locationIcon from "@/public/icons/location.svg";
import linksIcon from "@/public/icons/link.svg";
import style from './Profile.module.css';
import check from "@/public/icons/check-circle.svg";
import Courses from "@/public/icons/courseIcon.svg";
import edit from "@/public/icons/edit.svg";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const ProfileCard = () => {
  return (
    <Flex justify="center" align="center" minHeight="100vh" dir="rtl">
      <Box
        className={style.container}
        width="1072px"
        height="510px"
        borderWidth="2px"
        borderColor="purple.500"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg="white"
        p={6}
        textAlign="center"
        fontFamily="var(--font-tajawal)"
        fontWeight="500"
        fontSize="18px"
        lineHeight="21.6px"
        color="#783BA2"
      >
        <Flex justify="center" align="center" width="100%">
          {/* Profile Image */}
          <Box width="300px" ml="30px" textAlign="center" dir="ltr" className={style.profile_image}>
            <Image src={profileImage} alt="Profile Image" width={200} height={200} style={{ borderRadius: "50%" }} />
          </Box>

          {/* Profile Information */}
          <Box textAlign="left" flex="1" pl={6}>
            <div className={style.name}>Mahmudmu99</div>
            <InfoItem
              image={<Image src={profileIcon} alt="Profile Icon" width={18} height={18} />}
              text="Mahmoud Mustafa"
              textColor="#783BA2"
            />
            <InfoItem
              image={<Image src={locationIcon} alt="Location Icon" width={18} height={18} />}
              text="مصر"
              textColor="#783BA2"
            />
            <InfoItem
              image={<Image src={linksIcon} alt="Links Icon" width={18} height={18} />}
              text=": الروابط"
              textColor="#783BA2"
            />

            {/* Social Links */}
            <Flex direction="column" gap={4}>
              <Flex align="center" justify="start" gap={2}>
                <Icon as={FaFacebook} w={6} h={6} color="#783BA2" />
                <Link href="https://facebook.com/MahmoudAwadkkk" isExternal fontWeight="bold" color="#783BA2">
                  MahmoudAwad
                </Link>
              </Flex>

              <Flex align="center" justify="start" gap={2}>
                <Icon as={FaLinkedin} w={6} h={6} color="#783BA2" />
                <Link href="https://linkedin.com/in/MahmoudAwad" isExternal fontWeight="bold" color="#783BA2">
                  https://linkedin.com/in/MahmoudAwad
                </Link>
              </Flex>

              <Flex align="center" justify="start" gap={2}>
                <Icon as={FaGithub} w={6} h={6} color="#783BA2" />
                <Link href="https://github.com/MahmoudAwadaaaaaaa" isExternal fontWeight="bold" color="#783BA2">
                  MahmoudAwad
                </Link>
              </Flex>
            </Flex>

            {/* Edit Button */}
            <Flex justify="start" align="center" gap={2} mt={4} dir="ltr">
              <CustomButton
                text="تعديل"
                icon={<Image src={edit} alt="Edit Icon" width={25} height={20} />}
                buttonType="secondaryTwo"
                color="green"
                onClick={() => console.log("Edit clicked")}
              />
            </Flex>
          </Box>
        </Flex>

        <Divider my={5} />

        {/* Competitions Section */}
        <Flex justifyContent="space-between" align="stretch" height="80px" mt="-20px">
          <Box flex="1" textAlign="center" pr="0">
            <Button
              width="100%"
              height="107px"
              fontSize="2xl"
              fontWeight="bold"
              color="#783BA2"
              bg="transparent"
              _hover={{ bg: "#783BA2", color: "white" }}
              borderRadius="0"
              onClick={() => console.log("مساقات clicked")}
            >
              <Image src={Courses} alt="Courses Icon" width={25} height={25} style={{ marginBottom: '30px', marginLeft: '10px' }} />
              المساقات <br /> 12
            </Button>
          </Box>

          <Box flex="1" textAlign="center" pl="0">
            <Button
              width="100%"
              height="107px"
              fontSize="2xl"
              fontWeight="bold"
              color="#783BA2"
              bg="transparent"
              _hover={{ bg: "#783BA2", color: "white" }}
              borderRadius="0"
              onClick={() => console.log("مكتملة clicked")}
            >
              <Image src={check} alt="Check Icon" width={25} height={25} style={{ marginBottom: '30px', marginLeft: '10px' }} />
              مكتملة <br /> 2
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProfileCard;
