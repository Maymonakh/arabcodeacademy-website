import React from "react";

const Loading: React.FC = () => {
  const loadingStyle: React.CSSProperties = {
    textAlign: "center",
    color: "var(--primary)",
    fontSize: "20px",
    fontWeight: 700,
    margin: "20px 0",
    direction: "rtl",
  };

  return <p style={loadingStyle}>يتم التحميل...</p>;
};

export default Loading;
