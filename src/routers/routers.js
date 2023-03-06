import Home from '~/pages/Home/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import config from '~/config/';
import Live from '~/pages/Live/Live';
import Profile from '~/pages/Profile';
import { Layoutfull } from '~/layout';

const publicRoutes = [
    { path: config.routes.profile, component: Profile, layout: Layoutfull },
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live, layout: Layoutfull },
    { path: config.routes.upload, component: Upload, layout: null },
    { path: config.routes.search, component: Search },
];
const privalRoutes = [];
export { publicRoutes, privalRoutes };
