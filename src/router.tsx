import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import PrivateParties from './pages/PrivateParties';
import Layout from './components/Layout';

import { createBrowserRouter } from 'react-router-dom';
import Menu from './pages/Menu';
import Bar from './pages/Bar';
import Food from './pages/Food';
import AboutUs from './pages/AboutUs';
import AboutFood from './pages/AboutFood';
import AboutBar from './pages/AboutBar';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: (<Home />)
            },
            {
                path: '/about/us',
                element: (<AboutUs />)
            },
            {
                path: '/about/our-food',
                element: (<AboutFood />)
            },
            {
                path: '/about/our-bar',
                element: (<AboutBar />)
            },
            {
                path: '/bar',
                element: (<Bar />)
            },
            {
                path: '/food',
                element: (<Food />)
            },
            {
                path: '/menu/:section',
                element: (<Menu />)
            },
            {
                path: '/reservations',
                element: (<Reservations />)
            },
            {
                path: '/private-parties',
                element: (<PrivateParties />)
            },
            {
                path: '/contact',
                element: (<Contact />)
            },
        ]
    }
]);