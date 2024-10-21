import { Container, Row, Col } from "react-bootstrap";
import AddressText from "../components/AddressText/AddressText";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOpenTableId } from "@profileStore/profile.slice";
import {
  getContent,
  getContentStatus,
  getPageContent,
  setContent,
} from "@contentStore/content.slice";
import ReactHtmlParser from "react-html-parser";

export default function Reservations() {
  const dispatch = useDispatch<any>();

  const content = useSelector(getContent);
  const contentStatus = useSelector(getContentStatus);

  useEffect(() => {
    dispatch(setContent("reservations"));
  }, [dispatch]);

  useEffect(() => {
    if (contentStatus === "idle") {
      dispatch(getPageContent("reservations"));
    }
  }, [dispatch, contentStatus]);

  const openTableId = useSelector(getOpenTableId);
  useEffect(() => {
    if (window && document && openTableId) {
      const container = document.getElementById("otWidget");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.opentable.com/widget/reservation/loader?rid=${openTableId}&domain=com&type=standard&theme=standard&lang=en-US&overlay=false&iframe=true`;

      if (container) {
        container.appendChild(script);
      }
    }
  }, [openTableId]);
  return (
    <ContentBlock background="grey">
      <Container>
        <Row>
          <Col
            md={6}
            id="otWidget"
            className="d-flex justify-content-center align-items-center"
          ></Col>
          <Col md={6} className="page-text">
            {ReactHtmlParser(content)}
            <AddressText />
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </ContentBlock>
  );
}
