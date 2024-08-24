import { MenuItem } from "@models/MenuItem.model";
import styles from "./MenuItems.module.scss";

export default function FoodMenuItem({ item }: { item: MenuItem }) {
  const { itemTitle, itemDesc, itemPrice }: MenuItem = item;
  return (
    <li className={styles.foodItem}>
      <strong>{itemTitle}</strong>
      <p>
        <span>{itemDesc}</span>
        <span>${itemPrice}</span>
      </p>
    </li>
  );
}
