import { WineItem } from "@models/MenuItem.model";
import styles from "./MenuItems.module.scss";

export default function WineMenuItem({ item }: { item: WineItem }) {
  const { name, country, price_glass, price_bottle } = item;
  return (
    <li className={styles.wineItem}>
      <p>
        <span>
          <span>{name}</span>
          <i>{country}</i>
        </span>
        <span
          className="d-flex"
          style={{
            borderBottom: "1px solid #fff",
            marginBottom: "-1px",
          }}
        >
          {price_glass > 0 && (
            <span className={price_bottle > 0 && "me-2"}>
              <span>${price_glass}</span>
              <i className="fa-solid fa-wine-glass"></i>
            </span>
          )}
          {price_bottle > 0 && (
            <span>
              <span>${price_bottle}</span>
              <i className="fa-solid fa-wine-bottle"></i>
            </span>
          )}
        </span>
      </p>
    </li>
  );
}
