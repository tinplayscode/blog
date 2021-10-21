import React from "react";
import styles from "./Card.module.scss";

interface Props {
  name: String;
}

export const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_title}>
        <h3 className={styles.card_title__name}>{props.name}</h3>
      </div>
      <div className={styles.card_description}>
        <p>Là tình ca, con tim anh trao trọn.</p>
      </div>
    </div>
  );
};
