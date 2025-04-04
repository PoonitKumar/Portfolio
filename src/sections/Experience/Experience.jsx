import React from "react";
import styles from "./ExperienceStyles.module.css";
import "../../../src/App.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h1>Experience</h1>
      <div className={styles.experienceContainer}>
        <div className={styles.job}>
          <h3>MakkPress Technologies, Delhi - Web Designer</h3>
          <span>OCT. 2024 - FEB. 2025</span>
          <ul>
            <li>
              Configured and launched 3+ Shopify and BigCommerce stores,
              including theme selection and customization to align with brand
              identity.
            </li>
            <li>
              Designed and implemented 5+ custom sections using Liquid (Shopify)
              and Stencil (BigCommerce), improving functionality and user
              experience by 20%.
            </li>
            <li>
              Ensured all stores were mobile-responsive across platforms,
              resulting in a 20% increase in mobile user engagement.
            </li>
            <li>
              Analyzed store performance metrics and implemented optimizations,
              leading to a 30% increase in page load speed and a 15% boost in
              conversion rates.
            </li>
            <li>
              Managed 50+ product listings across both Shopify and BigCommerce
              platforms, optimizing descriptions, images, and SEO metadata,
              resulting in a 15% increase in organic traffic.
            </li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3>Milleniance Softnet, Noida - Software Developer</h3>
          <span>MAR. 2024 - SEP. 2024</span>

          <h4>Lead Management System</h4>
          <ul>
            <li>
              Designed UI for Lead Management System, increasing user engagement
              by 30%.
            </li>
            <li>
              Integrated 5+ APIs for login and authorization, reducing login
              times by 40%.
            </li>
            <li>
              Managed sessions with cookies, achieving 99.9% data accuracy and
              security.
            </li>
          </ul>

          <h4>Client Project: MFIN INDIA</h4>
          <ul>
            <li>
              Optimized website with dynamic maps, boosting user engagement by
              50%.
            </li>
            <li>
              Enabled multi-layered state-to-city navigation, cutting navigation
              time by 25%.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
