import { Container, Row, Col } from "react-bootstrap";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import PhoneNum from "../components/PhoneNum/PhoneNum";

export default function AboutFood() {
  return (
    <>
      <ContentBlock background="grey">
        <Container>
          <Row>
            <Col md={6} className="page-text">
              <h3>Our Food</h3>
              <p>
                Our menu changes seasonally, aligning with local and fresh
                ingredients whenever possible. The food evokes the nostalgic
                comfort and familiarity of old world European flavors with an
                updated twist that is playful and refined.
              </p>
              <p>
                Chef Max Ionikh chooses every ingredient, carefully building
                each dish around just a few key ingredients that come together
                to build an exquisite flavor profile.
              </p>
              <p>
                Our kitchen makes everything from basic and raw. Every element
                of your meal, from the sauces all the way through to the
                desserts, are made from scratch daily.
              </p>
              <p>
                Our chef can modify for almost any dietary restriction; please
                call ahead at <PhoneNum />.
              </p>
            </Col>
            <Col md={6}>
              <img className="img-fluid" src="" alt="Dummy" />
            </Col>
          </Row>
        </Container>
      </ContentBlock>
    </>
  );
}
