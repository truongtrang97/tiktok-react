import classNames from 'classnames/bind';
import Styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/component/Propper';
import AccountPreview from './AccountPreview/AccountPreview';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);
function AcountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
            
            <Link to={`/${data.nickname}`} className={cx('acountItem')}>
                <Image className={cx('user_img')} src={data.avatar} alt={data.first_name} />
                <div className={cx('item-info')}>
                    <span>
                        <strong className={cx('fullname')}>{`${data.first_name} ${data.last_name}`}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('icon_check')} icon={faCheckCircle} />}
                    </span>
                    <p className={cx('nickname')}>{data.nickname}</p>
                </div>
            </Link>
        </Tippy>
    );
}
AcountItem.propTypes = {};

export default AcountItem;
