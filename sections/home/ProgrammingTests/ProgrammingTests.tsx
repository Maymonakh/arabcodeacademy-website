import React from "react";
import Image from "next/image";
import TextBlock from "./Components/TextBlock";
import styles from "./ProgrammingTests.module.css";
import img1 from "@/public/images/photo_2024-08-31_00-07-01 1.png";
import img2 from "@/public/images/photo_2024-08-31_00-10-19 1.png";

const ProgrammingTests = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <TextBlock
          title="اختر قدراتك"
          description="تمكنك الأكاديمية العربية للبرمجة من اختبار مهاراتك البرمجية عبر الإنترنت بسهولة ومرونة، من خلال خدمة الامتحان البرمجي الإلكتروني"
          iconSrc="/images/Mask group.png"
        />

        <TextBlock
          title="قم بالاختبار"
          description="يمكنك اختيار اللغة البرمجية التي تود اختبار معرفتك بها، سواء كانت Python، Java، JavaScript أو أي لغة أخرى من اللغات المتاحة"
          iconSrc="/images/Mask group (1).png"
        />

        <TextBlock
          title="اعرف ترتيبك"
          description="تتيح لك لوحة الشرف معرفة ترتيبك بين الطلاب الذين اجتازوا الامتحان، مما يمنحك فرصة مميزة للتميز والإشادة بإنجازاتك أمام المجتمع الأكاديمي وزملائك"
          iconSrc="/images/Mask group (2).png"
        />
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={img1}
          alt="مجموعة من الطلاب"
          className={styles.firstImage}
        />
        <Image
          src={img2}
          alt="طالبان يعملان على حاسوب"
          className={styles.secondImage}
        />
      </div>
    </section>
  );
};

export default ProgrammingTests;
