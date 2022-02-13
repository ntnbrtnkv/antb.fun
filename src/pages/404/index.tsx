import React from "react";
import styles from "./styles.module.css";

export default function Error404() {
  return (
    <div className={styles.container}>
      <img className={styles.img} />
      <div className={styles.banner}>
        <h1 className={styles.header}>404</h1>
        <p className={styles.text}>This is not the page you are looking for</p>
      </div>
    </div>
  );
}
