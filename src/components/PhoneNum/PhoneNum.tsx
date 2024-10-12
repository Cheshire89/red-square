import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getFormattedNumber } from "@profileStore/profile.slice";
import styles from "./PhoneNum.module.scss";

export default function PhoneNum() {
  const profile = useSelector((state: RootState) => state.profile);
  const phoneFormatted: string = useSelector(getFormattedNumber);
  return (
    <a className={styles.phoneNum} href={"tel:" + profile.phone}>
      {phoneFormatted}
    </a>
  );
}
