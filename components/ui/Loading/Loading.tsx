import React from "react";

const Loading: React.FC = () => {
  const loadingStyle: React.CSSProperties = {
    textAlign: "center",
    color: "var(--primary)",
    fontSize: "27px",
    fontWeight: 500,
    fontFamily: "var(--font-tajawal)",
    margin: "20px 0",
    direction: "rtl",
  };

  return <p style={loadingStyle}>يتم التحميل...</p>;
};

export default Loading;
