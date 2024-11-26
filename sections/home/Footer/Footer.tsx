import React from "react";
import style from "./Footer.module.css";
import { ReactElement } from "react";
import icon1 from "@/public/icons/Vector.svg";
import { Heading } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import CommunicationCard from "./../../../components/ui/CommunicationCard/CommunicationCard";
import MediaCard from "./../../../components/ui/MediaCard/MediaCard";

const Footer = () => {
  return (
    <Box className={style.container}>
      <MediaCard
        heading="مواقع التواصل الاجتماعي"
        text="انضم الآن إلى مجتمع المبرمجين في الأكاديمية
                          وابدأ رحلتك نحو احتراف البرمجة! "
        width={420}
        height={46}
      />
      <CommunicationCard
        heading="التواصل"
        location="المقر الرئيسي: بريطانيا، لندن"
        number="+447918713367"
        email="info@arabcodeacademy.com"
        button={<button>اتصل بنا</button>} // يمكن استبداله بـ CustomButton إذا أردت
      />
    </Box>
  );
};
export default Footer;
