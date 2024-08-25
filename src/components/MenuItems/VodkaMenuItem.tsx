import { VodkaItem } from "@models/MenuItem.model";
import styles from "./MenuItems.module.scss";

export default function VodkaMenuItem({ item }: { item: VodkaItem }) {
  const { vodkaTitle, priceShot, priceCarafe } = item;
  return (
    <li className={styles.vodkaItem}>
      <p>
        <span>{vodkaTitle}</span>
        <div className={styles.vodkaItemPrice}>
          <span>Shot: ${priceShot}</span>
          <span>Carafe: ${priceCarafe}</span>
        </div>
      </p>
    </li>
  );
}
