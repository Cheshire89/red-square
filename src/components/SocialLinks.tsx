import { useSelector } from "react-redux";
import { RootState } from "../store/store";


export default function SocialLinks() {
    const name = useSelector((state: RootState) => state.ui.name);
    const social = useSelector((state: RootState) => state.ui.social);

    return (
        <ul>
            {Object.keys(social).map((key) => (
                <li>
                    <a href={social[key]} title={`${name} ${key} link`}>Link</a>
                </li>
            ))}
        </ul>
    )
};