import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

export default function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA EVER</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ornare imperdiet nisl, at iaculis quam tempor vel. Pellentesque
        sollicitudin nulla ipsum, sit amet molestie diam ultrices quis. Morbi
        pulvinar tellus vel tortor dapibus, vitae mollis nisi luctus. Quisque
        quis pretium enim. Maecenas et tortor nec arcu egestas euismod. Aenean
        nec elementum mauris. Cras rhoncus elementum velit id egestas.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}
