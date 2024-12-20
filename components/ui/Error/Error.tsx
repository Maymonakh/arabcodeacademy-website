import React from "react";

const Error: React.FC = () => {
  const errorStyle: React.CSSProperties = {
    textAlign: "center",
    color: "var(--primary)",
    fontSize: "20px",
    fontWeight: 700,
    margin: "20px 0",
    direction: "rtl",
  };

  return <p style={errorStyle}>حدث خطأ بالاتصال</p>;
};

export default Error;
