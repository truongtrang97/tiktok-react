import {
    faBagShopping,
    faBlog,
    faCaretDown,
    faCheckCircle,
    faEllipsis,
    faEllipsisVertical,
    faShare,
    faSquarePollVertical,
    faUnlockKeyhole,
    faVoicemail,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import Image from '~/component/Image';
import style from './Profile.module.scss';

import { useContext, useRef, useState } from 'react';
import { DataContext } from '~/Context/DataProvider';
import { useLocation } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Propper';
import AccountPreview from '~/component/SuggestedAccounts/AccountPreview';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import {
    faFacebook,
    faLinkedin,
    faReddit,
    faTelegram,
    faTwitter,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(style);
// eslint-disable-next-line react-hooks/rules-of-hooks
function Profile() {
    const videoRefs = useRef([]);

    const [showMore, setshowMore] = useState(false);
    const [showVideo, setShowVideo] = useState(true);
    const [showLiked, setShowLiked] = useState(false);

    const location = useLocation();
    const pathname = location.pathname;
    const accountName = pathname.substring(1, pathname.length);
    let data = useContext(DataContext);

    const savedData = localStorage.getItem('data_profile');

    if (savedData) {
        data = JSON.parse(savedData);
    } else {
        localStorage.setItem('data_profile', JSON.stringify(data));
    }

    console.log('data2', data);

    const data_item = data.find((item) => item.nickname === accountName);

    const handleMorePreview = () => {
        setshowMore(true);
    };
    const renderMediaShare = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('media')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faFaceSmile} />
                        </span>
                        <span className={cx('content_share')}>Embed</span>
                    </div>
                    <div className={cx('media')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                        <span className={cx('content_share')}>Share Facebook</span>
                    </div>
                    <div className={cx('media')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </span>
                        <span className={cx('content_share')}>Share WhatsApp</span>
                    </div>
                    <div className={cx('media')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <span className={cx('content_share')}>Share Twitter</span>
                    </div>
                    {showMore && (
                        <>
                            <div className={cx('media')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </span>
                                <span className={cx('content_share')}>Share to Linkedln</span>
                            </div>
                            <div className={cx('media')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faReddit} />
                                </span>
                                <span className={cx('content_share')}>Share to Reddit</span>
                            </div>
                            <div className={cx('media')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faTelegram} />
                                </span>
                                <span className={cx('content_share')}>Share to Telegram</span>
                            </div>
                            <div className={cx('media')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faVoicemail} />
                                </span>
                                <span className={cx('content_share')}>Share to Email</span>
                            </div>
                        </>
                    )}
                    <div className={cx('btn_more')}>
                        {!showMore && (
                            <>
                                <button onClick={handleMorePreview}>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </button>
                            </>
                        )}
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    const renderMore = (props) => {
        return (
            <div className={cx('preview_more')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('media')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faSquarePollVertical} />
                        </span>
                        <span className={cx('content_share')}>Report</span>
                    </div>
                    <div className={cx('media')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faBlog} />
                        </span>
                        <span className={cx('content_share')}>Block</span>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    const handleVideoHover = () => {
        videoRefs.current.play();
    };

    const handleVideoLeave = (index) => {
        videoRefs.current.pause();
    };
    const handleShowVideos = () => {
        setShowVideo(true);
        setShowLiked(false);
    };
    const handleShowLiked = () => {
        setShowVideo(false);
        setShowLiked(true);
    };

    return (
        <div>
            <div className={cx('wrapper')}>
                <Image className={cx('avatar')} src={data_item.avatar} alt="" />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span className={cx('fullname')}>{`${data_item.first_name} ${data_item.last_name}`}</span>
                        <FontAwesomeIcon className={cx('icon_check')} icon={faCheckCircle} />
                    </p>
                    <span className={cx('usename')}>{data_item.nickname}</span>
                    <div className={cx('button')}>
                        <Button primary large>
                            Following
                        </Button>
                    </div>
                </div>
                <div className={cx('share_icon')}>
                    <Tippy interactive delay={[800, 0]} placement="bottom" render={renderMediaShare}>
                        <button className={cx('share_btn')}>
                            <FontAwesomeIcon icon={faShare} />
                        </button>
                    </Tippy>
                    <Tippy interactive delay={[800, 0]} placement="bottom" render={renderMore}>
                        <button className={cx('more_btn')}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                    </Tippy>
                </div>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('name')}>{data_item.followings_count}</strong>
                <span className={cx('value')}>Following</span>
                <strong className={cx('name')}>{data_item.followers_count}</strong>
                <span className={cx('value')}>Follower</span>
                <strong className={cx('name')}>{data_item.likes_count}</strong>
                <span className={cx('value')}>Likes</span>
            </p>
            <div className={cx('infor_contact')}>
                <div>{data_item.description}</div>
                <div>Hotline</div>
                <div>Email</div>
            </div>
            <div className={cx('wrapper_video_like')}>
                <div className={cx('video_like__video')} onClick={handleShowVideos}>
                    Videos
                </div>
                <div className={cx('video_like__like')} onClick={handleShowLiked}>
                    <button className={cx('icon_lock')}>
                        <FontAwesomeIcon icon={faUnlockKeyhole} />
                    </button>
                    <p>Liked</p>
                </div>
            </div>
            {!showLiked && showVideo && (
                <>
                    <div className={cx('video')}>
                        <div>
                            <video
                                ref={(el) => (videoRefs.current = el)}
                                className={cx('video_item')}
                                src={data_item.popular_video.file_url}
                                poster={data_item.popular_video.thumb_url}
                                onMouseEnter={() => handleVideoHover()}
                                onMouseLeave={() => handleVideoLeave()}
                                loop
                            />
                        </div>
                    </div>
                </>
            )}
            {showLiked && !showVideo && (
                <>
                    <div className={cx('show_video')}>
                        <div>
                            <FontAwesomeIcon icon={faBagShopping} className={cx('btn_bag')} />
                            <p className={cx('content_like')}>This user's liked videos are private</p>
                            <p className={cx('subcontent_like')}>Videos liked by datvilla94 are currently hidden</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Profile;
