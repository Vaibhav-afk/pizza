import Image from "next/image";
import styles from "../styles/Cart.module.css";
import Link from "next/link";

export default function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>

              <td>
                <span className={styles.name}>ADIPISCING</span>
              </td>

              <td>
                <span className={styles.extras}>
                  Double ingredients, spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>₹679.00</span>
              </td>

              <td>
                <span className={styles.quantity}>1</span>
              </td>

              <td>
                <span className={styles.total}>₹679.00</span>
              </td>
            </tr>

            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>

              <td>
                <span className={styles.name}>Donec</span>
              </td>

              <td>
                <span className={styles.extras}>garlic sauce, spicy sauce</span>
              </td>
              <td>
                <span className={styles.price}>₹479.00</span>
              </td>

              <td>
                <span className={styles.quantity}>1</span>
              </td>

              <td>
                <span className={styles.total}>₹479.00</span>
              </td>
            </tr>
          </>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>₹679.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>₹479.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>₹0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>₹1158.00
          </div>
          <Link href="/orders/123">
            <button className={styles.button}>CHECKOUT NOW!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
