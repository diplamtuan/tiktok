// Pages
import Home from '~/pages/home';
import Following from '~/pages/following';
import Profile from '~/pages/profile';
import Upload from '~/pages/upload';
import Search from '~/pages/search';

// Layout
import { HeaderOnly } from '~/Components/Layout';
const publicRoutes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/following',
        element: Following,
    },
    {
        path: '/profile',
        element: Profile,
    },
    {
        path: '/upload',
        element: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        element: Search,
        layout: null,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
