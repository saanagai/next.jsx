import React from "react";
import styles from "./card.module.css";

export const Card = (props) => {
  return (
    <div className={styles.cardcontainer}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img src={props.imgUrl} width={300} height={400} alt="" />
    </div>
  );
};
