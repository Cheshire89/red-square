import Home from './pages/Home';
import About from './pages/About';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import PrivateParties from './pages/PrivateParties';
import Layout from './components/Layout';

import { createBrowserRouter } from 'react-router-dom';
import Menu from './pages/Menu';
import Bar from './pages/Bar';
import Food from './pages/Food';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: (<Home />)
            },
            {
                path: '/about',
                element: (<About />)
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