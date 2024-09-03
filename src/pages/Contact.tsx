import { Container, Row, Col } from "react-bootstrap";
import AddressText from "../components/AddressText/AddressText";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import PageBanner from "../components/PageBanner/PageBanner";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" background="contact.jpg" />
      <ContentBlock>
        <Container>
          <Row>
            <Col md={9}>
              <img className="img-fluid" src="" alt="Map" />
            </Col>
            <Col md={3}>
              <p>
                Located in the heart of downtown Denver, steps away from the
                Performing Arts Complex, Red Square Euro Bistro is an oasis in
                the city. A place where locals and savvy travelers alike can
                meet, enjoy one of our 100 frozen vodkas, and pair drinks with
                European inspired food..
              </p>
              <AddressText />
              <h3 className="header-spaced text-uppercase">Find us on</h3>
              <SocialLinks />
            </Col>
          </Row>
        </Container>
      </ContentBlock>
    </>
  );
}
