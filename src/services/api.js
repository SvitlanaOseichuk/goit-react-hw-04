import axios from "axios";

const ACCESS_KEY = 'qQJsdh7KD_tHMuw6LowIxJtkxAKBGx4jJnX983vo15g';

export const requestPictures = async () => {
    const {data} = await axios.get(`https://api.unsplash.com/photos?client_id=${ACCESS_KEY}`);
    return data;
}

export const requestPicturesByQuery = async (query) => {
    const {data} = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`);
    return data;
}



  