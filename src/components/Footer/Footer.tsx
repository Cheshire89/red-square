import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import SocialLinks from "../SocialLinks/SocialLinks";
import RedSquareLogoSquare from "@assets/RedSquareLogo-square.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.scss';

export default function Footer() {
    const { address, hours, ...ui } = useSelector((state: RootState) => state.ui);

    return (
        <section className={styles.footerContainer}>
            <Container>
                <Row>
                    <Col md={4}>
                        <img className="img-fluid" src={RedSquareLogoSquare} alt={ui.name} />
                    </Col>
                    <Col md={4}>
                        <ul className="list-unstyled">
                            {address.map(line => <li key={line}>{line}</li>)}
                        </ul>
                        <SocialLinks />
                    </Col>
                    <Col md={4}>
                        <ul className="list-unstyled">
                            <li>Kitchen Hours</li>
                            <li>{hours.kitchen}</li>
                            <li>Bar Hours</li>
                            <li>{hours.bar}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};