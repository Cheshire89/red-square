import { Container, Row, Col } from "react-bootstrap";
import styles from "./PageBanner.module.scss";

export default function PageBanner({ title }: { title: string }) {
  console.log("styles", styles);
  return (
    <Container fluid className={styles.pageBanner}>
      <Row>
        <Col>
          <span className="overlay"></span>
          <h1 className="text-uppercase header text-center text-bold">
            {title}
          </h1>
        </Col>
      </Row>
    </Container>
  );
}
