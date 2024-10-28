import { Container, Row, Col } from "react-bootstrap";
import AddressText from "../components/AddressText/AddressText";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import PageBanner from "../components/PageBanner/PageBanner";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoordinates } from "@profileStore/profile.slice";
import {
  getContent,
  getContentStatus,
  getPageContent,
  setContent,
} from "@contentStore/content.slice";
import { useLocation } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { getPrimary } from "../store/theme/theme.slice";

const containerStyle = {
  width: "100%",
  height: "400px",
};

export default function Contact() {
  const primary = useSelector(getPrimary);

  const options = {
    minZoom: 17,
    streetViewControl: false,
    mapTypeControl: false,
    styles: [
      { stylers: [{ hue: primary }] },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ lightness: 100 }, { visibility: "simplified" }],
      },
      {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  const location = useLocation();
  const page = location.pathname.replace("/", "");
  const dispatch = useDispatch<any>();

  const contentStatus = useSelector(getContentStatus);
  const content = useSelector(getContent);

  const center = useSelector(getCoordinates);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });

  const [zoom, setZoom] = useState(17);

  useEffect(() => {
    dispatch(setContent(page));
    setTimeout(() => {
      setZoom(17);
    }, 300);
  }, [dispatch]);

  useEffect(() => {
    if (contentStatus === "idle") {
      dispatch(getPageContent(page));
    }
  }, [dispatch, contentStatus]);

  return (
    <>
      <PageBanner title="Contact Us" background="contact.jpg" />
      <ContentBlock>
        <Container>
          <Row>
            <Col md={9}>
              {isLoaded && (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={zoom}
                  options={options}
                >
                  <Marker position={center} />
                </GoogleMap>
              )}
            </Col>
            <Col md={3}>
              {ReactHtmlParser(content)}
              <AddressText />
              <h3 className="header-spaced text-uppercase">Find us on</h3>
              <SocialLinks />
            </Col>
          </Row>
        </Container>
      </ContentBlock>
    </>
  );
}
