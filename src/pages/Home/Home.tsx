import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import InfusedVodkaImg from "@assets/infused_vodkas.jpg";
import RibsImg from "@assets/ribs.jpg";
import VodkaPourImg from "@assets/vodkapour.jpg";
import RestaurantImg from "@assets/restaurant.jpg";
import "./Home.scss";
import { ContentBlock } from "../../components/ContentBlock/ContentBlock";
import { useEffect } from "react";

const widgetUrl = (
  theme: "wide" | "standard" = "wide",
  rid = "3851"
): string => {
  return `//www.opentable.com/widget/reservation/loader?rid=${rid}&domain=com&type=standard&theme=${theme}&lang=en-US&overlay=false&iframe=true`;
};

let widgetContainerDesktop: HTMLElement | null = null;
let widgetContainerMobile: HTMLElement | null = null;

export default function Home() {
  useEffect(() => {
    if (window && document) {
      widgetContainerDesktop = document.getElementById("otWidgetDesktop");
      widgetContainerMobile = document.getElementById("otWidgetMobile");
      widgetContainerDesktop?.appendChild(createScript(widgetUrl("wide")));
      widgetContainerMobile?.appendChild(createScript(widgetUrl("standard")));
    }
  }, []);

  const createScript = (src: string): HTMLScriptElement => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    return script;
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={RibsImg} alt="Ribs" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={InfusedVodkaImg} alt="Infused Vodka" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={RestaurantImg} alt="Restaurant Dining Area" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={VodkaPourImg} alt="Vodka Pour" />
        </Carousel.Item>
      </Carousel>
      <ContentBlock background="grey">
        <Container>
          <Row>
            <Col md={6}>
              <img
                className="img-fluid d-sm-none d-md-block"
                src="/pickle_shot.jpg"
                alt="Pickle shot"
              />
            </Col>
            <Col md={6}>
              <h3 className="header text-uppercase">Euro Bistro + Vodka Bar</h3>
              <p>
                Our chefs create seasonally inspired menus with both classic and
                contemporary European food, blending hearty with whimsical. Come
                enjoy our beautiful courtyard patio, or our warm and inviting
                modern dining room. We offer an extensive wine list, and over
                one hundred different vodkas, including in-house infusions.
                Whether it is a casual cocktail, or a special celebration, small
                group or a party of one hundred, Red Square is a place to love
                and keeps you coming back again and again.
              </p>
            </Col>
          </Row>
        </Container>
      </ContentBlock>
      <ContentBlock>
        <Container>
          <Row>
            <Col
              xs={12}
              className="d-flex justify-content-center align-items-center"
            >
              <div id="otWidgetDesktop"></div>
              <div id="otWidgetMobile"></div>
            </Col>
          </Row>
        </Container>
      </ContentBlock>
    </>
  );
}
