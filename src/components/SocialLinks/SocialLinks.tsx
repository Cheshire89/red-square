import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import styles from './SocialLinks.module.scss';


export default function SocialLinks(props: any) {
    const name = useSelector((state: RootState) => state.ui.name);
    const social = useSelector((state: RootState) => state.ui.social);

    const containerClass = `list-inline ${styles.socialLinks} ${props.alt && styles['socialLinks--alt']}`
    const iconClass = (key: string) => key !== 'opentable' ? 'fa-brands fa-' + key : 'fa-solid fa-circle-dot'

    return (
        <ul className={`${containerClass}`}>
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