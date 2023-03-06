import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Propper';
import MenuItems from './MenuItems.js';
import HeaderList from './Header';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const fndefault = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = fndefault }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParrent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParrent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleResettoFirtsPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            interactive
            // visible
            delay={[0, 700]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            offset={[16, 8]}
            render={(attrs) => (
                <div className={cx('menu_list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu_propper')}>
                        {history.length > 1 && (
                            <HeaderList
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu_body')}> {renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResettoFirtsPage}
            // đoạn ni tối ưu bằng useCallback (tách hàm ra)
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
