"use client";
import "../styles/variables.css";
import ProgrammingTests from "../sections/home/ProgrammingTests/ProgrammingTests";
import EduPath from "../sections/home/EduPath/EduPath";
import InteractiveTools from "@/sections/home/InteractiveTools/InteractiveTools";
import Courses from "@/sections/home/Courses/Courses";
import CardSection from "../sections/home/CardSection/CardSection";
import LearningCenter from "@/sections/home/LearningCenter/LearningCenter";
import Sliderpage from "@/sections/home/Slider/Slider";
import Dad from "@/sections/home/DadSection/Dad";
import Rating from "@/components/ui/Rating/Rating";

export default function Home() {
  return (
    <>
      <Sliderpage />
      <LearningCenter />
      <Dad />
      <Courses />
      <ProgrammingTests />
      <EduPath />
      <InteractiveTools />
      <CardSection />
      <Rating />
    </>
  );
}
