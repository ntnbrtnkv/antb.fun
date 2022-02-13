import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Cat from "../../../public/cat.webp";

export default function Error404() {
  return (
    <div className={styles.container}>
      <Image
        src={Cat}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
      />
      <div className={styles.banner}>
        <h1 className={styles.header}>404</h1>
        <p className={styles.text}>This is not the page you are looking for</p>
      </div>
    </div>
  );
}
