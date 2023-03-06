import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import Button from '~/component/Button/Button';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function MenuItems({ data, onClick }) {
    const classname = cx('menu_item', {
        separate: data.separate,
    });
    return (
        <Button className={classname} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItems;
