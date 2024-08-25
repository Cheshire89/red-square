import { WineItem } from "@models/MenuItem.model";
import styles from "./MenuItems.module.scss";

export default function WineMenuItem({ item }: { item: WineItem }) {
  const { wineTitle, wineCountry, winePrice } = item;
  return (
    <li className={styles.wineItem}>
      <p>
        <div>
          <span>{wineTitle}</span>
          <i>{wineCountry}</i>
        </div>
        <span>${winePrice}</span>
      </p>
    </li>
  );
}
