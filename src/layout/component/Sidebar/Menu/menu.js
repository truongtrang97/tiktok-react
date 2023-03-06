import classNames from "classnames/bind"
import Style from './menu.module.scss';
import PropTypes from 'prop-types';
const cx=classNames.bind(Style)
function Menu({children}) {
    return (<nav className={cx('menu')}>
        {children}
    </nav>  );
}
Menu.propTypes={
    children: PropTypes.node.isRequired
}
export default Menu;