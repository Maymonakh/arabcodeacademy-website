"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import CommunicationCard from "../../../components/ui/Card/CommunicationCard/CommunicationCard";
import MediaCard from "../../../components/ui/Card/MediaCard/MediaCard";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import Image from "next/image";
import icon1 from "@/public/icons/icon _Chalkboard Teacher_.png";
import styles from "./Footer.module.css";
import SpecialButoon from "./SpecialButoon/SpecialButoon";
import ArabCodeAcademyLogo from "../../../public/icons/Arab academy-03 1.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <section className={styles.informationAndPolicies}>
          <div>
            <h3>معلومات</h3>
            <ul>
              <li>المساعدة والدعم</li>
              <li>حول الأكاديمية</li>
              <li>رسالة الأكاديمية</li>
            </ul>
          </div>
          <div>
            <h3>السياسات</h3>
            <ul>
              <li>سياسة الاستخدام</li>
              <li>سياسة الخصوصية</li>
              <li>إخلاء مسؤولية</li>
            </ul>
          </div>
        </section>

        <div className={styles.buttonContainer}>
          <CustomButton
            text="المسارات التعليمية"
            icon={
              <Image src={icon1} alt="صورة ايقونة" width={30} height={24} />
            }
            buttonType="primary"
            color="green"
          />
        </div>
      </section>
      <Box className={styles.ContactSocialMediacontainer}>
        <MediaCard
          heading="مواقع التواصل الاجتماعي"
          text="انضم الآن إلى مجتمع المبرمجين في الأكاديمية
!وابدأ رحلتك نحو احتراف البرمجة"
        />
        <CommunicationCard
          heading="التواصل"
          location="المقر الرئيسي: بريطانيا، لندن"
          number="+447918713367"
          email="info@arabcodeacademy.com"
          button={<button>تواصل معنا</button>}
        />
      </Box>
      <section className={styles.resources}>
        <h3>المصادر</h3>
        <SpecialButoon />
      </section>
      <section className={styles.footerContent}>
        <p className={styles.copyrightText}>
          جميع الحقوق محفوظة &copy; 2023 الأكاديمية العربية للتقنية
        </p>
        <div className={styles.logoContainer}>
          <Image src={ArabCodeAcademyLogo} alt="Arab Code Academy Logo" />
        </div>
      </section>
    </footer>
  );
};
export default Footer;
