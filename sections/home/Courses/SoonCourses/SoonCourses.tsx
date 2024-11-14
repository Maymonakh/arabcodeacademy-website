import React from "react";
import ProductsCard from "@/components/ui/card/ProductsCard";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";

const courses = [
  {
    title: "1اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (4).png",
    isComingSoon: true,
  },
  {
    title: "2اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (4).png",
    isComingSoon: true,
  },
  {
    title: "3اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (6).png",
    isComingSoon: true,
  },
  {
    title: "4اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (7).png",
    isComingSoon: true,
  },
  {
    title: "5اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: true,
  },
  {
    title: "6اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: true,
  },
  {
    title: "7اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: true,
  },
  {
    title: "8اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: true,
  },
];

const SoonCourses = () => {
  return (
    <CustomSwiper
      data={courses}
      renderItem={(course) => (
        <ProductsCard
          title={course.title}
          price={course.price}
          Coachname={course.Coachname}
          description={course.description}
          imageSrc={course.imageSrc}
          isComingSoon={course.isComingSoon}
        />
      )}
    />
  );
};

export default SoonCourses;
