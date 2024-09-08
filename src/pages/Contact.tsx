import { Container, Row, Col } from "react-bootstrap";
import AddressText from "../components/AddressText/AddressText";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import PageBanner from "../components/PageBanner/PageBanner";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 39.748333,
  lng: -104.997539,
};

const styles = [
  { stylers: [{ hue: "#dd0d0d" }] },
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
];

const options = {
  minZoom: 17,
  streetViewControl: false,
  mapTypeControl: false,
  styles,
};

export default function Contact() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });

  const [zoom, setZoom] = useState(17);

  useEffect(() => {
    setTimeout(() => {
      setZoom(17);
    }, 300);
  }, []);

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
              <p>
                Located in the heart of downtown Denver, steps away from the
                Performing Arts Complex, Red Square Euro Bistro is an oasis in
                the city. A place where locals and savvy travelers alike can
                meet, enjoy one of our 100 frozen vodkas, and pair drinks with
                European inspired food..
              </p>
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
