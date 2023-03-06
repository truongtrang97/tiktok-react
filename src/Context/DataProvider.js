import { createContext, useEffect, useState } from 'react';
export const DataContext = createContext();
function DataProvider(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log('vao useEffect');

        fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=18')
            .then((res) => res.json())
            .then((res) => setData(res.data));
    }, []);
    console.log('data1', data);
    return <DataContext.Provider value={data}>{props.children}</DataContext.Provider>;
}
export default DataProvider;
