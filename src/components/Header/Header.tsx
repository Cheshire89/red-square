import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { NavigationLink } from "../../models/NavigationLink.model";

import "./Header.scss";
import { useAuthContext } from "../../context/Auth.context";

export default function Header() {
  const [_, pb] = useAuthContext();
  const profile = useSelector((state: RootState) => state.profile);
  const [links, setLinks] = useState<NavigationLink[] | null>(null);

  useEffect(() => {
    pb.collection("navigation")
      .getFirstListItem(`profile="${profile.id}"`)
      .then((res) => setLinks(res.data));
  }, [pb, profile]);

  const renderLink = (links: NavigationLink[], nested = false): any => {
    return links.map(({ link, label, children }, index) => {
      const ele = !children ? (
        <LinkContainer key={link + index} to={link}>
          <Nav.Link>{label}</Nav.Link>
        </LinkContainer>
      ) : (
        <NavDropdown
          key={link + index}
          title={label}
          id={label.toLowerCase() + "-id"}
        >
          {children.map(({ link, label }, index) => (
            <LinkContainer key={link + index} to={link}>
              <NavDropdown.Item>{label}</NavDropdown.Item>
            </LinkContainer>
          ))}
        </NavDropdown>
      );
      return ele;
    });
  };

  return (
    <Navbar expand="lg" sticky="top" className="app-header">
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              className="img-fluid"
              src="RedSquareLogo.jpg"
              alt={profile?.appName || ""}
              style={{ maxHeight: "70px" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav>{links !== null && links.length && renderLink(links)}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
