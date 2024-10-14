import { WineItem } from "@models/MenuItem.model";
import styles from "./MenuItems.module.scss";

export default function WineMenuItem({ item }: { item: WineItem }) {
  const { name, country, price_glass } = item;
  return (
    <li className={styles.wineItem}>
      <p>
        <div>
          <span>{name}</span>
          <i>{country}</i>
        </div>
        <div>
          <span>${price_glass}</span>
          <i className="fa-solid fa-wine-glass"></i>
        </div>
      </p>
    </li>
  );
}
