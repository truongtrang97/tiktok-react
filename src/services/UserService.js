import * as request from '~/utils/request';

export const getSuggested = async (page, perPage) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
        // console.log(res)
        // setSearchResults(res.data)
        // sau khi gọi API
        //  setLoadingResults(false)
    } catch (error) {
        // setLoadingResults(false)
        console.log('error');
    }
};
