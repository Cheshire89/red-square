import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import InfusedVodkaImg from '@assets/infused_vodkas.jpg';
import RibsImg from '@assets/ribs.jpg';
import VodkaPourImg from '@assets/vodkapour.jpg';
import RestaurantImg from '@assets/restaurant.jpg';
import styles from './Home.module.scss';

export default function Home() {
    return (
        <>
            <Carousel className={styles.carouselContainer}>
                <Carousel.Item className={styles.carouselItem}>
                    <img src={RibsImg} alt="Ribs" />
                </Carousel.Item>
                <Carousel.Item className={styles.carouselItem}>
                    <img src={InfusedVodkaImg} alt="Infused Vodka" />
                </Carousel.Item>
                <Carousel.Item className={styles.carouselItem}>
                    <img src={RestaurantImg} alt="Restaurant Dining Area" />
                </Carousel.Item>
                <Carousel.Item className={styles.carouselItem}>
                    <img src={VodkaPourImg} alt="Vodka Pour" />
                </Carousel.Item>
            </Carousel>

            <Container>
                <Row>
                    <Col md={6}>
                        <img className="img-fluid" src="" alt="Dummy" />
                    </Col>
                    <Col md={6}>
                        <h3 className="header text-uppercase">Euro Bistro + Vodka Bar</h3>
                        <p>
                            Our chefs create seasonally inspired menus with both classic and contemporary
                            European food, blending hearty with whimsical. Come enjoy our beautiful
                            courtyard patio, or our warm and inviting modern dining room. We offer
                            an extensive wine list, and over one hundred different vodkas, including
                            in-house infusions. Whether it is a casual cocktail, or a special
                            celebration, small group or a party of one hundred, Red Square is a place
                            to love and keeps you coming back again and again.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}