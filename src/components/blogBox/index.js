import React from "react";
import styles from "./styles.module.css";

const ImageWithTitleAndSubtitle = ({
  backgroundColor,
  image,
  title,
  subtitle,
  time,
  // onClick
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} style={{ backgroundColor }}>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  );
};

export default ImageWithTitleAndSubtitle;
