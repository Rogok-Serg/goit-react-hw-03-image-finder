import axios from 'axios';

const KEY_API = '36616176-e2fb394e56572b2a43cdc4409';
const URL = 'https://pixabay.com/api/';
const per_page = 12;
// const parameters = {};
export const fetchData = async (searcheQuery, page) => {
  const { data } = await axios.get(
    `${URL}?key=${KEY_API}&q=${searcheQuery}&page=${page}&image_type=photo&safesearch=true&orientation=horizontal&per_page=${per_page}`
  );
  return data;
};
