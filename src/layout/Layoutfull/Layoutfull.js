import classNames from 'classnames/bind';
import style from './Layoutfull.module.scss';
import Headerfull from '../component/Headerfull';
import Sidebarfull from '../component/Sidebarfull';
const cx = classNames.bind(style);
function Layoutfull({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Headerfull />
            <div className={cx('container')}>
                <Sidebarfull />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Layoutfull;
