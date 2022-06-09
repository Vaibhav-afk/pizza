import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

export default function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>INTERDUM TINCIDUNT</h1>
      <span className={styles.price}>₹ 679.0</span>
      <p className={styles.desc}>
        Vivamus pulvinar malesuada dolor. Donec convallis mauris augue. Cras
        quis commodo dui, sit amet tincidunt dolor.
      </p>
    </div>
  );
}
