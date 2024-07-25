import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SocialIcon } from 'react-social-icons'
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";


export default function SocialLinks() {
    const name = useSelector((state: RootState) => state.ui.name);
    const social = useSelector((state: RootState) => state.ui.social);

    const iconClass = (key: string) => key !== 'opentable' ? 'fa-brands fa-' + key : 'fa-solid fa-circle-dot'

    return (
        <ul className="list-inline">
            {Object.keys(social).map((key) => (
                <li className="list-inline-item" key={key}>
                    <Link to={social[key]} title={`${name} ${key}`}>
                        <i className={iconClass(key)}></i>
                    </Link>
                </li>
            ))}
        </ul>
    )
};