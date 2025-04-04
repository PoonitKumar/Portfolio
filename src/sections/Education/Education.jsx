// Education.js
import React from "react";
import styles from "./EducationStyles.module.css"; // Import the CSS Module

const Education = () => {
  return (
    <section id="education" className={styles.container}>
      <h1>Education</h1>
      <div className={styles.educationItem}>
        <h3 className={styles.educationItemHeading}>
          Bachelor of Technology in Information Technology
        </h3>
        <p className={styles.educationItemPara}>
          <strong>University:</strong> Guru Gobind Singh Indraprastha University
        </p>
      </div>
      <div className={styles.educationItem}>
        <h3 className={styles.educationItemHeading}>
          12th – Central Board of Secondary Education
        </h3>
        <p className={styles.educationItemPara}>
          <strong>School:</strong> Sainik School Kunjpura, Karnal
        </p>
      </div>
    </section>
  );
};

export default Education;
