import classNames from 'classnames/bind';
import config from '~/config';
import Menu from './Menu';
import { MenuItems } from './Menu';
import SuggestedAccounts from '~/component/SuggestedAccounts';
import * as userService from '~/services/UserService';
import styles from './sidebar.module.scss';
import {
    IconForYou,
    IconFollowing,
    IconLive,
    ActiveIconForYou,
    ActiveIconFollowing,
    ActiveIconLive,
} from '~/component/Icon';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Sidebar() {
    const [getSuggested, setgetSuggested] = useState([]);
    useEffect(() => {
        userService.getSuggested({ page: 1, perpage: 5 }).then((data) => {
            setgetSuggested(data);
        });
    }, []);
    return (
        <aside className={cx('wrapper')}>
            <h2>
                <Menu>
                    <MenuItems
                        title="For You"
                        icon={<IconForYou />}
                        activeIcon={<ActiveIconForYou />}
                        to={config.routes.home}
                    />
                    <MenuItems
                        title="Following"
                        icon={<IconFollowing />}
                        activeIcon={<ActiveIconFollowing />}
                        to={config.routes.following}
                    />
                    <MenuItems
                        title="LIVE"
                        icon={<IconLive />}
                        activeIcon={<ActiveIconLive />}
                        to={config.routes.live}
                    />
                </Menu>
            </h2>
            <SuggestedAccounts label="Suggested accounts" data={getSuggested} />
            <SuggestedAccounts label="Following accounts" data={getSuggested} />
        </aside>
    );
}

export default Sidebar;
