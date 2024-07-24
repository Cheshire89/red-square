import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SocialIcon } from 'react-social-icons'
import { Link, List, ListItem } from "@mui/material";


export default function SocialLinks() {
    const name = useSelector((state: RootState) => state.ui.name);
    const social = useSelector((state: RootState) => state.ui.social);

    return (
        <List>
            {Object.keys(social).map((key) => (
                <ListItem>
                    <Link href={social[key]} title={`${name} ${key}`}>
                        <SocialIcon url={social[key]}></SocialIcon>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
};