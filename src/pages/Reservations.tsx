import { Container, Row, Col } from "react-bootstrap";
import AddressText from "../components/AddressText/AddressText";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getOpenTableId } from "@profileStore/profile.slice";

export default function Reservations() {
  const openTableId = useSelector(getOpenTableId);
  useEffect(() => {
    if (window && document && openTableId) {
      const container = document.getElementById("otWidget");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.opentable.com/widget/reservation/loader?rid=${openTableId}&domain=com&type=standard&theme=standard&lang=en-US&overlay=false&iframe=true`;

      if (container) {
        container.appendChild(script);
      }
    }
  }, [openTableId]);
  return (
    <ContentBlock background="grey">
      <Container>
        <Row>
          <Col
            md={6}
            id="otWidget"
            className="d-flex justify-content-center align-items-center"
          ></Col>
          <Col md={6} className="page-text">
            <h3>Join Us</h3>
            <h1>We Encourage Reservations</h1>
            <p>
              Whether you are celebrating a special occasion or just a night out
              on the town, please join us in our dining room. If you have any
              dietary restrictions or allergies please call 303.595.8600 in
              advance. Our chef can accommodate almost anything with advance
              notification. We also offer a semi-private dining room and many
              other options for larger groups, corporate events and lunches.
              Please visit our private dining page for more information.
            </p>
            <AddressText />
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </ContentBlock>
  );
}
