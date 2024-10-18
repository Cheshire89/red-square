import { VodkaItem } from "@models/MenuItem.model";
import styles from "./MenuItems.module.scss";

export default function VodkaMenuItem({ item }: { item: VodkaItem }) {
  const { name, price_shot, price_carafe } = item;
  return (
    <li className={styles.vodkaItem}>
      <p>
        <span>{name}</span>
        <span>
          <span className="me-2">
            <span>${price_shot}</span>
            <i className="fa-solid fa-whiskey-glass"></i>
          </span>
          <span>
            <span>${price_carafe}</span>
            <i className="fa-solid fa-bottle-droplet"></i>
          </span>
        </span>
      </p>
    </li>
  );
}
