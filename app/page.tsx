import AdsPanel from "../sections/home/AdsPanel/AdsPanel";
 import { ChakraProvider } from "@chakra-ui/react";
import "../styles/variables.css";
import ProgrammingTests from "../sections/home/ProgrammingTests/ProgrammingTests";
import EduPath from '../sections/home/EduPath/EduPath';
import PromoText from '../components/ui/PromoText/PromoText';
export default function Home() {
  return (
    <ChakraProvider>
      {/* <AdsPanel
        startDate="2024-10-20T00:00:00Z"
        endDate="2024-11-31T23:59:59Z"
        adText="خصومات بنسبة 20% على الكورسات"
      />
      <ProgrammingTests /> */}
      {/* <ProgrammingTests/> */}
     <EduPath/>
     
    </ChakraProvider>
  );
}
