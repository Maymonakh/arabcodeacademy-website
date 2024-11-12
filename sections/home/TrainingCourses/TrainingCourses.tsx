import React from "react";
import ProductsCard from "@/components/ui/card/ProductsCard";

const TrainingCourses = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <ProductsCard
        title="اسم الكورس"
        price={24}
        Coachname="اسم المدرب"
        description="فيديو 52 , ساعة 24, دقيقة 45"
        imageSrc="/images/Mask group (4).png"
        isComingSoon={false}
      />
      <ProductsCard
        title="اسم الكورس"
        price={24}
        Coachname="اسم المدرب"
        description="فيديو 52 , ساعة 24, دقيقة 45"
        imageSrc="/images/Mask group (6).png" 
        isComingSoon={false}
      />
      <ProductsCard
        title="اسم الكورس"
        price={24}
        Coachname="اسم المدرب"
        description="فيديو 52 , ساعة 24, دقيقة 45"
        imageSrc="/images/Mask group (7).png"
        isComingSoon={false}
      />
      <ProductsCard
        title="اسم الكورس"
        price={24}
        Coachname="اسم المدرب"
         description="فيديو 52 , ساعة 24, دقيقة 45"
        imageSrc="/images/Mask group (5).png"
        isComingSoon={false}
      />
    </div>
  );
};

export default TrainingCourses;
