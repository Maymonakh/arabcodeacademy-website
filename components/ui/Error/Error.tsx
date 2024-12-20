import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@chakra-ui/react";
import errorIcon from "@/public/icons/Error.png";

const Error: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "20px 0",
    direction: "rtl",
  };

  const textStyle: React.CSSProperties = {
    color: "var(--primary)",
    fontSize: "27px",
    fontWeight: 500,
    marginTop: "20px",
    fontFamily: "var(--font-tajawal)",
  };

  return (
    <div style={containerStyle}>
      <Image src={errorIcon} alt="Error Icon" width={200} height={200} />
      <p style={textStyle}>
        {isMobile
          ? "لا يوجد نتائج لعرضها"
          : "تعذر الاتصال مع خادم البيانات الرجاء المحاولة مرة أخرى"}
      </p>
    </div>
  );
};

export default Error;
