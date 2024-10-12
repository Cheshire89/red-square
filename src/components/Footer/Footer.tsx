import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import SocialLinks from "../SocialLinks/SocialLinks";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";
import { getAddress } from "@profileStore/profile.slice";
import { getFooterLogo } from "../../store/theme/theme.slice";

export default function Footer() {
  const address = useSelector(getAddress);
  const { hours, appName } = useSelector((state: RootState) => state.profile);
  const footerLogo = useSelector(getFooterLogo);

  return (
    <section className={styles.footerContainer}>
      <Container>
        <Row>
          <Col md={4}>
            <img src={footerLogo} alt={appName} />
          </Col>

          {address && (
            <Col md={4}>
              <ul className="list-unstyled">
                {address.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <SocialLinks alt />
            </Col>
          )}

          {hours && (
            <Col md={4}>
              <ul className="list-unstyled">
                {hours?.kitchen && (
                  <>
                    <li>Kitchen Hours</li>
                    <li>{hours.kitchen}</li>
                  </>
                )}
                {hours?.bar && (
                  <>
                    <li>Bar Hours</li>
                    <li>{hours.bar}</li>
                  </>
                )}
              </ul>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}
