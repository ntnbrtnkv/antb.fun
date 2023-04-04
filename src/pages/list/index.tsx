import React from "react";
import styles from "./styles.module.css";
import links from "links.json";

export default function List() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>All links</h2>
      <table className={styles.items}>
        {links.map(({ short, full }) => (
          <tr className={styles.item} key={short}>
            <td>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(`${location.origin}/${short}`)
                }
                className={styles.button}
                title="Copy link"
              >
                📋
              </button>
              <a href={short} className={styles.link}>
                /{short}
              </a>
            </td>
            <td>
              <a href={full} className={styles.link}>
                {full}
              </a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
