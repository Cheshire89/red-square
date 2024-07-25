import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function AddressText() {
    const ui = useSelector((state: RootState) => state.ui);

    return (
        <p>
            {ui.address.map(line => <span key={line}>{line}</span>)}
            Phone: <a href={'tel:' + ui.phone}>{ui.phone}</a> |
            Email: <a href={'mailto:' + ui.email}>{ui.email}</a>
        </p>
    )
};