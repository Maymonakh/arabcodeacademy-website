"use client";
import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import Image from "next/image";
import PromoText from "@/components/ui/PromoText/PromoText";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import img1 from "@/public/images/photo_2024-08-31_00-11-45 2.svg";
import style from "./EduPath.module.css";
import icon1 from "@/public/icons/🦆 icon _Chalkboard Teacher_.png";

const EduPath = () => {
  return (
    <section className={style.section}>
      <div className={style.TextContainer}>
        <PromoText
          title="التجربة التعليمية في الأكاديمية العربية للبرمجة"
          paragraph="الأكاديمية العربية للبرمجة تقدم تجربة تعليمية مميزة وفريدة تركز على إنتاج فيديوهات تعليمية بعناصر تفاعلية وشاملة تناسب جميع الفئات العمرية والمستويات. نسعى لتمكين كل فرد من تعلم البرمجة بطريقة مبسطة وممتعة، مع مراعاة احتياجات المتعلمين وتقديم محتوى يلهمهم للتفوق والإبداع. سواء كنت مبتدئًا أو محترفًا، ستجد لدينا ما يلهمك ويطور مهاراتك في عالم البرمجة، مع دعم مستمر وموارد غنية تواكب أحدث التقنيات والأساليب التعليمية."
          width="550px"
          padding="50px"
          titleMarginBottom="50px"
          paragraphMarginBottom="20px"
        />
        <div className={style.ButtonContainer}>
          <CustomButton
            text="المسارات التعليمية"
            icon={
              <Image src={icon1} alt="صورة ايقونة" width={30} height={30} />
            }
            buttonType="primary"
            color="green"
          />
        </div>
      </div>

      <div className={style.Img}>
        <Image
          src={img1}
          alt="صورة لفتاة تعمل على جهاز الحاسوب "
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default EduPath;
