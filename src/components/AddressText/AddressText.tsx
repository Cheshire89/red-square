import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getAddress } from "@profileStore/profile.slice";
import styles from "./Address.module.scss";
import PhoneNum from "../PhoneNum/PhoneNum";

export default function AddressText() {
  const profile = useSelector((state: RootState) => state.profile);
  const address: string[] = useSelector(getAddress);

  const isLast = (index: number): boolean => address.length - 1 === index;

  return (
    <p className={styles.addressText}>
      {address.map((line, index) => (
        <span key={line}>{line + (isLast(index) ? "" : " | ")}</span>
      ))}{" "}
      | Phone: <PhoneNum /> | Email:
      <a href={"mailto:" + profile.email}>{profile.email}</a>
    </p>
  );
}
