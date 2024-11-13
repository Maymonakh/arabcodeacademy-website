import React from "react";
import CustomSwiper from "../../../../components/ui/CustomSwiper/CustomSwiper";
import ProductsCard from "@/components/ui/card/ProductsCard";

interface Course {
  title: string;
  price: number;
  Coachname: string;
  description: string;
  imageSrc: string;
  isComingSoon: boolean;
}

const courses: Course[] = [
  {
    title: "1اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (4).png",
    isComingSoon: false,
  },
  {
    title: "2اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (4).png",
    isComingSoon: false,
  },
  {
    title: "3اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (6).png",
    isComingSoon: false,
  },
  {
    title: "4اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (7).png",
    isComingSoon: false,
  },
  {
    title: "5اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: false,
  },
  {
    title: "6اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: false,
  },
  {
    title: "7اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: false,
  },
  {
    title: "8اسم الكورس",
    price: 24,
    Coachname: "اسم المدرب",
    description: "فيديو 52 , ساعة 24, دقيقة 45",
    imageSrc: "/images/Mask group (5).png",
    isComingSoon: false,
  },
];

const TrainingCourses: React.FC = () => {
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

export default TrainingCourses;
