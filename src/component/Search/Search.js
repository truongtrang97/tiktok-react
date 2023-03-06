import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/component/Propper';
import AccountItem from '~/component/AccountItem/';
import useDebounce from '~/hook/useDebounce';
import * as searchService from '~/services/SearchService';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loadingResults, setLoadingResults] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);
    // khi người dùng ngưng gõ 500mms thì giá trị debouncedValue mới được update bằng searchValue
    const inputRef = useRef();
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResults([]);
            return;
        }
        // trước khi gọi API
        setLoadingResults(true);
        //   cách 1:
        /*fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
        .then(res=>res.json())//dong ni nó chuyển đổi json.parse thành js object //khi dùng axios bỏ lun
        .then(res=>{
            setSearchResults(res.data)
            // sau khi gọi API 
             setLoadingResults(false)
        .catch(()=>{
            setLoadingResults(false)
        })*/
        //cách 2: dùng thư viện (1)

        // request.get('users/search',{
        //     params:{
        //         q:debouncedValue,
        //         type:'less'
        //     }
        // })
        // .then(res=>{
        //     // console.log(res)
        //     setSearchResults(res.data)
        //     // sau khi gọi API
        //      setLoadingResults(false)
        // .catch(()=>{
        //     setLoadingResults(false)
        // })
        // //  dùng lại : hàm (params)

        // })

        // cách 3: viết async, await
        // const fetchApi= async ()=>{
        //     try{
        //         const res =await request.get
        //         ('users/search',{
        //                 params:{
        //                     q:debouncedValue,
        //                     type:'less'
        //                 }
        //             })

        //                 // console.log(res)
        //                 setSearchResults(res.data)
        //                 // sau khi gọi API
        //                  setLoadingResults(false)
        //         }
        //     catch (error){
        //         setLoadingResults(false)
        //     }
        // }
        // fetchApi()

        // cách 4:
        const fetchApi = async () => {
            //  trước khi gọi API
            setLoadingResults(true);
            const result = await searchService.search(debouncedValue);
            setSearchResults(result);
            // sau khi gọi API
            setLoadingResults(false);
        };
        fetchApi();
    }, [debouncedValue]);
    const handleClose = () => {
        setsearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };
    const handlefocus = () => {
        setShowResults(true);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setsearchValue(searchValue);
        }
    };

    const handleSumit = (e) => {
        e.preventDefault();
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search_result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search_title')}>Account</h4>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowResults(false)}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={handlefocus}
                />
                {!!searchValue && !loadingResults && (
                    <button className={cx('close')} onClick={handleClose}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loadingResults && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search_btn')} onMouseDown={handleSumit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
