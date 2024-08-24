import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getAddress, getFormattedNumber } from "@uiStore/ui.slice";
import styles from "./Address.module.scss";

export default function AddressText() {
  const ui = useSelector((state: RootState) => state.ui);
  const address: string[] = useSelector(getAddress);
  const phoneFormatted: string = useSelector(getFormattedNumber);

  const isLast = (index: number): boolean => address.length - 1 === index;

  return (
    <p className={styles.addressText}>
      {address.map((line, index) => (
        <span key={line}>{line + (isLast(index) ? "" : " | ")}</span>
      ))}{" "}
      | Phone: <a href={"tel:" + ui.phone}>{phoneFormatted}</a> | Email:
      <a href={"mailto:" + ui.email}>{ui.email}</a>
    </p>
  );
}
