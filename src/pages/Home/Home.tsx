import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import InfusedVodkaImg from "@assets/infused_vodkas.jpg";
import RibsImg from "@assets/ribs.jpg";
import VodkaPourImg from "@assets/vodkapour.jpg";
import RestaurantImg from "@assets/restaurant.jpg";
import "./Home.scss";
import { ContentBlock } from "../../components/ContentBlock/ContentBlock";
import { useEffect } from "react";
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

export default function Home() {
  const content = useSelector(getContent);
  const contentStatus = useSelector(getContentStatus);
  const dispatch = useDispatch<any>();
  const openTableId = useSelector(getOpenTableId);

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

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={RibsImg} alt="Ribs" />
        </Carousel.Item>
        {process.env.REACT_APP_ID === "eilv81c1e648nhv" && (
          <>
            <Carousel.Item>
              <img src={InfusedVodkaImg} alt="Infused Vodka" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={RestaurantImg} alt="Restaurant Dining Area" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={VodkaPourImg} alt="Vodka Pour" />
            </Carousel.Item>
          </>
        )}
      </Carousel>
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
