import { Container, Grid } from "@mui/material";

const events = [
    'Birthday Parties',
    'Engagements',
    'Anniversaries',
    'Corporate Meetings',
    'Holiday Parties',
    'Retirement Parties',
    'Graduation Celebrations',
    'Seminars',
    'Luncheons'
];

export default function CallOut() {
    return (
        <Container>
            <Grid container={true} spacing={2}>
                <Grid item xs={6} sm={6} md={3}>
                    <img src="" alt="" />
                </Grid>
            </Grid>
            <p>
                {events.map(e => <span key={e}>Image</span>)}
            </p>
        </Container>
    )
};