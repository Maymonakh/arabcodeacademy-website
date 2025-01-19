import React from "react";
import Image from "next/image";
import styles from "./Dad.module.css";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import moreIcon from "../../../public/icons/icon _google docs_.png";

const Dad = () => {
  return (
    <div className={styles.heroCarousel}>
      <div className={styles.videoWrapper}>
        <video
          muted
          loop
          autoPlay
          className={`${styles.videoBackground} ${styles.desktopVideo}`}
        >
          <source src="/video/aca-video-desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          muted
          loop
          autoPlay
          className={`${styles.videoBackground} ${styles.mobileVideo}`}
        >
          <source src="/video/aca-video-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/dad.png"
            alt="Image 1 Description"
            width={400}
            height={209.05}
          />
          <p>لغة ضاد</p>
        </div>

        <div className={styles.textContent}>
          <p className={styles.descriptionText}>
            في الأكاديمية العربية للبرمجة، نسعى دائمًا إلى تقديم محتوى تعليمي
            يساهم في تمكين وتطوير مهارات المبرمجين الناطقين باللغة العربية. ومن
            هذا المنطلق، يهدف هذا القسم إلى تبسيط المفاهيم البرمجية لأي شخص،
            سواء كان مبتدئًا أو محترفًا، من فهمها واستيعابها بسهولة. نحرص على أن
            تكون الشروحات دقيقة وشاملة، مع توفير أمثلة عملية تساعد المتعلمين على
            تطبيق ما يتعلمونه بشكل فعّال.
          </p>

          <div className={styles.buttonContainer}>
            <CustomButton
              text="لغة الضاد"
              icon={
                <Image
                  src={moreIcon}
                  alt="More Options"
                  width={16}
                  height={16}
                />
              }
              buttonType="secondaryOne"
              color="orange"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dad;
