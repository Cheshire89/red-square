import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getFormattedNumber } from '@uiStore/ui.slice';

export default function PreHeader() {
    const ui = useSelector((state: RootState) => state.ui);
    const phoneFormatted: string = useSelector(getFormattedNumber);

    return (
        <Navbar className="bg-body-secondary">
            <Nav className="ms-auto">
                <Navbar.Text>Make Reservations Online or Call</Navbar.Text>
                <Nav.Link href={'tel:' + ui.phone}><i className="fa-solid fa-phone"></i>{phoneFormatted}</Nav.Link>
                <Nav.Link href={'mailto:' + ui.email}><i className="fa-solid fa-envelope"></i>{ui.email}</Nav.Link>
            </Nav>
        </Navbar>
    )
};