import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '@assets/RedSquareLogo.jpg';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";
import { NavigationLink } from '../../models/NavigationLink.model';
// import styles from './Header.module.scss';

export default function Header() {
    const ui = useSelector((state: RootState) => state.ui);
    const [links, setLinks] = useState<NavigationLink[] | null>(null);

    useEffect(() => {
        axios.get('/navigation.json')
            .then((res: AxiosResponse) => setLinks(() => res.data))
    }, [])

    const renderLink = (links: NavigationLink[], nested = false): any => {
        return links.map(({ link, label, children }, index) => {
            const ele = !children ?
                <LinkContainer key={link + index} to={link}>
                    <Nav.Link>{label}</Nav.Link>
                </LinkContainer>
                :
                <NavDropdown key={link + index} title={label} id={label.toLowerCase() + '-id'}>
                    {children.map(({ link, label }, index) => (
                        <LinkContainer key={link + index} to={link}>
                            <NavDropdown.Item>{label}</NavDropdown.Item>
                        </LinkContainer>
                    ))}
                </NavDropdown>;
            return ele

        })
    }

    return (
        <Navbar className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>
                    <Link to={'/'}>
                        <img className="img-fluid" src={logo} alt={ui.name} style={{ maxHeight: '70px' }} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse
                    id="main-nav"
                    className="justify-content-end"
                >
                    <Nav>
                        {(links !== null && links.length) && renderLink(links)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};