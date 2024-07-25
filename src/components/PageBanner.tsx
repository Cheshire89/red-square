import { Container, Row, Col } from 'react-bootstrap';
export default function PageBanner({ title }: { title: string }) {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <span className="overlay"></span>
                    <h1 className="text-uppercase header text-center">{title}</h1>
                </Col>
            </Row>
        </Container>
    )
};