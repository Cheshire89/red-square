import { Container, Row, Col } from "react-bootstrap";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";

export default function AboutBar() {
  return (
    <>
      <ContentBlock background="grey">
        <Container>
          <Row>
            <Col md={6} className="page-text">
              <h3>Our Bar</h3>
              <p>
                Our full bar offers over 100 local and international vodkas, and
                we feature a variety of seasonally changing House infused
                vodkas. A joyful international feel spreads across the long
                wooden bar most evenings, as conversations can be overheard in
                many languages. A great place for carafes of vodka and engaging
                conversation. A delicious bar menu served during dining room
                hours provides delicious snacks to enjoy with your drinks. The
                bar’s patio with two fireplaces is a beautiful place to relax
                with friends.
              </p>
              <p>
                Most experts agree that each vodka brand and type has a certain
                texture and level of smoothness, and encourage those sipping
                this clear elixir to focus on several senses, including sight,
                smell, and taste. Red Square is a great place to try many brands
                and flavors. Our European-rooted bartenders can mix you up any
                drink of your choosing from our well-stocked bar. Don’t miss our
                extensive wine list!
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
