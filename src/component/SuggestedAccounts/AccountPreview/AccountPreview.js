import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles);
function AccountPreview({ data }) {
    // console.log({ data });
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src={data.avatar} alt={data.first_name} />
                <Button className={cx('follow_btn')} primary>
                    Follow
                </Button>
            </header>
            <div className={cx('item_info')}>
                <span>
                    <strong className={cx('full_name')}>{`${data.first_name} ${data.last_name}`}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check_icon')} icon={faCheckCircle} />}
                </span>
                <p className={cx('nick_name')}>{data.nickname}</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('name')}>{data.followers_count}</strong>
                <span className={cx('value')}>Follower</span>
                <strong className={cx('name')}>{data.likes_count}</strong>
                <span className={cx('value')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
