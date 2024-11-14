import React from "react";
import SoonCourses from "./SoonCourses/SoonCourses";
import TrainingCourses from "./TrainingCourses/TrainingCourses";
import styles from "./Courses.module.css";
import SearchBar from "./Components/SearchBar";
import { Box } from "@chakra-ui/react";
import Title from "./Components/Title";

const Courses: React.FC = () => {
  return (
    <section className={styles.section}>
      <Box className={styles.box1}>
        <SearchBar placeholder="مقدمة لمحرك الألعاب اليونيتي ....." />
        <Title text="الدورات التدريبية" />
      </Box>
      <TrainingCourses />
      <Box className={styles.box2}>
        <Title text="قريباً" />
      </Box>
      <SoonCourses />
    </section>
  );
};

export default Courses;
