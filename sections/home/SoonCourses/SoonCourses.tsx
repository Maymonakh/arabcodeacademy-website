import React from "react";
import ProductsCard from "@/components/ui/card/ProductsCard";

const SoonCourses = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <ProductsCard
        title="اسم الكورس"
        price={24}
        Coachname="اسم المدرب"
        description="فيديو 52 , ساعة 24, دقيقة 45"
        imageSrc="/images/Mask group (11).png"
        isComingSoon={true}
      />
      <ProductsCard
        title="اسم الكورس"
        price={24}
        Coachname="اسم المدرب"
        description="فيديو 52 , ساعة 24, دقيقة 45"
        imageSrc="/images/Mask group (10).png" 
        isComingSoon={true}
      />
      <ProductsCard
        title="اسم الكورس"
        price={24}
        Coachname="اسم المدرب"
        description="فيديو 52 , ساعة 24, دقيقة 45"
        imageSrc="/images/Mask group (9).png"
        isComingSoon={true}
      />
      <ProductsCard
        title="اسم الكورس"
        price={24}
        Coachname="اسم المدرب"
        description="فيديو 52 , ساعة 24, دقيقة 45"
        imageSrc="/images/Mask group (8).png"
        isComingSoon={true}
      />
    </div>
  );
};

export default SoonCourses;
