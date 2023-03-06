import Video from '~/component/Video/Video';
// import '~/tailwind.css';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useEffect, useState, useMemo } from 'react';
// import { db } from '../../firebase';
const cx = classNames.bind(styles);

// const datas = [
//     {
//         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TlKv8c0aIW1w_DgWrrAD7lFmUFpphaTAjw&usqp=CAU',
//         cmt: 56,
//         fullname: 'BoiBoi_97_kiki',
//         label: 'ngon thì nge đi',
//         labelMusic: 'nhac buon bá cháy',
//         like: '125K',
//         nickname: 'cún cún',
//         share: 652,

//         video: 'https://v16-webapp.tiktok.com/e97230ec747061a80fc458f53a0f2fe7/63dcb737/video/tos/useast2a/tos-useast2a-pve-0037-aiso/d2700bf6e84f41df9740c1f8a46c20ac/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1756&bt=878&cs=0&ds=3&ft=4b~OyM3a8Zmo0yufi64jVNbUPpWrKsdm&mime_type=video_mp4&qs=0&rc=NDxmaTk7Ojs4M2Q7Omc8ZkBpanBuZTc6Zjp3ZjMzZjgzM0A1NC0zMDQvNTUxMC40YDIyYSMuaF8vcjQwYDJgLS1kL2Nzcw%3D%3D&l=2023020301264065C2B7EF111BC15D8F44&btag=80000',
//     },

//     {
//         avatar: 'https://demoda.vn/wp-content/uploads/2022/04/anh-hoat-hinh-buon.jpg',

//         cmt: 126,
//         fullname: 'cloudiee_van',
//         label: 'nghe cho buồn thum thủm',
//         labelMusic: 'nhac hay',
//         like: 89,
//         nickname: 'vanvan',
//         share: '232K',
//         video: 'https://v16-webapp.tiktok.com/0cd42baebfd2f4785dd319f8f0663758/63dcb6f5/video/tos/useast2a/tos-useast2a-pve-0037-aiso/a2fbf400ccf14c969a296232542dd831/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2484&bt=1242&cs=0&ds=3&ft=4b~OyM3a8Zmo0M.fi64jVGRZupWrKsdm&mime_type=video_mp4&qs=0&rc=ZjNkOTRlNGZnZGU0OmY7ZUBpM3E2bTw6ZjhwZjMzZjgzM0AvLzM2Xy1jNi4xNF5fXjZjYSNubmtfcjRvMi5gLS1kL2Nzcw%3D%3D&l=20230203012504D62430ABE090FD5EF823&btag=80000',
//     },
//     {
//         avatar: 'https://demoda.vn/wp-content/uploads/2022/04/anh-hoat-hinh-buon.jpg',

//         cmt: 126,
//         fullname: 'cloudiee_van',
//         label: 'nghe cho buồn thum thủm',
//         labelMusic: 'nhac hay',
//         like: 89,
//         nickname: 'vanvan',
//         share: '232K',
//         video: 'https://v16-webapp.tiktok.com/e718f4df237405bb51fcc4446d906ca5/63dcb2ed/video/tos/useast2a/tos-useast2a-pve-0037-aiso/owDQoPubXv5Q9XCV7exjkgen4hRnFuQDAKAuKB/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2536&bt=1268&cs=0&ds=3&ft=4b~OyM3a8Zmo0N25i64jV426PpWrKsdm&mime_type=video_mp4&qs=0&rc=aGZnOjhkaWVnaDo8MzpkNUBpM3Z0MzM6ZnhxaTMzZjgzM0BeY2MwL2JgXjIxYi0vYGMxYSNyXms2cjRvZy9gLS1kL2Nzcw%3D%3D&l=20230203010735689836FE61A0ED5C89BE&btag=80000',
//     },
// ];
function Home() {
    const [videos, setVideo] = useState([]);
    // useEffect(() => {
    //     db.collection('videos')
    //         .get()
    //         .then((querySnapshot) => {
    //             setVideo(querySnapshot.docs.map((doc) => doc.data()));
    //         });
    // }, []);
    // document.getElementById('focus').focus();

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/videos?page=1&type=for-you')
            .then((res) => res.json())
            .then((res) => setVideo(res.data.map((data) => data)));
        // setVideo(datas.map((data) => data));
    }, []);

    return (
        <div id="focus" tabIndex="1" className={cx('wrapper')}>
            {videos.map((video) => (
                <Video data={video} />
            ))}
        </div>
    );
}

export const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState();
    const callbackFunction = (entries) => {
        const [entry] = entries; //const entry = entries[0]
        setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);
    return isVisibile;
};

export default Home;
//bind ni giúp viết được - trong class
// thay vì viết {styles.className} thì dùng {cx('className')}
