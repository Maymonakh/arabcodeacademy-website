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
import AiTools from "@/components/ui/AiTools/AiTools";

export default function Home() {
  return (
    <ChakraProvider>
      <AdsPanel
        startDate="2024-10-20T00:00:00Z"
        endDate="2025-01-01T23:59:59Z"
        adText="خصومات بنسبة 20% على الكورسات"
      />
      <Navbar />
      <Sliderpage />
      <LearningCenter />
      <Dad />
      <Courses />
      <ProgrammingTests />
      <EduPath />
      <InteractiveTools />
      <CardSection />
     
      
    
      <AiTools/>
      {/* <Footer /> */}
     
    </ChakraProvider>
    
  );
}
