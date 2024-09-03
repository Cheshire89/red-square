import { Container, Grid } from "@mui/material";
import flowerImg from "@assets/flowers-1.jpg";
import vodkaImg from "@assets/vodka.jpg";
import lemonTartImg from "@assets/lemontart.jpg";
import patioImg from "@assets/patio.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./CallOut.module.scss";

const events = [
  "Birthday Parties",
  "Engagements",
  "Anniversaries",
  "Corporate Meetings",
  "Holiday Parties",
  "Retirement Parties",
  "Graduation Celebrations",
  "Seminars",
  "Luncheons",
];

export default function CallOut() {
  const { name } = useSelector((state: RootState) => state.ui);
  return (
    <Container>
      <Grid container={true} spacing={2}>
        <Grid item xs={6} sm={6} md={3}>
          <img src={flowerImg} alt="Flower" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <img src={vodkaImg} alt="Vodka" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <img src={lemonTartImg} alt="Lemon Tart" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <img src={patioImg} alt={`${name} patio`} />
        </Grid>
      </Grid>
      <p className={styles.calloutText}>
        {events.map((event, index) => (
          <span key={event + index}>{event}</span>
        ))}
      </p>
    </Container>
  );
}
