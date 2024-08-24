import { Container, Row, Col } from "react-bootstrap";
import AddressText from "../components/AddressText/AddressText";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import CallOut from "../components/CallOut/CallOut";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";

export default function PrivateParties() {
  return (
    <>
      <ContentBlock background="grey">
        <Container>
          <Row>
            <Col md={6}>
              <img
                className="img-fluid"
                src="/privatedining-1.jpg"
                alt="Dining"
              />
            </Col>
            <Col md={6} className="page-text">
              <h3>BOOK WITH US</h3>
              <h1>Custom Private Parties</h1>
              <p>
                Our elegant semi-private dining room can accommodate 12-50
                people for any special occasion. Our executive chef and private
                dining team will work with you to capture all the details of
                your custom event. We will help you with selecting the ideal
                menu, drink pairings and even floral arrangements, all designed
                to fit your budget, and create a memorable experience for you
                and your guests. In addition to our semi-private dining room, we
                offer full buyouts accommodating more than 80 people. We also
                offer lunch accommodations. Book us for your next
                corporate/private lunch (available for parties of 15 or more).
                The possibilities are endless! Talk with our private dining team
                and we will make your dreams a reality.
              </p>
              <AddressText />
              <SocialLinks />
            </Col>
          </Row>
        </Container>
      </ContentBlock>
      <ContentBlock>
        <CallOut />
      </ContentBlock>
    </>
  );
}
