"use client";
import Image from "next/image";
import {
  Heading,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState<string>("/images/user-circle.svg");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); 
      setProfileImage(imageURL);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="50px"
      dir="rtl"
    >
      {/* Heading */}
      <Heading
        size="lg"
        fontSize="27px"
        color="#783BA2"
        fontWeight="700"
        fontFamily="var(--font-tajawal)"
        mb="30px"
        textAlign="center"
      >
        تعديل الملف الشخصي
      </Heading>

      <Flex justify="center" align="center" width="100%" maxWidth="1000px">
        {/* Image on the right */}
        <Box width="300px" ml="30px" textAlign="center">
          <Image
            src={profileImage}
            alt="Profile Image"
            width={200}
            height={200}
           
          />
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            display="none"
            id="upload-image"
          />
          <FormLabel
            htmlFor="upload-image"
            cursor="pointer"
            mt="20px"
            color="#783BA2"
            fontWeight="700"
            fontSize="20px"
            fontFamily="var(--font-tajawal)"
          >
            تغيير صورة الملف الشخصي
          </FormLabel>
          <Heading
            size="md"
            fontSize="20px"
            color="#783BA2"
            width="220px"
            height="22px"
            fontWeight="700"
            fontFamily="var(--font-tajawal)"
            textAlign="center"
          >
            تغيير كلمة السر 
          </Heading>
        </Box>

        {/* Form on the left */}
        <Stack spacing={6} width="100%" maxWidth="500px">
          <Flex gap={4}>
            {/* First Name */}
            <FormControl isRequired width="280px">
              <FormLabel
                fontSize="lg"
                textAlign="right"
                fontWeight="500"
                color="#783BA2"
                requiredIndicator={<></>}
              >
                الاسم الأول:
              </FormLabel>
              <Input
                textAlign="right"
                dir="rtl"
                height={55}
                placeholder="الاسم الأول"
                borderColor="#783BA2"
                color="#783BA2"
              />
            </FormControl>

            {/* Last Name */}
            <FormControl isRequired width="280px">
              <FormLabel
                fontSize="lg"
                textAlign="right"
                fontWeight="500"
                color="#783BA2"
                requiredIndicator={<></>}
              >
                الاسم الأخير:
              </FormLabel>
              <Input
                textAlign="right"
                dir="rtl"
                height={55}
                placeholder="الاسم الأخير"
                borderColor="#783BA2"
                color="#783BA2"
              />
            </FormControl>
          </Flex>

          {/* Country */}
          <FormControl>
            <FormLabel
              fontSize="lg"
              textAlign="right"
              fontWeight="500"
              color="#783BA2"
              requiredIndicator={<></>}
            >
              البلد:
            </FormLabel>
            <Select
              textAlign="right"
              dir="rtl"
              height={55}
              borderColor="#783BA2"
              color="#783BA2"
            >
              <option dir="rtl">فلسطين</option>
              <option dir="rtl">الأردن</option>
              <option dir="rtl">مصر</option>
              <option>الإمارات العربية المتحدة</option>
            </Select>
          </FormControl>

          {/* Email */}
          <FormControl isRequired>
            <FormLabel
              fontSize="lg"
              textAlign="right"
              fontWeight="500"
              color="#783BA2"
              requiredIndicator={<></>}
            >
              البريد الإلكتروني:
            </FormLabel>
            <Input
              textAlign="right"
              height={55}
              dir="rtl"
              placeholder="البريد الإلكتروني"
              borderColor="#783BA2"
              color="#783BA2"
            />
          </FormControl>
        </Stack>
        
      </Flex>
    </Box>
  );
};

export default EditProfile;
