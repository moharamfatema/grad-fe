import About from '../modules/About/About';
import Home from '../modules/Home/Home';
import NotFound from '../modules/NotFound/NotFound';
import { IPath } from '../types/paths';

const paths: IPath[] = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        exact: true,
    },
    {
        name: 'Meet the Team',
        path: '/about',
        component: About,
    },
    {
        name: '404',
        path: '*',
        component: NotFound,
    },
];

export default paths;
