import { Container } from "@mui/material";
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
                    <ul>
                        {address.map(line => <li key={line}>{line}</li>)}
                    </ul>
                    <SocialLinks />
                </Grid>
                <Grid item md={4}>
                    <ul>
                        <li>Kitchen Hours</li>
                        <li>{hours.kitchen}</li>
                        <li>Bar Hours</li>
                        <li>{hours.bar}</li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    )
};