"use client";
import "../styles/variables.css";
import ProgrammingTests from "../sections/home/ProgrammingTests/ProgrammingTests";
import EduPath from "../sections/home/EduPath/EduPath";
import InteractiveTools from "@/sections/home/InteractiveTools/InteractiveTools";
import Courses from "@/sections/home/Courses/Courses";
import CardSection from "../sections/home/ReviewsCard(simple)/ReviewsCard(simple)";
import LearningCenter from "@/sections/home/LearningCenter/LearningCenter";
import HomeSlider from "../sections/home/Slider/Home";
import Dad from "@/sections/home/DadSection/Dad";
import EditProfile from "@/sections/home/EditProfile/EditProfile";
import EditProfile2 from "@/sections/EditProfile2/EditProfile2";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <LearningCenter />
      <Dad />
      {/* <EditProfile/> */}
      <EditProfile2/>

      <Courses />
      <ProgrammingTests />
      <EduPath />
      <InteractiveTools />
      <CardSection />
{/*      
      <Link href={"/Editprofile"}>
        <button>انتقل إلى صفحة التعديل</button>
      </Link> */}
    </>
  );
}
