import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Container, Toolbar } from '@mui/material';
import { Link } from "react-router-dom";
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

interface NavigationLink {
    label: string;
    link: string;
    children?: NavigationLink[]
}

export default function Header() {
    const ui = useSelector((state: RootState) => state.ui);
    const [links, setLinks] = useState<NavigationLink[] | null>(null);

    useEffect(() => {
        axios.get('/navigation.json')
            .then((res: AxiosResponse) => setLinks(() => res.data))
    }, [])

    return (
        <>
            <ul>
                <li></li>
                <li>
                    <a href={'tel:' + ui.phone}>{ui.phone}</a>
                </li>
                <li>
                    <a href={'mailto:' + ui.email}>{ui.email}</a>
                </li>
            </ul>
            <img alt={ui.name} />
            <Toolbar className="navigation">
                {links !== null ? links?.map(({ label, link, children }, index) => {
                    return <Link key={link + index} to={link}>{label}</Link>
                }) : null}
            </Toolbar>
        </>
    )
};