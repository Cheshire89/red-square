import { Container, Row, Col } from "react-bootstrap";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  getContent,
  getContentStatus,
  getPageContent,
  setContent,
} from "@contentStore/content.slice";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { getProfileName } from "@profileStore/profile.slice";

export default function AboutUs() {
  const appName = useSelector(getProfileName);
  const dispatch = useDispatch<any>();

  const content = useSelector(getContent);
  const contentStatus = useSelector(getContentStatus);

  useEffect(() => {
    dispatch(setContent("about"));
  }, [dispatch]);

  useEffect(() => {
    if (contentStatus === "idle") {
      dispatch(getPageContent("about"));
    }
  }, [dispatch, contentStatus]);
  return (
    <>
      <ContentBlock>
        <Container>
          <Row>
            <Col md={6} className="page-text">
              {ReactHtmlParser(content)}
            </Col>
            <Col md={6} className="d-none d-md-flex justify-content-end">
              <div className="placeholde-it" data-text={`${appName}`}></div>
            </Col>
          </Row>
        </Container>
      </ContentBlock>
    </>
  );
}
