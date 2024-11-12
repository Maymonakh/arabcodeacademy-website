import React from "react";
import ProductsCard from "@/components/ui/card/ProductsCard";

const courses = [
  {
    title: "اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (4).png",
    isComingSoon: false,
  },
  {
    title: "اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (6).png",
    isComingSoon: false,
  },
  {
    title: "اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (7).png",
    isComingSoon: false,
  },
  {
    title: "اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: false,
  },
];

const TrainingCourses = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {courses.map((course, index) => (
        <ProductsCard
          key={index} 
          title={course.title}
          price={course.price}
          Coachname={course.Coachname}
          description={course.description}
          imageSrc={course.imageSrc}
          isComingSoon={course.isComingSoon}
        />
      ))}
    </div>
  );
};

export default TrainingCourses;
