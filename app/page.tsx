"use client";
import "../styles/variables.css";
import ProgrammingTests from "../sections/home/ProgrammingTests/ProgrammingTests";
import EduPath from "../sections/home/EduPath/EduPath";
import InteractiveTools from "@/sections/home/InteractiveTools/InteractiveTools";
import Courses from "@/sections/home/Courses/Courses";
import LearningCenter from "@/sections/home/LearningCenter/LearningCenter";
import HomeSlider from "../sections/home/Slider/Home";
import Dad from "@/sections/home/DadSection/Dad";
import ReviewsCard from "../sections/home/ReviewsCard/ReviewsCard";


export default function Home() {
  return (
    <>
      <HomeSlider />
      <LearningCenter />
      <Dad />
      <Courses />
      <ProgrammingTests />
      <EduPath />
      <InteractiveTools />
      <ReviewsCard />
    </>
  );
}
