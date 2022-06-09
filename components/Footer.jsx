import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            PRAESENT SUSCIPIT NULLA FERMENTUM DUI SAGITTIS MALESUADA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>

          <p className={styles.text}>
            Prem Jyoti Tower, B 939/A, Gole Market, Mahanagar,
            <br /> Lucknow, Uttar Pradesh 226006,
            <br /> 1800 202 2022
          </p>

          <p className={styles.text}>
            Gomti Nagar Rd, Vibhuti Khand, Gomti Nagar,
            <br /> Lucknow, Uttar Pradesh 226010,
            <br /> 1800 202 2022
          </p>

          <p className={styles.text}>
            SN 416, 4th Flr, Saharaganj Mall, Shahnajaf Rd,
            <br /> Lucknow, Uttar Pradesh 226001,
            <br /> 1800 202 2022
          </p>

          <p className={styles.text}>
            Jankipuram, Engineering College Rd, Sector A, Aliganj,
            <br /> Lucknow, Uttar Pradesh 226021,
            <br /> 1800 202 2022
          </p>

          <p className={styles.text}>
            91, Mahatma Gandhi Marg, opposite Governer House, Raj Bhavan Colony,
            Hazratganj,
            <br /> Lucknow, Uttar Pradesh 226008,
            <br /> 1800 202 2022
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br />
            10:00 - 21:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br />
            12:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  );
}
