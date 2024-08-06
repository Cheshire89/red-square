import { Container, Row, Col } from "react-bootstrap";

export default function AboutUs() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className="header text-uppercase">BISTRO + VODKA BAR</h1>
                        <p>
                            Known for the largest selection of vodkas in Denver, Red Square
                            couples a fun and social bar scene with a European-inspired dining
                            experience that blends new and old flavors in a vibrant and romantic
                            atmosphere. Red Square European Bistro opened in 2003 in the vibrant
                            open-air, mixed-use shopping destination, Writer Square. Writer Square
                            is just off 16th Street Mall and is in close proximity to Larimer Square
                            and the Theater District, making it a perfect destination for a night out.
                            Irina, Max and the entire staff are always happy to see you and treat
                            you as a part of the family.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid" src="" alt="Dummy" />
                    </Col>

                </Row>
            </Container>
        </>
    )
}