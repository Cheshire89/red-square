import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function PreHeader() {
    const ui = useSelector((state: RootState) => state.ui);
    return (
        <Navbar className="bg-body-secondary">
            <Nav className="ms-auto">
                <Navbar.Text>Make Reservations Online or Call</Navbar.Text>
                <Nav.Link href={'tel:' + ui.phone}>{ui.phone}</Nav.Link>
                <Nav.Link href={'mailto:' + ui.email}>{ui.email}</Nav.Link>
            </Nav>
        </Navbar>
    )
};