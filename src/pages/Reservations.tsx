import { Container, Row, Col } from "react-bootstrap";
import AddressText from "../components/AddressText";
import SocialLinks from "../components/SocialLinks";

export default function Reservations() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img className="img-fluid" src="" alt="Dummy" />
                </Col>
                <Col md={6}>
                    <h3 className="header text-uppercase">Join Us</h3>
                    <h1 className="header text-uppercase">We Encourage Reservations</h1>
                    <p>
                        Whether you are celebrating a special occasion or just a night out
                        on the town, please join us in our dining room. If you have any
                        dietary restrictions or allergies please call 303.595.8600 in
                        advance. Our chef can accommodate almost anything with advance
                        notification. We also offer a semi-private dining room and many
                        other options for larger groups, corporate events and lunches. Please
                        visit our private dining page for more information.
                    </p>
                    <AddressText />
                    <SocialLinks />
                </Col>
            </Row>
        </Container>
    )
}