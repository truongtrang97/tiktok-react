import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '~/Context/DataProvider';
import { useElementOnScreen } from '../Home/Home';
import styles from './Live.module.scss';
const cx = classNames.bind(styles);
function Live() {
    const videoRef = useRef([]);
    const data = useContext(DataContext);
    // // console.log('data3',data)
    // const [playing, setPlaying] = useState(false);
    // const [playingIndex, setPlayingIndex] = useState(null);
    // const handleVideo = (index) => {
    //     if (playing) {
    //         videoRef.current[index].pause();
    //         setPlaying(false);
    //     } else {
    //         videoRef.current[index].play();
    //         setPlaying(true);
    //     }
    // };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    // const isVisibile = useElementOnScreen(options, videoRef);
    // useEffect(() => {
    //     if (isVisibile) {
    //         if (!playing) {
    //             videoRef.current.play();
    //             setPlaying(true);
    //         }
    //     } else {
    //         if (playing) {
    //             videoRef.current.pause();
    //             setPlaying(false);
    //         }
    //     }
    // }, [isVisibile]);

    const handleVideoHover = (index) => {
        videoRef.current[index].play();
        console.log(1);
    };

    const handleVideoLeave = (index) => {
        videoRef.current[index].pause();
        console.log(2);
    };

    return (
        <div className={cx('wrapper')}>
            {data.map((data_item, index) => {
                return (
                    <div className={cx('item_video')}>
                        <video
                            // onClick={() => handleVideo(index)}
                            key={index}
                            ref={(el) => (videoRef.current[index] = el)}
                            src={data_item.popular_video.file_url}
                            className={cx('video')}
                            poster={data_item.popular_video.thumb_url}
                            onMouseEnter={() => handleVideoHover(index)}
                            onMouseLeave={() => handleVideoLeave(index)}
                            loop
                        />
                        <div className={cx('desc_video')}>
                            <button className={cx('btn_live')}>LIVE</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Live;
