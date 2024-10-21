import { Container, Row, Col } from "react-bootstrap";
import AddressText from "../components/AddressText/AddressText";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import CallOut from "../components/CallOut/CallOut";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import { useDispatch, useSelector } from "react-redux";
import {
  getContent,
  getContentStatus,
  getPageContent,
  setContent,
} from "@contentStore/content.slice";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

export default function PrivateParties() {
  const dispatch = useDispatch<any>();

  const content = useSelector(getContent);
  const contentStatus = useSelector(getContentStatus);

  useEffect(() => {
    dispatch(setContent("private-parties"));
  }, [dispatch]);

  useEffect(() => {
    if (contentStatus === "idle") {
      dispatch(getPageContent("private-parties"));
    }
  }, [dispatch, contentStatus]);
  return (
    <>
      <ContentBlock background="grey">
        <Container>
          <Row>
            <Col md={6}>
              <img
                className="img-fluid"
                src="/privatedining-1.jpg"
                alt="Dining"
              />
            </Col>
            <Col md={6} className="page-text">
              {ReactHtmlParser(content)}
              <AddressText />
              <SocialLinks />
            </Col>
          </Row>
        </Container>
      </ContentBlock>
      <ContentBlock center>
        <CallOut />
      </ContentBlock>
    </>
  );
}
