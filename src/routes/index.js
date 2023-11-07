// Pages
import Home from '~/pages/home';
import Following from '~/pages/following';
import Profile from '~/pages/profile';
import Upload from '~/pages/upload';
import Search from '~/pages/search';
import config from '~/config';
// Layout
import { HeaderOnly } from '~/layouts';
const publicRoutes = [
    {
        path: config.routes.home,
        element: Home,
    },
    {
        path: config.routes.following,
        element: Following,
    },
    {
        path: config.routes.profile,
        element: Profile,
    },
    {
        path: config.routes.upload,
        element: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        element: Search,
        layout: null,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
