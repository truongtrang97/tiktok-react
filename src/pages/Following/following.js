import classNames from 'classnames/bind';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '~/component/Button';
import Image from '~/component/Image';
import config from '~/config';
import { useParams } from 'react-router-dom';
import { DataContext } from '~/Context/DataProvider';
import styles from './Following.module.scss';
const cx = classNames.bind(styles);
//     const handleVideo = (index) => {
//         console.log('video',video)
//         if (index===playingIndex) {
//             videoRef.current.pause();
//             setPlayingIndex(null);
//         } else {
//             console.log('playingindex1',playingIndex)
//             videoRef.current.src=video[index].popular_video.file_url
//             console.log('[index]',index)
//             videoRef.current.play();
//             setPlayingIndex(index)
//             console.log('playingindex2',playingIndex)

//         }
function Following() {
    // const [data, setData] = useState([]);
    const videoRefs = useRef([]);
    const data = useContext(DataContext);
    // console.log('data', data);

    // useEffect(() => {
    //     fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=18')
    //         .then((res) => res.json())
    //         .then((res) => setData(res.data));
    // }, []);

    const handleVideoHover = (index) => {
        videoRefs.current[index].play();
    };

    const handleVideoLeave = (index) => {
        videoRefs.current[index].pause();
    };

    // const { name1, name2 } = useParams();

    return (
        <div className={cx('wrapper')}>
            {data.map((item_data, index) => {
                console.log('item_data.nickname: ', item_data.nickname);
                return (
                    <Link
                        className={cx('item')}
                        // to={config.routes.profile}
                        to={`/${item_data.nickname}`}
                        // to={`/profile/@${item_data.nickname}`}
                        // to={`/profile/@${item_data.nickname}`}
                        // to={`${config.routes.profile}/@${data.nickname}`}
                    >
                        <video
                            key={item_data.popular_video.id}
                            ref={(el) => (videoRefs.current[index] = el)}
                            className={cx('item_video')}
                            src={item_data.popular_video.file_url}
                            poster={item_data.popular_video.thumb_url}
                            onMouseEnter={() => handleVideoHover(index)}
                            onMouseLeave={() => handleVideoLeave(index)}
                            loop
                        />
                        <div className={cx('infor')}>
                            <Image className={cx('avatar')} src={item_data.avatar} alt={item_data.first_name} />
                            <div>
                                <a href="#" className={cx('fullname')}>
                                    {`${item_data.first_name} ${item_data.last_name}`}
                                </a>
                            </div>
                            <div>
                                <a href="#" className={cx('nickname')}>
                                    {item_data.nickname}
                                </a>
                            </div>
                            <Button primary small>
                                Following
                            </Button>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Following;
