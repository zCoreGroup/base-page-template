// components/Header.tsx
import React from 'react';
import styles from './header.module.css';
import { HeaderData } from './types';

const Header: React.FC<{ data: HeaderData }> = ({ data }) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logoSection}>
          <img src={data.logoSrc} alt={data.logoAlt} className={styles.logo} />
        </div>
        <div className={styles.titleSection}>
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.mission}>
          <h2>Our Mission</h2>
          <p>{data.missionText}</p>
        </div>
        <div className={styles.vision}>
          <h2>Our Vision</h2>
          <p>{data.visionText}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
