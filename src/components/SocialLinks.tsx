import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SocialIcon } from 'react-social-icons'
import { List, ListItem } from "@mui/material";


export default function SocialLinks() {
    const name = useSelector((state: RootState) => state.ui.name);
    const social = useSelector((state: RootState) => state.ui.social);

    return (
        <List>
            {Object.keys(social).map((key) => (
                <ListItem key={key}>
                    <SocialIcon url={social[key]} title={`${name} ${key}`}></SocialIcon>
                </ListItem>
            ))}
        </List>
    )
};