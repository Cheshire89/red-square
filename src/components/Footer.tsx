import { Container, List, ListItem } from "@mui/material";
import { Grid } from '@mui/material';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import SocialLinks from "./SocialLinks";

export default function Footer() {
    const address = useSelector((state: RootState) => state.ui.address);
    const hours = useSelector((state: RootState) => state.ui.hours);

    return (
        <Container>
            <Grid container columnSpacing={2}>
                <Grid item md={4}>Logo</Grid>
                <Grid item md={4}>
                    <List>
                        {address.map(line => <ListItem key={line}>{line}</ListItem>)}
                    </List>
                    <SocialLinks />
                </Grid>
                <Grid item md={4}>
                    <List>
                        <ListItem>Kitchen Hours</ListItem>
                        <ListItem>{hours.kitchen}</ListItem>
                        <ListItem>Bar Hours</ListItem>
                        <ListItem>{hours.bar}</ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
};