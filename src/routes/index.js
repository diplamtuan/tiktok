// Pages
import Home from '~/pages/home';
import Following from '~/pages/following';
import Profile from '~/pages/profile';
import Upload from '~/pages/upload';
import Search from '~/pages/search';
import routes from '~/config/routes';
// Layout
import { HeaderOnly } from '~/Components/Layout';
const publicRoutes = [
    {
        path: routes.home,
        element: Home,
    },
    {
        path: routes.following,
        element: Following,
    },
    {
        path: routes.profile,
        element: Profile,
    },
    {
        path: routes.upload,
        element: Upload,
        layout: HeaderOnly,
    },
    {
        path: routes.search,
        element: Search,
        layout: null,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
