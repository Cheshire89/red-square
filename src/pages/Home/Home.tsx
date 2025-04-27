import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";

import InfusedVodkaImg from "@assets/infused_vodkas.jpg";
import RibsImg from "@assets/ribs.jpg";
import VodkaPourImg from "@assets/vodkapour.jpg";
import RestaurantImg from "@assets/restaurant.jpg";

import "./Home.scss";
import { ContentBlock } from "../../components/ContentBlock/ContentBlock";
import { useEffect, useMemo } from "react";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getOpenTableId } from "@profileStore/profile.slice";

import {
  getContent,
  getContentStatus,
  getPageContent,
  setContent,
} from "@contentStore/content.slice";

import ReactHtmlParser from "react-html-parser";

const widgetUrl = (
  theme: "wide" | "standard" = "wide",
  rid: string
): string => {
  return `//www.opentable.com/widget/reservation/loader?rid=${rid}&domain=com&type=standard&theme=${theme}&lang=en-US&overlay=false&iframe=true`;
};

let widgetContainer: HTMLElement | null = null;

const isWhitsEnd = process.env.REACT_APP_ID === "06yv1kzt9c7qcpp";
const images = [
  { src: RibsImg, alt: "Ribs" },
  { src: InfusedVodkaImg, alt: "Infused Vodka" },
  { src: RestaurantImg, alt: "Restaurant Dining Area" },
  { src: VodkaPourImg, alt: "Vodka Pour" },
];

export default function Home() {
  const dispatch = useDispatch<any>();
  const content = useSelector(useMemo(() => getContent, []));
  const contentStatus = useSelector(useMemo(() => getContentStatus, []));
  const openTableId = useSelector(useMemo(() => getOpenTableId, []));

  const appendWidget = debounce(() => {
    let winWidth = window.innerWidth;
    let script;
    let url;

    if (widgetContainer !== null) {
      clearWidget();
      url =
        winWidth <= 850
          ? widgetUrl("standard", openTableId)
          : widgetUrl("wide", openTableId);
      script = createScript(url);
      widgetContainer.append(script);
    }
  }, 1000);

  useEffect(() => {
    dispatch(setContent("home"));
  }, [dispatch]);

  useEffect(() => {
    if (contentStatus === "idle") {
      dispatch(getPageContent("home"));
    }
  }, [dispatch, contentStatus]);

  useEffect(() => {
    if (openTableId) {
      if (window && document) {
        widgetContainer = document.getElementById("otWidget");
        appendWidget();
      }
      window.addEventListener("resize", appendWidget);
    }
    return () => {
      window.removeEventListener("resize", appendWidget);
    };
  }, [appendWidget, openTableId]);

  function createScript(src: string): HTMLScriptElement {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    return script;
  }

  function clearWidget() {
    if (widgetContainer !== null && widgetContainer.children.length) {
      widgetContainer.innerHTML = "";
    }
  }

  function displayCarousel() {
    const imagesToShow = isWhitsEnd ? images.slice(0, 1) : images;
    return (
      <Carousel
        className="home-carousel"
        controls={!isWhitsEnd}
        indicators={!isWhitsEnd}
      >
        {imagesToShow.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  return (
    <>
      {displayCarousel()}

      {content && (
        <>
          <ContentBlock background="grey">
            <Container>{ReactHtmlParser(content)}</Container>
          </ContentBlock>
        </>
      )}
      <ContentBlock height="auto">
        <Container>
          <Row>
            <Col
              xs={12}
              id="otWidget"
              className="d-flex justify-content-center align-items-center"
            ></Col>
          </Row>
        </Container>
      </ContentBlock>
    </>
  );
}
