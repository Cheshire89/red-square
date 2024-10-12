import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getFormattedNumber } from "@profileStore/profile.slice";
import "./PreHeader.scss";

export default function PreHeader() {
  const profile = useSelector((state: RootState) => state.profile);
  const phoneFormatted: string = useSelector(getFormattedNumber);

  return (
    <Navbar className="pageHeader">
      <Nav>
        <Navbar.Text className="d-none d-md-block">
          Make Reservations Online or Call
        </Navbar.Text>
        <Nav.Link href={"tel:" + profile.phone}>
          <i className="fa-solid fa-phone"></i>
          {phoneFormatted}
        </Nav.Link>
        <Nav.Link href={"mailto:" + profile.email}>
          <i className="fa-solid fa-envelope"></i>
          {profile.email}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
