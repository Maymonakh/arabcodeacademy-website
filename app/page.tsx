import AdPanel from "./components/AdsPanel";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <AdPanel
        startDate="2024-10-20T00:00:00Z"
        endDate="2024-10-31T23:59:59Z"
        adText="خصومات بنسبة 20% على الكورسات"
      />
    </ChakraProvider>
  );
}
