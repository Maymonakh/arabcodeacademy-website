"use client";
import { ChakraProvider } from "@chakra-ui/react";

import AdsPanel from "../sections/home/AdsPanel/AdsPanel";
import "../styles/variables.css";
import ProgrammingTests from "../sections/home/ProgrammingTests/ProgrammingTests";
import EduPath from "../sections/home/EduPath/EduPath";
import InteractiveTools from "@/sections/home/InteractiveTools/InteractiveTools";
import Courses from "@/sections/home/Courses/Courses";
import CardSection from "../sections/home/CardSection/CardSection";
import LearningCenter from "@/sections/home/LearningCenter/LearningCenter";

import Footer from "./../sections/home/Footer/Footer";
import Navbar from "@/components/ui/Navbar/Navbar";
import Sliderpage from "@/sections/home/Slider/Slider";
import Dad from "@/sections/home/DadSection/Dad";

export default function Home() {
  return (
    <ChakraProvider>
      <AdsPanel
        startDate="2024-10-20T00:00:00Z"
        endDate="2024-11-31T23:59:59Z"
        adText="خصومات بنسبة 20% على الكورسات"
      />
      <Navbar />
      <Sliderpage />
      <Dad />
      <ProgrammingTests />
      <EduPath />
      <Courses />
      <InteractiveTools />
      <LearningCenter />
      <CardSection />
      <Footer />
    </ChakraProvider>
  );
}
