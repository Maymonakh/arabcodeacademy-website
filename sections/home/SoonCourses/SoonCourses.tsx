import React from "react";
import ProductsCard from "@/components/ui/card/ProductsCard";

const courses = [
  {
    title: "اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (4).png",
    isComingSoon: true,
  },
  {
    title: "اسم الكورس",
    price: 30,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (11).png",
    isComingSoon: true,
  },
  {
    title: "اسم الكورس",
    price: 45,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (10).png",
    isComingSoon: true,
  },
  {
    title: "اسم الكورس",
    price: 50,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (8).png",
    isComingSoon: true,
  },
];

const SoonCourses = () => {
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

export default SoonCourses;


