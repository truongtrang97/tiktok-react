import classNames from 'classnames/bind';
import Styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AcountItem from './Acount_Item';
const cx = classNames.bind(Styles);
function SuggestedAccounts({ label, data = [] }) {
    return (
       
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((acount) => (
                <AcountItem data={acount} key={acount.id} />
            ))}
            <p className={cx('btn_info')}>See all</p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
