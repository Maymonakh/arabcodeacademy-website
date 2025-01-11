import React from "react";
import Image from "next/image";
import styles from "./InteractiveTools.module.css";
import PromoText from "@/components/ui/PromoText/PromoText";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import icon from "@/public/icons/Vector.png";
import { Box } from "@chakra-ui/react";

const InteractiveTools = () => {
  return (
    <section className={styles.section}>
      <Box className={styles.promoBox}>
        <PromoText
          title="أدوات تفاعلية والعاب تعليمية"
          paragraph="تتميز الأكاديمية العربية للبرمجة بتطوير أدوات تفاعلية وألعاب تعليمية مبتكرة باستخدام أساليب الـتلعيب Gamification، مما يجعل عملية التعلم أكثر متعة وجاذبية. نقدم حلولًا مخصصة تلبي احتياجات المؤسسات والشركات، حيث نساعد في تصميم تجارب تعليمية تفاعلية تعزز من تفاعل المستخدمين وتحفزهم على التعلم بطرق غير تقليدية. سواء كنت تبحث عن تطوير مهارات فريق العمل أو تقديم تجربة تعليمية فريدة لعملائك، الأكاديمية العربية للبرمجة هي شريكك المثالي لتحقيق هذه الأهداف بنجاح."
          button={
            <CustomButton
              text="تواصل معنا"
              buttonType="secondaryOne"
              color="green"
              icon={<Image src={icon} alt="icon" width={20} height={20} />}
              onClick={() => console.log("Button Clicked!")}
            />
          }
          opacity={0.83}
        />
      </Box>
    </section>
  );
};

export default InteractiveTools;
