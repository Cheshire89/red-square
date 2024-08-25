import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getFormattedNumber } from "@uiStore/ui.slice";
import styles from "./PhoneNum.module.scss";

export default function PhoneNum() {
  const ui = useSelector((state: RootState) => state.ui);
  const phoneFormatted: string = useSelector(getFormattedNumber);
  return (
    <a className={styles.phoneNum} href={"tel:" + ui.phone}>
      {phoneFormatted}
    </a>
  );
}
