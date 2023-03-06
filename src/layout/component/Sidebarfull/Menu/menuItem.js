import classNames from 'classnames/bind';
import Style from './menu.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(Style);
function MenuItems({ icon, to, title, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('menuItems', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('activeIcon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuItems.propTypes = {
    icon: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default MenuItems;
