import styles from "./SpecialButoon.module.css";

const SpecialButoon: React.FC = () => {
  const buttonContents = [
    "دروس فيديو قصيرة",
    "قاموس الكلمات",
    "المنتدى",
    "المدونة",
    "لغة ضاد",
    "دروس وأنماط الميدجورني",
    "بنك الأسئلة التقنية",
    "دليل أدوات الذكاء الصناعي",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.buttonContainer}>
        {buttonContents.map((text, index) => (
          <button key={index} className={styles.button}>
            {text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SpecialButoon;
