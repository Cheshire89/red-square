import { MenuItem } from "@models/MenuItem.model";
import styles from "./MenuItems.module.scss";

export default function FoodMenuItem({ item }: { item: MenuItem }) {
  const { name, desc, price }: MenuItem = item;
  return (
    <li className={styles.foodItem}>
      <strong>{name}</strong>
      <p>
        <span>{desc}</span>
        <span>${price}</span>
      </p>
    </li>
  );
}
